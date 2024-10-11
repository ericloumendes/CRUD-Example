import { Router } from 'express';
import tarefasController from '../Controller/tarefasController'



const routes = Router();


routes.get('/', tarefasController.show)

routes.post('/', tarefasController.insert)

routes.put('/', tarefasController.update)

routes.delete('/:id', tarefasController.delete)



export default routes;
