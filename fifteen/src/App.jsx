import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Field from './fifteen'
import Fifteen from './fifteen'
import Form from './Form'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Form></Form>
    <div></div>
    <Fifteen></Fifteen>
    </>
  )
}

export default App
