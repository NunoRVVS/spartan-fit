import { useState } from 'react'
import Hero from './assets/components/Hero'
import Generator from './assets/components/Generator'
import Workout from './assets/components/Workout'
import { generateWorkout } from './utils/functions'

function App() {
  const [workout, setWorkout] = useState(null)
  const [poison, setPoison] = useState('individual')
  const [muscles, setMuscles] = useState([])
  const [goal, setGoal] = useState('strength_power')

  function updateWorkout() {
    if (muscles.length < 1) {
      return
    }
    let newWorkout = generateWorkout({poison,muscles,goal})
    setWorkout(newWorkout)

    // This will allow us to move the screen from Formulate to Workout
    window.location.href = '#workout'
  }


  return (
    <main className='min-h-screen flex flex-col bg-gradient-to-t from-yellow-950 to-green-950 text-white text-sm sm:text-base'>
      <Hero />
      <Generator 
      poison={poison}
      setPoison={setPoison}
      muscles={muscles}
      setMuscles={setMuscles}
      goal={goal}
      setGoal={setGoal}
      updateWorkout={updateWorkout}
      />
      {workout && (<Workout workout={workout}/>)}
    </main>
  )
}

export default App
