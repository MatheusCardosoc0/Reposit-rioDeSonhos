import { useState } from 'react'
import reactLogo from './assets/react.svg'
import { Layaut } from './components/Layaut'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="text-2xl">
      <Layaut></Layaut>
    </div>
  )
}

export default App
