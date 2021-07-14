import { Request, Response } from "express"
import { ComplimentsService } from './../services/ComplimentsService';

const complimentsService = new ComplimentsService

export class ComplimentsController {
  async create(request: Request, response: Response){
    const { user_receiver, tag_id, message } = request.body
    const { user_id } = request
    const compliments = await complimentsService.execute({user_sender: user_id, user_receiver, tag_id, message})
    return response.json(compliments)
  }
}