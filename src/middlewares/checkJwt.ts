import { Request, Response, NextFunction } from 'express'
import jwt from 'jsonwebtoken'
import config from '../config/config'

export const checkJwt = (req: Request, res: Response, next: NextFunction) => {
  const token = <string>req.headers['authorization']
  let jwtPayload
  try {
    jwtPayload = <any>jwt.verify(token, config.jwt)
    res.locals.jwtPayload = jwtPayload
  } catch (e) {
    return res.status(401).json({ message: 'Invalid Token' })
  }
  const { userId } = jwtPayload
  const newToken = jwt.sign({ userId }, config.jwt, { expiresIn: '1h' })
  res.setHeader('token', newToken)
  next()
}
