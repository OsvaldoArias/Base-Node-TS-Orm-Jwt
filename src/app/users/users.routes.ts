import { Router } from 'express'
import UsersController from './users.controller'

const routes = Router()

routes.get('/', UsersController.index)
routes.get('/:id', UsersController.update)
routes.post('/', UsersController.create)
routes.put('/:id', UsersController.edit)
routes.delete('/:id', UsersController.delete)

export default routes
