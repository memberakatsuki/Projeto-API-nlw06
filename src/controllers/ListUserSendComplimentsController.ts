import { ListUserSendComplimentsService } from "../services/ListUserSendComplimentsService"
import { Request, Response } from "express"

const listUserSendComplimentsService = new ListUserSendComplimentsService

export class ListUserSendComplimentsController {
  async handle(request: Request, response: Response){
    const { user_id } = request
    const compliments = await listUserSendComplimentsService.execute(user_id)

    return response.json(compliments)
  }
}