import { Request, Response } from "express"
import { UserService } from '../services/UserService'

const userService = new UserService

export class UserController {
  async create(request: Request, response: Response){
    const { name , email, password, admin } = request.body
    const user = await userService.create({name, email, password, admin})
    return response.json(user)
  }
}