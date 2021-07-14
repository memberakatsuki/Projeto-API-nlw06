import bcrypt from 'bcryptjs'
import { prisma } from '../database/prisma'

interface UserRequest {
  name: string;
  email: string;
  password: string;
  admin?: boolean;
}

export class UserService {
  
  async create({ name, email, password, admin = false}: UserRequest){

    const userAlreadyExists = await prisma.users.findFirst({
      where:{
        email
      }
    })

    if(!email){
      throw new Error("Email incorrect")
    }

    if(userAlreadyExists){
      throw new Error("Users already exists")
    }
    const hashedPassword = await bcrypt.hash(password, 8)

    const user = await prisma.users.create({
      data:{
        name,
        email,
        password: hashedPassword,
        admin
      },
      select:{
        id: true,
        name: true,
        email: true,
        admin: true,
      }
    })
    
    return user
  }
}