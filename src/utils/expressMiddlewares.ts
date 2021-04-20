import * as Sentry from '@sentry/node'
import * as Tracing from '@sentry/tracing'
import cookieParser from 'cookie-parser'
import cors from 'cors'
import express, { Express } from 'express'
import { __prod__ } from './constants'

const trustProxy = (app: Express) => {
  if (__prod__) {
    app.set('trust proxy', 1)
  }
}
const setupCORS = (app: Express) => {
  app.use(
    cors({
      origin: [process.env.CORS_ORIGIN, process.env.TEST_CORS_ORIGIN],
      credentials: true,
    })
  )
}

const setupUrlEncoded = (app: Express) => {
  app.use(express.urlencoded({ extended: true }))
}

const setupCookieParser = (app: Express) => {
  app.use(cookieParser())
}

const initSentry = (app: Express) => {
  Sentry.init({
    dsn: process.env.SENTRY_DSN,
    integrations: [
      // enable HTTP calls tracing
      new Sentry.Integrations.Http({ tracing: true }),
      // enable Express.js middleware tracing
      new Tracing.Integrations.Express({ app }),
    ],
    environment: process.env.NODE_ENV,
    enabled: __prod__ ? true : false,

    // We recommend adjusting this value in production, or using tracesSampler
    // for finer control
    tracesSampleRate: 1.0,
  })
  // RequestHandler creates a separate execution context using domains, so that every
  // transaction/span/breadcrumb is attached to its own Hub instance
  app.use(Sentry.Handlers.requestHandler())
  // TracingHandler creates a trace for every incoming request
  app.use(Sentry.Handlers.tracingHandler())
}

export const addErrorHandler = (app: Express): void => {
  app.use(Sentry.Handlers.errorHandler())
}

export const addMiddlewares = (app: Express) => {
  trustProxy(app)
  initSentry(app)
  setupCORS(app)
  setupUrlEncoded(app)
  setupCookieParser(app)
  app.use(express.json())
}
