import User from '../models/user'
import qs from 'qs'

export default class UserController {
    /**
     * path: /user
     * @param {*} ctx 
     * @param {*} next 
     * @returns {User[]}
     */
    async get(ctx, next) {
        return await User.find()
    }
}