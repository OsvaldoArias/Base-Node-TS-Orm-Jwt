import { Router } from 'express'
const routes = Router()
// import { index, create, edit, update } from './bodegas.controller'
import { index, update, edit, create, deleteItems } from './example.controller'

routes.get('/', index)
routes.get('/update/:id', update)
routes.post('/create_action', create)
routes.put('/edit/:id', edit)
routes.delete('/delete/:id', deleteItems)

export default routes
