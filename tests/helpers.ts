import { PrismaClient } from '.prisma/client'
import { Express } from 'express'
import { AddressInfo, Server } from 'node:net'
import { buildExpress } from '../src/startup'
import { createPrismaClient } from '../src/utils/prismaHelpers'
import { startExpress } from '../src/utils/startExpress'

export type TestState = {
    prisma: PrismaClient
    app: Express
    server: Server
    port: number
}

function delay(ms: number) {
    return new Promise( resolve => setTimeout(resolve, ms) );
}

export const setupTestServer = async (): Promise<TestState> => {
    const prisma = createPrismaClient()

    const app = await buildExpress(prisma)

    const server = startExpress(app, 0)

    const address = server.address() as AddressInfo

    const port = address.port

    await delay(1000)



    return {
        prisma,
        app,
        server,
        port
    }
}

export const teardownTestServer = async (testState:TestState): Promise<void> => {
    await testState.prisma.$executeRaw(`DELETE FROM "User";`)
    await testState.prisma.$disconnect()
    testState.server.close()
}