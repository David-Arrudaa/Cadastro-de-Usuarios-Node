import express from 'express'

//URM
import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

const app = express()
app.use(express.json())

//CREAT
app.post('/users', async (req, res) => {
    try{
    const user = await prisma.user.create({
        data: {
            email: req.body.email,
            age: req.body.age,
            name: req.body.name
        }
    })
    console.log(user);
    res.status(201).json({ message: "Usuario criado com sucesso" })
} catch (err) {
    return res.status(500).json({error : "Internal server error" });
}
})

// READ
app.get('/users/', async (req, res) => {
    const users = await prisma.user.findMany()
    res.status(200).json(users)
})

//UPDATE
app.put('/users/:id', async (req, res) => {
    req.params.id
    const user = await prisma.user.update({
        where: {
            id: req.params.id
        },
        data: {
            email: req.body.email,
            age: req.body.age,
            name: req.body.name
        }
    })
    console.log(user);
    res.status(200).json({ message: "Usuario atualizado com sucesso" })
})

//DELETE
app.delete('/users/:id', async (req, res) => {
    await prisma.user.delete({
        where: {
            id: req.params.id,
        },
    })
    res.status(200).json({ message: "Usuário deletado com sucesso!" })
})


app.listen(3000)


//davidviniciusarruda
//bjE48z4TUACZzOuj