import Express from 'express'
import Resource1 from './routes/resource1'
import Resource2 from './routes/resource2'

const router = Express.Router()

router.use('/resource1', Resource1)
router.use('/resource2', Resource2)

export default router
