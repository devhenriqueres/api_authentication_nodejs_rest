import { Router, Request, Response, NextFunction } from "express";
import { StatusCodes } from "http-status-codes";
import { json } from "stream/consumers";


const usersRoute = Router()


// BUSCAR TODOS OS USUÁRIOS
usersRoute.get('/users', (req: Request, res: Response, next: NextFunction) => {

    const users = [{ userName: 'Resende' }]
    res.status(StatusCodes.OK).send(users)

})


// BUSCAR UM USUÁRIO
usersRoute.get('/users/:uuid', (req: Request<{ uuid: string }>, res: Response, next: NextFunction) => {

    const uuid = req.params.uuid
    res.status(StatusCodes.OK).send({ uuid })

})



// CRIAR NOVO USUÁRIO
usersRoute.post('/users', (req: Request, res: Response, next: NextFunction) => {

    const newUser = req.body
    console.log(req.body);
    res.status(StatusCodes.CREATED).send(newUser)

})


// ATUALIZAR UM USUÁRIO
usersRoute.put('/users/:uuid', (req: Request<{ uuid: string }>, res: Response, next: NextFunction) => {

    const uuid = req.params.uuid
    const modifiedUser = req.body
    modifiedUser.uuid = uuid

    res.status(StatusCodes.OK).send(modifiedUser)
    console.log(uuid);

})


// DELETAR UM USUÁRIO
usersRoute.delete('/users/:uuid', (req: Request<{ uuid: string }>, res: Response, next: NextFunction) => {

    const uuid = req.params.uuid
    res.sendStatus(StatusCodes.OK)

})


export default usersRoute;
