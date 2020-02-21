import winston from 'winston';

// Logs
const logger = winston.createLogger({
    level: process.env.LOG_LEVEL || 'info',
    transports: [
        new winston.transports.Console({
            handleExceptions: true
        })
    ],
    exitOnError: false
})
  
const logRequest = (req, res, next) => {
    logger.info({ 
        request: { 
        headers: req.headers,
        url: req.url,
        method: req.method,
        statusCode: req.statusCode,
        statusMessage: req.statusMessage
        }, 
        response: {
        url: res.connection.parser.incoming.url,
        headers: res.connection.parser.incoming.headers
        }
    })
    next()
}
  
const logError = (err, req, res, next) => {
    logger.error({ 
        request: { 
        headers: req.headers,
        url: req.url,
        method: req.method,
        statusCode: req.statusCode,
        statusMessage: req.statusMessage
        }, 
        response: res,
        error: err
    })
    next()
}

export default logger
export {
    logRequest,
    logError
}
