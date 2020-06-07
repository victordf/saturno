import express from 'express'
import router from './routes'

function createApp() {
  const exp = express()

  function start() {
    middleware()
    exp.listen(3333)
  }

  function middleware() {
    exp.use(express.json())
    exp.use(router)
  }

  return {
    start
  }
}

export default createApp