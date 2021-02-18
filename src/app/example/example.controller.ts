import { json, response, Request, Response } from 'express'
import { getRepository } from 'typeorm'
import { Example } from '../../entity/example'

export const index = async (req: Request, res: Response): Promise<Response> => {
  const items = await getRepository(Example).find()
  return res.json(items)
}
export const create = async (req: Request, res: Response) => {
  const newItem = getRepository(Example).create(req.body)
  const result = await getRepository(Example).save(newItem)
  res.json(result)
}
export const update = async (req: Request, res: Response) => {
  const item = await getRepository(Example).findOne(req.params.id)
  res.json(item)
}
export const edit = async (req: Request, res: Response) => {
  const exampleRepository = getRepository(Example)
  const item: any = await exampleRepository.findOne(req.params.id)
  if (item) {
    exampleRepository.merge(item, req.body)
    await exampleRepository.save(item)
  }
  res.json({
    newData: item,
  })
}
export const deleteItems = async (req: Request, res: Response) => {
  const item = await getRepository(Example).delete(req.params.id)
  res.json(item)
}
