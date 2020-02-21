import Express from 'express'

import LOGGER from '../../logger'

const router = Express.Router();

router.get('/', (req, res) => {
    LOGGER.info('Resource 2 log message')
    res.send('Welcome to the Resource 2 API!');
})

export default router
