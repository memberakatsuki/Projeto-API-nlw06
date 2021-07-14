import { Request, Response, NextFunction } from 'express'
import { prisma } from '../database/prisma'

export async function ensureAdmin(
  request: Request,
  response: Response,
  next: NextFunction
){
  const { user_id } = request
  
  const user = await prisma.users.findFirst({
    where:{
      id: user_id
    }
  })


  if(user?.admin){
    return next()
  }

  return response.status(401).json({
    error: 'Unauthorized.'
  })
}