import { PrismaClient } from '@prisma/client'
const prisma = new PrismaClient()

export default defineEventHandler(async (e) => {
    const { team1, team2, score1, score2 } = await readBody(e)
    return await  prisma.matches.create({data:{
        team1_iso: team1,
        team1_score: parseInt(score1),
        team2_iso: team2,
        team2_score: parseInt(score2)
    }})
})