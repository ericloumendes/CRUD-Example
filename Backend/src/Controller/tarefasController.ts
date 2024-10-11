import {Request, Response} from 'express';
import {CreateCon, deleteTarefas, GetTarefas, insertTarefas, updateTarefas} from '../bd'
const tarefasController = {
    show: async (req: Request, res: Response) => {
        const con = await CreateCon();
        const data = await GetTarefas(con)

        return res.status(200).json(data)
    },

    insert: async (req: Request, res: Response) => {
        const con = await CreateCon();
        console.log(req.body);
        
            await insertTarefas(con, req.body.id, req.body.nome, req.body.status)

        res.status(200).json(req.body)
    },

    update: async (req: Request, res:Response) => {
        const con = await CreateCon();
        await updateTarefas(con, req.body.id, req.body.nome, req.body.status)

        res.status(200).json(req.body)
    },

    delete: async (req: Request, res: Response) => {
        const con = await CreateCon();
        const {id} = req.params
        await deleteTarefas(con, id)

        res.status(200).json({message: `Tarefa de id ${id} deletada com sucesso`})
    }
}

export default tarefasController;