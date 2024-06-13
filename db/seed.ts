import { db, User, Category, Todo } from 'astro:db'

// https://astro.build/db/seed
export default async function seed() {
  await db.insert(User).values([
    {
      id: 1,
      userName: 'test 1',
      email: 'test1@test1.com',
    },
    {
      id: 2,
      userName: 'test 2',
      email: 'test2@test2.com',
    },
  ])

  await db.insert(Category).values([
    {
      id: 1,
      label: 'Deportes',
    },
    {
      id: 2,
      label: ' Cultura',
    },
    {
      id: 3,
      label: 'Politica',
    },
  ])

  await db.insert(Todo).values([
    {
      id: 1,
      title: 'Todo 1',
      description: 'Todo 1 description',
      completed: true,
      user_id: 1,
      category_id: 1,
    },
    {
      id: 2,
      title: 'Todo 2',
      description: 'Todo 2 description',
      completed: false,
      user_id: 2,
      category_id: 2,
    },
    {
      id: 3,
      title: 'Todo 3',
      description: 'Todo 3 description',
      completed: false,
      user_id: 1,
      category_id: 3,
    },
  ])
}
