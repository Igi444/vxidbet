import { PrismaClient } from '@prisma/client'
const prisma = new PrismaClient()

export default defineEventHandler(async (event) => {
    const { iso2 } = await readBody(event)
    let team = await prisma.country.findFirst({
        where:
        {
            iso2: iso2,
        }
    })
    return team
})
