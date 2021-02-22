import { getRepository } from 'typeorm'
import { Response, Request } from 'express'
import { UserEntity } from '../../entity/User.entity'
import jwt from 'jsonwebtoken'
import config from '../../config/config'

class AuthController {
  static login = async (req: Request, res: Response) => {
    const { username, password } = req.body
    !(username && password) &&
      res.status(400).json({ message: 'User and Password are required!' })
    const userRepository = getRepository(UserEntity)
    let user: UserEntity
    try {
      user = await userRepository.findOneOrFail({ where: { username } })
    } catch (e) {
      return res.status(400).json({ message: 'User or Password incorrect!' })
    }
    !user.checkPassword(password) &&
      res.status(400).json({ message: 'User or Password incorrect!' })
    const token = jwt.sign({ userId: user.id }, config.jwt, {
      expiresIn: '1h',
    })
    res.json({ token })
  }
}

export default AuthController
