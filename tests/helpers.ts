import { PrismaClient } from '.prisma/client'
import { Express } from 'express'
import { Server } from 'node:net'
import { buildExpress } from '../src/startup'
import { createPrismaClient } from '../src/utils/prismaHelpers'
import { startExpress } from '../src/utils/startExpress'

export type TestState = {
    prisma: PrismaClient
    app: Express
    server: Server
}

export const setupTestServer = async (): Promise<TestState> => {
    const prisma = createPrismaClient()

    const app = await buildExpress(prisma)

    const server = startExpress(app)

    return {
        prisma,
        app,
        server
    }
}

export const teardownTestServer = async (testState:TestState): Promise<void> => {
    await testState.prisma.$executeRaw(`DELETE FROM "User";`)
    await testState.prisma.$disconnect()
    testState.server.close()
}