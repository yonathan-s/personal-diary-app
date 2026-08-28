import express from 'express'
import cors from 'cors'

const app = express()
app.set('view engine', 'ejs')
app.set('views', './views')

import diaryRouter from './routers/diary.js'

app.use(express.urlencoded({extended:true}))
app.use(cors())
app.use(express.json())


app.get('/', (req, res) => {
    res.render('index')
})



app.use('/entries', diaryRouter)

export default app;