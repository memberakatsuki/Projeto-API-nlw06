import { prisma } from '../database/prisma'

export class TagService {
  async execute(name: string){
    const tagAlreadyExists = await prisma.tags.findFirst({
      where:{
        name
      }
    })

    if(!name){
      throw new Error("Name incorrect!")
    }

    if(tagAlreadyExists){
      throw new Error('Tag already exists!')
    }
    const tag = await prisma.tags.create({
      data: {
        name
      }
    })

    return tag
  }
}