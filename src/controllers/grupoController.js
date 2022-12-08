import { PrismaClient } from '@prisma/client'
const prisma = new PrismaClient()

const grupoCSeleccionController = async (req, res) => {
    const grupos = await prisma.grupos.findmany({
        include:{
            selecciones: true,
        }
    })
    res.json(grupos);
}

export {grupoCSeleccionController}

