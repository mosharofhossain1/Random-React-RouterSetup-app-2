
import { Outlet } from 'react-router-dom'
import './App.css'
import Nab from './components/Nab/Nab'

function App() {


  return (
    <div>
      <Nab></Nab>
      <Outlet></Outlet>
    </div>
  )
}

export default App
