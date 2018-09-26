import Koa from 'koa'
import mongoose from 'mongoose'
import dotenv from 'dotenv'
// import AuthMiddleware from './middleware/auth'
import KoaRouter from 'koa-better-router'
import Routes from './routes'
import BodyParser from 'koa-bodyparser'
// load env data
dotenv.load()

mongoose.connect(process.env.constring)
mongoose.connection.on('error', console.error)

const app    = new Koa()
const Router = KoaRouter({prefix:'/api'})

app.use(BodyParser())

Routes.forEach(({route, action, method}) => {
    Router.addRoute(method, route, action)
})

// Uncomment when Basic Auth is implemented
// app.use(AuthMiddleware)
app.use(Router.middleware())

app.listen(process.env.port, () => {
    console.log(`App succesfully started on http://localhost:${process.env.port}`)
})
