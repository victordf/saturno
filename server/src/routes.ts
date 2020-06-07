import { Router } from 'express'

import UserController from './controllers/UserController'

const router = Router()

router.get('/', (req, res) => {
  res.send('Olá Mundo')
})

// -- Rotas relacionadas ao Usuário
router.get('/user', UserController.index)
router.post('/user', UserController.store)
// -- Fim das rotas relacionadas ao Usuário

export default router