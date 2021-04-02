import { request, gql } from 'graphql-request'


test("Run health check endpoint", async () => {
    
    const query = gql`
    {
        healthCheck
    }`

    const res = await request('http://localhost:4000/graphql', query)
    expect(res.healthCheck).toBeTruthy()


    
})
