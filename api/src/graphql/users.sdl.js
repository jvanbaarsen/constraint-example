export const schema = gql`
  type User {
    id: Int!
    email: String!
    Task: [Task]!
  }

  type Query {
    users: [User!]!
  }

  input CreateUserInput {
    email: String!
  }

  input UpdateUserInput {
    email: String
  }
`
