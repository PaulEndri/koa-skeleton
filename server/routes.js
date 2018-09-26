import Controllers from './controllers'

const routes = {
    "customer/": {
        method: 'GET',
        action: Controllers.CustomerController.search
    },
    "customer/:id": {
        method: 'GET',
        action: Controllers.CustomerController.get
    },
    "customer/:id": {
        method: 'DELETE',
        action: Controllers.CustomerController.delete
    },
    "customer/:id": {
        method: 'PUT',
        action: Controllers.CustomerController.replace
    },
    "customer/:id": {
        method: 'PATCH',
        action: Controllers.CustomerController.update
    },
    "customer/:": {
        method: 'POST',
        action: Controllers.CustomerController.create
    },
}

export default routes