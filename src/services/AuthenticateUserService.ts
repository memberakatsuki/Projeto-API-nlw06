import { prisma } from '../database/prisma'
import bcrypt from 'bcryptjs'
import { sign } from 'jsonwebtoken'
import { secret } from "../../secret"


interface IAuthenticateRequest {
  email: string,
  password: string
}

export class AuthenticateUserService {
  async execute({email, password}: IAuthenticateRequest){

    const user = await prisma.users.findFirst({
      where:{
        email: email
      }
    })

    if(!user){
      throw new Error('Email/Password incorrect')
    }
    const passwordMatch =  await bcrypt.compare(password, user.password)
    
    if(!passwordMatch){
      throw new Error('Email/Password incorrect')
    }
    const token = sign(
      {
        email: user.email
      },
        secret, 
      {
        subject: user.id,
        expiresIn: "1d"
      }
    )

    return token
  }
}