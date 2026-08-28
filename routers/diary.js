
import Router from 'express'

import diaryController from '../controllers/diary.js'




const diaryRouter = Router()

diaryRouter.get('/', diaryController.index)
diaryRouter.get('/:id', diaryController.show)


export default diaryRouter;