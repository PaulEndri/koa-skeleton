import mongoose from 'mongoose'
import Customer from '../schemas/customer'

export default mongoose.model("customer", Customer)