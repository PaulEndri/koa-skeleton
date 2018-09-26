import {Schema} from 'mongoose'

// updated_at and created_at are automatically created at
const Customer = new Schema({
    user: Number,
    email: String,
    first_name: String,
    last_name: String,
    ip: String,
    latitude: Number,
    longitude: Number,
    deleted: Boolean
})

export default Customer