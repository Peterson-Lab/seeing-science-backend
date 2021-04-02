import {delay, connections} from './globalSetup'

const globalTeardown = async () => {
    await connections.prisma?.$executeRaw(`DELETE FROM "User";`)
    await delay(5000)
    await connections.prisma?.$disconnect()
    connections.server?.close()
}
export default globalTeardown