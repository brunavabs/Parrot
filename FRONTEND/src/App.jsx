import { useState } from 'react'
import './App.css'

import Login from './Components/Login'
import Cadastro from './Components/Cadastro'
import Header from './Components/Header'
import UserInfo from './Components/UserInfo'
import FeedPessoal from './Components/FeedPessoal'
import Publicacao from './Components/Publicacao'

function App() {

  return (
    <div>
      <Header/>
      <UserInfo/>
      <Publicacao/>
    </div>
  )
}

export default App
