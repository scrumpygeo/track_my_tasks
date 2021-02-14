import { useState } from 'react'
import Header from '../src/components/Header'
import Tasks from '../src/components/Tasks'

const App = () => {
  // create state and use dummy data as default
  const [tasks, setTasks] = useState([
    {
      id: 1,
      text: 'Vet Appointment',
      day: 'Feb 16th at 10:15am',
      reminder: true,
    },
    {
      id: 2,
      text: 'Gardener Appointment',
      day: 'Feb 17th at 09:15am',
      reminder: true,
    },
    {
      id: 3,
      text: 'Car Service',
      day: 'Feb 18th at 12:15am',
      reminder: false,
    },
  ])

  // Delete task
  const deleteTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id))
  }
  return (
    <div className='container'>
      <Header />
      {tasks.length > 0 ? (
        <Tasks tasks={tasks} onDelete={deleteTask} />
      ) : (
        'No Tasks'
      )}
    </div>
  )
}

export default App
