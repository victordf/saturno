import { Request, Response} from 'express'
import knex from '../database/connection'
import bcrypt from 'bcryptjs'

class UserController {
  async index(req: Request, res: Response) {
    const users = await knex('user').select('*')

    return res.status(200).json(users)
  }

  async store(req: Request, res:Response) {
    const { email, password } = req.body
    const hash = await bcrypt.hash(password, 8)

    const registredIds = await knex('user').insert({
      email,
      password: hash
    })

    const user = await knex('user')
      .select('*')
      .where('user.id', '=', registredIds[0])

    return res.status(200).json(user)
  }
}

export default new UserController()