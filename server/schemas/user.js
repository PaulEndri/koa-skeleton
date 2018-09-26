import {Schema} from 'mongoose'

const User = new Schema({
    user:   String,
    secret: String,
    active: {
        type:    Boolean,
        default: true
    },
    limit: {
        type:    Number,
        default: 10
    }
})

export default User