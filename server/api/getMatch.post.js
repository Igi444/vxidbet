import { PrismaClient } from '@prisma/client'
const prisma = new PrismaClient()
export default defineEventHandler(async (e) => {
    const { iso2 } = await readBody(e)
    return await prisma.matches.findFirst({
        orderBy: {
            matchid: 'desc'
        },
        where: {
            OR: [
                {
                    team1_iso: iso2,
                },
                {
                    team2_iso: iso2,
                }
            ]
        }
    })
})
