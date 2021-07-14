import { prisma } from '../database/prisma'

export class ListUserReceiveComplimentsService {

  async execute(user_id: string){
    const compliments = await prisma.compliments.findFirst({
      where:{
        user_receiver: user_id
      },
      include:{
        fk_user_receiver_complimnets: true,
        fk_tag_id: true
      }
    })

    return compliments
  }
}