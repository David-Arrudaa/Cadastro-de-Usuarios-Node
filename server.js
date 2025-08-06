import express from 'express'
import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

const app  = express()
app.use(express.json())
const users = []

app.get('/users/', (req, res) => {
    res.status(200).json(users)
})

app.post('/users', (req, res) => {
    users.push(req.body)
    res.status(201).json({message : "Usuario criado com sucesso"})
})

app.listen(3000)
//req -> requisição
//res -> resposta
// http://localhost:3000

//davidviniciusarruda
//bjE48z4TUACZzOuj