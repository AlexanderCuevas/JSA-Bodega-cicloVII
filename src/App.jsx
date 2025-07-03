import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { SlMagnifier } from "react-icons/sl";

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <header>
      <div>
        <div>
         <button>Atras</button>
         </div>
         <div>
        <h1>Bodega</h1>
         </div>
         <div></div>
     </div>
     <div>
      <SlMagnifier/>
      <input placeholder='Buscar Productos'>
      </input>
     </div>
    </header>
    <div>
      <div></div>
      <div class = "conten-iframe">
        <iframe src="" frameborder="0"></iframe>
      </div>
    </div>
      
    </>
  )
}

export default App
