import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Top from './pages/Top/Top'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <Top />
    </>
  )
}

export default App
