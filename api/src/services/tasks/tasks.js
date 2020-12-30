import { db } from 'src/lib/db'

export const tasks = () => {
  return db.task.findMany()
}

export const createTask = ({ input: { title } }) => {
  return db.task.create({
    data: {
      title: title,
      owner: {
        connect: {
          id: context.currentUser.id,
        },
      },
    },
  })
}

export const Task = {
  user: (_obj, { root }) => db.task.findOne({ where: { id: root.id } }).user(),
}
