import { Response, Request } from 'express'
import { getRepository } from 'typeorm'
import { UserEntity } from '../../entity/User.entity'

class UsersController {
  static index = async (req: Request, res: Response): Promise<Response> => {
    const userEntity = await getRepository(UserEntity)
      .createQueryBuilder('user')
      .paginate()
    return res.json(userEntity)
  }
  static update = async (req: Request, res: Response) => {
    const item = await getRepository(UserEntity).findOne(req.params.id)
    res.json(item)
  }
  static create = async (req: Request, res: Response) => {
    const user = new UserEntity()
    user.username = req.body.username
    user.password = req.body.password
    user.hasPassword()
    const newItem = getRepository(UserEntity).create(user)
    const result = await getRepository(UserEntity).save(newItem)
    res.json(result)
  }
  static edit = async (req: Request, res: Response) => {
    const userRepository = getRepository(UserEntity)
    const item: any = await userRepository.findOne(req.params.id)
    const user = new UserEntity()
    user.password = req.body.password
    user.hasPassword()
    if (item) {
      userRepository.merge(item, user)
      await userRepository.save(item)
    }
    res.json({
      newData: item,
    })
  }
  static delete = async (req: Request, res: Response) => {
    const item = await getRepository(UserEntity).delete(req.params.id)
    res.json(item)
  }
}

export default UsersController
