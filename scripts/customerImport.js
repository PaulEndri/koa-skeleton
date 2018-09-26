import mongoose from 'mongoose'
import dotenv from 'dotenv'
import Customer from './server/models/customer'
import customers from 'customers.json'
// load env data
dotenv.load()

mongoose.connect(process.env.constring)

Customer.insertMany(customers, (err, results) => {
    if (err) {
        console.error(err)
    } else {
        console.log('Success')
    }
})

