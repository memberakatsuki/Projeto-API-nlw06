import { prisma } from '../database/prisma'

interface IComplementsRequest {
  user_sender: string,
  user_receiver: string,
  tag_id: string,
  message: string,
}


export class ComplimentsService {
  async execute({user_sender, user_receiver, tag_id, message}: IComplementsRequest){
    const userReceiverExists = await prisma.users.findFirst({
      where:{
        id: user_receiver
      }
    })

    if(user_sender === user_receiver){
      throw new Error("Incorrect User Receiver")
    }

    if(!userReceiverExists){
      throw new Error("User receiver does not exists!")
    }

    const compliments = prisma.compliments.create({
      data:{
        user_sender,
        user_receiver,
        tag_id,
        message
      }
    })

    return compliments
  }
}