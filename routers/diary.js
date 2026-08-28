
import Router from 'express'

import diaryController from '../controllers/diary.js'




const diaryRouter = Router()

diaryRouter.get('/', diaryController.index)


export default diaryRouter;