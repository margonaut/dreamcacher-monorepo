import { Dream } from '@dreamcacher/database'
import { HttpStatusCode } from '@dreamcacher/shared'
import { Request, Response } from 'express'
import expressRouter from 'express-promise-router'
const router = expressRouter()

router.route('/').get(async (req: Request, res: Response) => {
  const dreams = await Dream.find({})

  return res.status(HttpStatusCode.OK).json(dreams)
})

export default router
