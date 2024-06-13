import { defineDb, column, defineTable } from 'astro:db'

// https://astro.build/db/config

const User = defineTable({
  columns: {
    id: column.number({ primaryKey: true }),
    userName: column.text({ unique: true }),
    email: column.text({ unique: true }),
  },
})

const Todo = defineTable({
  columns: {
    id: column.number({ primaryKey: true }),
    title: column.text(),
    description: column.text(),
    completed: column.boolean({ default: false }),
    user_id: column.number({ references: () => User.columns.id }),
    category_id: column.number({ references: () => Category.columns.id }),
  },
})

const Category = defineTable({
  columns: {
    id: column.number({ primaryKey: true }),
    label: column.text({ unique: true }),
  },
})

export default defineDb({
  tables: {
    User,
    Todo,
    Category,
  },
})
