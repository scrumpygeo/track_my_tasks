import { useState } from 'react'
import Header from '../src/components/Header'
import Tasks from '../src/components/Tasks'
import AddTask from '../src/components/AddTask'

const App = () => {
  const [showAddTask, setShowAddTask] = useState(false)

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

  // Add Task
  const addTask = (task) => {
    // generate id on the fly as not using db
    const id = Math.floor(Math.random() * 10000 + 1)

    const newTask = { id, ...task }
    setTasks([...tasks, newTask])
  }

  // Delete Task
  const deleteTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id))
  }

  // Toggle reminder
  const toggleReminder = (id) => {
    setTasks(
      tasks.map((task) =>
        task.id === id ? { ...task, reminder: !task.reminder } : task
      )
    )
  }

  return (
    <div className='container'>
      <Header
        onAdd={() => setShowAddTask(!showAddTask)}
        showAdd={showAddTask}
      />
      {showAddTask && <AddTask onAdd={addTask} />}
      {tasks.length > 0 ? (
        <Tasks tasks={tasks} onDelete={deleteTask} onToggle={toggleReminder} />
      ) : (
        'No Tasks'
      )}
    </div>
  )
}

export default App
