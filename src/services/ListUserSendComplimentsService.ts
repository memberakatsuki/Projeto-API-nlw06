import { prisma } from '../database/prisma'

export class ListUserSendComplimentsService {

  async execute(user_id: string){
    const compliments = await prisma.compliments.findFirst({
      where:{
        user_receiver: user_id
      },
      include: {
        fk_user_sender_compliments: true,
        fk_tag_id: true
      }
    })

    return compliments
  }
}