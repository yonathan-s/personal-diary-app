import express from 'express'
import cors from 'cors'
const app = express()

import diaryRouter from './routers/diary.js'

app.use(cors())
app.use(express.json())


app.get('/', (req, res) => {
    res.json({
        name: "Diary",
        description: "An app where you can write diary entries"
    })
})

app.use('/entries', diaryRouter)

export default app;