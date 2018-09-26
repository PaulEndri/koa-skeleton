import Controllers from './controllers'

const routes = {
    "user/": {
        method: 'GET',
        action: Controllers.UserController.get
    }
}

export default routes