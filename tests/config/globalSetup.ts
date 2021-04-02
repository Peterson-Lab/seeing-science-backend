import {buildExpress} from '../../src/startup'
import {startExpress} from '../../src/utils/startExpress'
import {createPrismaClient} from '../../src/utils/prismaHelpers'
import { PrismaClient } from '.prisma/client'
import { Express } from 'express'
import { Server } from 'node:net'

type TestState = {
    prisma?: PrismaClient
    app?: Express
    server?: Server
}

export let connections: TestState = {}

export function delay(ms: number) {
    return new Promise( resolve => setTimeout(resolve, ms) );
}

export default async function() {
    const prisma = createPrismaClient()
    const app = await buildExpress(prisma)

    const server = startExpress(app)



    connections = {
        prisma,
        app,
        server
    }

    await delay(500)
}