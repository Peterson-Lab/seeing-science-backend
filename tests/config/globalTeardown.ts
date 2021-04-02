import {connections} from './globalSetup'

const globalTeardown = async () => {
    await connections.prisma?.$disconnect()
    connections.server?.close()
}
export default globalTeardown