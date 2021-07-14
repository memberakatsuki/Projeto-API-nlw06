import { ensureAdmin } from './middlewares/ensureAdmin'
import { Router } from 'express'

import { UserController } from './controllers/UserController'
import { TagController } from './controllers/TagController'
import { AuthenticateUserController } from "./controllers/AuthenticateUserController"
import { ComplimentsController } from './controllers/ComplimentsController'
import { ensureAuthenticated } from './middlewares/ensureAuthenticated'
import { ListUserReceiveComplimentsController } from './controllers/ListUserReceiveComplimentsController'
import { ListUserSendComplimentsController } from './controllers/ListUserSendComplimentsController'
import { ListTagsController } from "./controllers/ListTagsController"

const userController = new UserController
const tagController = new TagController
const autheticateUserController = new AuthenticateUserController
const complimentsController = new ComplimentsController
const listusersendcomplimentsController = new ListUserSendComplimentsController
const listreceivecomplimentsController = new ListUserReceiveComplimentsController
const listtagsController = new ListTagsController

const router = Router()

router.post("/users", userController.create)
router.post("/tags",ensureAuthenticated, ensureAdmin, tagController.create)
router.post("/login", autheticateUserController.create)
router.post("/compliments", ensureAuthenticated, complimentsController.create )

router.get("/users/compliments/send", ensureAuthenticated, listusersendcomplimentsController.handle)
router.get("/users/compliments/receive", ensureAuthenticated, listreceivecomplimentsController.handle)
router.get('/tags', listtagsController.handle)



export { router }