import { Router } from 'express';
import tarefas from './tarefas'

const router = Router();

router.use('/tarefas', tarefas)

export default router