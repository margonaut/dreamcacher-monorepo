import express from 'express'
import { sum } from '@dreamcacher/shared'


const app = express()
const port = 3001

app.get('/', (req, res) => {
  res.send(`The sum is! ${sum(1, 2)}`)
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})