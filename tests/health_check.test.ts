import { gql, request } from 'graphql-request'
import { setupTestServer, teardownTestServer, TestState } from './helpers'

let testState: TestState | null = null


beforeAll(async () => {
    testState = await setupTestServer()
})

afterAll(async () => {
    if(testState === null) throw new Error('test state cannot be null')
    await teardownTestServer(testState)
})

test("Run health check endpoint", async () => {
    
    const query = gql`
    {
        healthCheck
    }`

    const res = await request('http://localhost:4000/graphql', query)
    expect(res.healthCheck).toBeTruthy()


    
})
