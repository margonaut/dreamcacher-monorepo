import expressRouter from 'express-promise-router'
import { generateConfig, HttpStatusCode, sum } from '@dreamcacher/shared'
import DreamsRouter from './dreams'

const Config = generateConfig()
const router = expressRouter()

router.use('/dreams', DreamsRouter)

// Utilities Routes
router.get('/', async (req, res) => {
  res.status(HttpStatusCode.OK).json({
    name: 'Dreamcacher API',
    version: '1',
    count: sum(1, 3),
    dbName: Config.database.name,
    env: Config.app.env,
    git_sha: process.env.GIT_SHA,
  })
})

router.get('/favico.ico', (req, res) => {
  res.sendStatus(HttpStatusCode.NOT_FOUND)
})

export default router
