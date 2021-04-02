import { Express } from 'express'
import { __prod__ } from './constants'


export const startExpress = (app: Express) => {
    return app.listen(parseInt(process.env.PORT), () =>
        {__prod__ ? null : console.log(`🚀 Server ready at: http://localhost:${process.env.PORT}`)}
  )
}