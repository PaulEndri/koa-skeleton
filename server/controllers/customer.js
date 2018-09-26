import Customer from '../models/customer'

export default class CustomerController {
    /**
     * path: GET /customer
     *
     * @param {*} ctx
     * @returns {Customer[]}
     */
    async search(ctx) {
        const results = await Customer.find({deleted: {$ne: true}})

        ctx.body = JSON.stringify(results)
    }

    /**
     * path: GET /customer/:id
     *
     * @param {*} ctx
     * @returns {Customer}
     */
    async get(ctx) {
        const {id} = ctx.params
        const result = await Customer.find({id, deleted: {$ne: true}})

        if (result) {
            ctx.body = JSON.stringify(result)
        } else {
            ctx.throw(400, `Customer ${id} not found`)
        }
    }

    /**
     * path: PATCH /customer/:id
     *
     * @param {*} ctx
     * @returns {Customer}
     */
    async update(ctx) {
        const {id} = ctx.params
        const {body} = ctx.request

        const result = await Customer.find({id, deleted: {$ne: true}})

        try {
            Object.keys(body).forEach(key => {
                result[key] = body[key]
            })

            ctx.body = await result.save
        } catch (e) {
            console.error(e)

            if (result) {
                ctx.throw(500, `Invalid field or update attempted`)
            } else {
                ctx.throw(400, 'Customer not found')
            }
        }
    }

    /**
     * path: PUT /customer/:id
     *
     * @param {*} ctx
     * @returns {Customer}
     */
    async replace(ctx) {
        const {id} = ctx.params
        const {body} = ctx.request

        const customer = await Customer.find({id, deleted: {$ne: true}})

        try {
            ctx.body = await customer.set({...body, id})
        } catch (e) {
            console.error(e)

            if (customer) {
                ctx.throw(500, `Invalid field or update attempted`)
            } else {
                ctx.throw(400, 'Customer not found')
            }
        }
    }

    /**
     * path: DELETE /customer/:id
     *
     * @param {*} ctx 
     * @returns {null}
     */
    async delete(ctx) {
        try {
            const customer = await Customer.find({id})

            customer.deleted = true

            await customer.save()

            ctx.status(200)
        } catch (e) {
            console.error(e)

            ctx.throw(500, 'Unable to delete customer or customer not found')
        }
    }

    /**
     * path: POST /customer
     *
     * @param {*} ctx
     * @returns {Customer}
     */
    async create(ctx) {
        const {body} = ctx.request
        const id = await this.getNextId()

        try {
            ctx.body = await Customer.create({
                ...body,
                deleted: false,
                id
            })
        } catch(e) {
            console.error(e)

            ctx.throw(500, 'Unable to create customer')
        }
    }

    /**
     * @private
     * @returns {Number}
     */
    async getNextId() {
        const {id} = await Customer.find().sort({id: -1}).limit(1)

        return id + 1
    }
}