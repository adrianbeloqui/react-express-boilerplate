import Express from 'express'

import LOGGER from '../../logger'

const router = Express.Router();

router.get('/', (req, res) => {
    LOGGER.info('Resource 1 log message')
    res.send('Welcome to the Resource 1 API!');
})

export default router
