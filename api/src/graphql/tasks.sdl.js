export const schema = gql`
  type Task {
    id: Int!
    title: String!
    user: User!
    userId: Int!
  }

  type Query {
    tasks: [Task!]!
  }

  input CreateTaskInput {
    title: String!
    userId: Int!
  }

  input UpdateTaskInput {
    title: String
    userId: Int
  }
`
