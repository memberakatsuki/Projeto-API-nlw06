import { Request, Response } from "express"
import { TagService } from '../services/TagService'

const tagService = new TagService

export class TagController {
  async create(request: Request, response: Response){
    const { name } = request.body
    const tagCreate = await tagService.execute(name)
    return response.json(tagCreate)
  }
}