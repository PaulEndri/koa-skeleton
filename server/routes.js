import Controllers from './controllers'

const routes = [
    {
        route:  "customer/",
        method: 'GET',
        action: Controllers.CustomerController.search
    },
    {
        route:  "customer/:id",
        method: 'GET',
        action: Controllers.CustomerController.get
    },
    {
        route: "customer/:id",
        method: 'DELETE',
        action: Controllers.CustomerController.delete
    },
    {
        route: "customer/:id",
        method: 'PUT',
        action: Controllers.CustomerController.replace
    },
    {
        route:  "customer/:id",
        method: 'PATCH',
        action: Controllers.CustomerController.update
    },
    {
        route: "customer/",
        method: 'POST',
        action: Controllers.CustomerController.create
    }
]

export default routes