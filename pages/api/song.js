import { PrismaClient } from "@prisma/client"

export default async function handler(req, res) {
    const prisma = new PrismaClient()
    const posts = await prisma.song.findMany()
    res.json(posts)
  }
  