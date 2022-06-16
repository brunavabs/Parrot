import React from 'react';
import logo from '../../assets/imagens/parrot-logo2.png'
import * as S from './styled';
import { Link } from 'react-router-dom';

function Header(){
    let userName = 'Usuário';
    return(
        <S.Header>
            <Link to='/feed'>
                <img src={logo} alt="logo"/>
            </Link>
            <S.HeaderMenu>
                <S.HeaderGreetings>Olá, <S.HeaderGreetingsLink to='/profile/:id'>{userName}</S.HeaderGreetingsLink> | </S.HeaderGreetings>
                <S.HeaderSignOut to='/'>sair</S.HeaderSignOut>
            </S.HeaderMenu>
        </S.Header>
    )
}

export default Header;