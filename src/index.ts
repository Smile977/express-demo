import express, { Request, Response } from 'express'

const app = express()
const port = process.env.PORT || 3000

app.get('/', (req: Request, res: Response) => {
  let helloMsg = 'Hello World. I am going to learn node js!!!'
  res.send(helloMsg)
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})