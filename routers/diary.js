
import Router from 'express'

import diaryController from '../controllers/diary.js'




const diaryRouter = Router()

diaryRouter.get('/', diaryController.index)
diaryRouter.get('/:id', diaryController.show)
diaryRouter.post('/', diaryController.create)


export default diaryRouter;