
import Router from 'express'

import diaryController from '../controllers/diary.js'




const diaryRouter = Router()

diaryRouter.get('/', diaryController.index)
diaryRouter.get('/new', (req, res)=>{
    res.render('form.ejs')
})
diaryRouter.get('/:id', diaryController.show)

diaryRouter.post('/', diaryController.create)
diaryRouter.patch('/:id', diaryController.update)
diaryRouter.delete('/:id', diaryController.destroy)


export default diaryRouter;