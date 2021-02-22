import { Router } from 'express'
import multer from 'multer'
const upload = multer()
const router = Router()
import usersRoutes from '../app/users/users.routes'
import authRoutes from '../app/auth/auth.routes'
import { checkJwt } from '../middlewares/checkJwt'
router.use('/users', [upload.none(), checkJwt], usersRoutes)
router.use('/auth', [upload.none()], authRoutes)
export default router
