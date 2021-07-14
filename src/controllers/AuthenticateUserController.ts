import { Request, Response } from "express"
import { AuthenticateUserService } from '../services/AuthenticateUserService'

const authenticateUserService = new AuthenticateUserService

export class AuthenticateUserController{
  async create(request: Request, response: Response){
    const { email, password} = request.body
    const token = await authenticateUserService.execute({email,password})
    return response.json(token)
  }
}