import  Express  from "express";
import { PrismaClient } from "@prisma/client";
import cors from 'cors'

const app = Express()
const prisma = new PrismaClient()

app.use(Express.json())

app.use(cors())

app.get("/ads", async (request, response) => {
  const ads = await prisma.ad.findMany()


  return response.json(ads)
})

app.post("/ads", async (request, response) => {
  const body = request.body

  const ad = await prisma.ad.create({
    data: {
      imageUrl: body.imageUrl,
      title: body.title,
      description: body.description,
      price: body.price,
    }
  })

  return response.status(201).json(ad)
})

app.listen(3444)