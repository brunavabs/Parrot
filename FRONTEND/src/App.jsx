import { useState } from 'react'
import './App.css'

import Login from './Components/Login'
import Cadastro from './Components/Cadastro'
import Header from './Components/Header'
import UserInfo from './Components/UserInfo'

function App() {

  return (
    <div>
      <Header/>
      <UserInfo/>
    </div>
  )
}

export default App
