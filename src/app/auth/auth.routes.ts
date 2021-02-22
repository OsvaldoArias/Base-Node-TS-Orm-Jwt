import { Router } from 'express'
import AuthController from './auth.controller'

const routes = Router()

routes.post('/login', AuthController.login)

export default routes
