import { Request, Response } from "express"
import { ListTagsService } from "../services/ListTagsService"


const listtagsService = new ListTagsService

export class ListTagsController {
  async handle(request: Request, response: Response){
    const tags = await listtagsService.execute()

    return response.json(tags)
  }
}