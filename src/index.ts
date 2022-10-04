console.clear()
import express, { Request, Response, NextFunction } from 'express'
import statusRoute from './routes/status-route'
import usersRoute from './routes/users-route'


const app = express()


// Configurações da aplicação
app.use(express.json()) //config essencial -> middleware para interpretar json
app.use(express.urlencoded({ extended: true }))


// Configurações de rotas
app.use(usersRoute)
app.use(statusRoute)



// Configurações de inicialização do servidor
app.listen(3000, () => {

    console.log("Servidor rodando na porta: 3000");

})
