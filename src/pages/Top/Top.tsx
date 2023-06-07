import { useState } from 'react'
import { Button } from "@mui/material";
import reactLogo from '../../assets/react.svg'
// import viteLogo from '../vite.svg/'
import viteLogo from '/vite.svg'
import '../../App.css'


function Top() {
//   const [count, setCount] = useState(0)

  return (
    <>
      <Button>text</Button>
      <Button variant="contained">contained</Button>
      <Button variant="outlined">outlined</Button>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

export default Top
