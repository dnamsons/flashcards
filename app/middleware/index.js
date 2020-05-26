import { applyMiddleware } from 'redux'
import { logger } from 'redux-logger'

const middlewares = []

if (process.env.NODE_ENV === 'development') middlewares.push(logger)

export default applyMiddleware(...middlewares)
