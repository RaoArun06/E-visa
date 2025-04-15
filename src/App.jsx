import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Home from './Pages/Main_page/Home_Page/Home'
import Country from './Pages/Main_page/Country_Page/Country'
import UserLogin from './Pages/Login/UserLogin'
import Register from './Pages/Login/Register'
function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
      {/* <Home/> */}
      {/* <Country/> */}
      {/* <UserLogin/> */}
      <Register/>
    </div>
  )
}

export default App
