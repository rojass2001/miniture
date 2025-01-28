import { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'
import Routings from './Components/Routings';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className='w-full'>
        
    <Routings/>
       </div>
    </>
  )
}

export default App
