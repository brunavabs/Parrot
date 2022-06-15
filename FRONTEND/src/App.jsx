import { useState } from 'react'
import './App.css'

import Login from './Components/Login'
import Cadastro from './Components/Cadastro'
import Header from './Components/Header'
import UserInfo from './Components/UserInfo'
import FeedPessoal from './Components/FeedPessoal'
import Publicacao from './Components/Publicacao'
import ContainerPublicacao from './Components/ContainerPublicacao'

function App() {

  return (
    <div>
      <Header/>
      <UserInfo/>
      <ContainerPublicacao>
        <Publicacao/>
      </ContainerPublicacao>
    </div>
  )
}

export default App
