import { ListUserReceiveComplimentsService } from './../services/ListUserReceiveComplimentsService';
import { Request, Response } from "express"

const listUserReceiveComplimentsService = new ListUserReceiveComplimentsService

export class ListUserReceiveComplimentsController {
  async handle(request: Request, response: Response){
    const { user_id } = request
    const compliments = await listUserReceiveComplimentsService.execute(user_id)

    return response.json(compliments)
  }
}