import { useState } from 'react'
import './App.css'

import Login from './Components/Login'
import Cadastro from './Components/Cadastro'
import Header from './Components/Header'
import UserInfo from './Components/UserInfo'
import FeedPessoal from './Components/FeedPessoal'

function App() {

  return (
    <div>
      <Header/>
      <UserInfo/>
      <FeedPessoal/>
    </div>
  )
}

export default App
