import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Home from './Pages/Main_page/Home_Page/Home'
import Country from './Pages/Main_page/Country_Page/Country'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
      {/* <Home/> */}
      <Country/>
    </div>
  )
}

export default App
