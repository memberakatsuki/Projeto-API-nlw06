import { prisma } from '../database/prisma'

export class ListTagsService {
  async execute (){
    let tags = await prisma.tags.findMany()
    tags = tags.map((tag) => ({
      ...tag, nameCustom: `#${tag.name}`
    }))
    return tags
  }
}