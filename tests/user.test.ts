import { request, gql } from 'graphql-request'


test("Register user", async () => {
    const mutation = gql`
    mutation Register($input: RegisterInput!) {
  register(input: $input) {
    user {
      id
      email
      username
      role
    }
    errors {
      field
      message
        }
    }
    }
    `

    const res = await request('http://localhost:4000/graphql', mutation, {input: {email: "mw123@gmail.com", username: "zir123", password: "hunter2"}})

    expect(res.register.user.id).toBeTruthy()
    expect(res.register.errors).toBeFalsy()
})
//TODO: Wipe record after test is over