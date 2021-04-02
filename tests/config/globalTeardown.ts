import {connections, delay} from './globalSetup'

const globalTeardown = async () => {
    await delay(500)
    await connections.prisma?.$disconnect()
    connections.server?.close()
}
export default globalTeardown