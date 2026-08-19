import { render, screen } from '@testing-library/react'
import Todo from './Todo'

test('renders an unfinished todo', () => {
  const todo = {
    _id: '1',
    text: 'Learn Docker',
    done: false
  }

  render(
    <Todo
      todo={todo}
      deleteTodo={() => {}}
      completeTodo={() => {}}
    />
  )

  expect(screen.getByText('Learn Docker')).toBeInTheDocument()
  expect(screen.getByText('This todo is not done')).toBeInTheDocument()
  expect(screen.getByText('Delete')).toBeInTheDocument()
  expect(screen.getByText('Set as done')).toBeInTheDocument()
})