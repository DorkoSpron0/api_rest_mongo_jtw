import express from 'express'
import 'dotenv/config'
import './database/connectDb.js'
import authRouter from './routes/auth.routes.js'

const app = express()
const port = process.env.PORT || 5000

app.use(express.json())

app.use('/api/v1', authRouter)

app.listen(port, () => console.log('😈😈😈 hhtp://localhost:5000'))