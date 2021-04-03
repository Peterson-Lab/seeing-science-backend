import { Express } from 'express'
import { __prod__ } from './constants'


export const startExpress = (app: Express, port: number) => {
    return app.listen(port, () =>
        {__prod__ ? null : console.log(`🚀 Server ready at: http://localhost:${process.env.PORT}`)}
  )
}