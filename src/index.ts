import express, {Request, Response, NextFunction} from 'express'
import usersRoute from './routes/users.route'


const app = express()

app.use(usersRoute)


app.get('/status', (req: Request, res: Response, next: NextFunction) => {
    res.status(200).send({ foo: 'Deu bom, meu compatriota' })
})



app.listen(3000, () => {
    console.log("Servidor rodando na porta: 3000");

})