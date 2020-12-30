import { db } from 'src/lib/db'
import { createTask } from './tasks'

describe('tasks', () => {
  describe('createTask', () => {
    it('creates a task for the given user', async () => {
      const user = await db.user.create({
        data: {
          email: 'test@example.com',
        },
      })
      context.currentUser = user

      const task = await createTask({
        input: { title: 'Some Title' },
      })

      const lastInsertedTask = await db.task.findFirst()
      expect(lastInsertedTask.id).toBe(task.id)
    })
  })
})
