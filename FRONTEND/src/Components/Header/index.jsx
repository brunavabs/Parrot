import React from 'react';
import logo from '../../assets/imagens/parrot-logo2.png'
import * as S from './styled';
import { Link } from 'react-router-dom';

import { useSelector } from "react-redux"
import { signIn } from '../../store/users';

function Header(){
    const user = useSelector(signIn)
    let userName = user.payload.usersSlice.name;
    return(
        <S.Header>
            <Link to='/feed'>
                <img src={logo} alt="logo"/>
            </Link>
            <S.HeaderMenu>
                <S.HeaderGreetings>Olá, <S.HeaderGreetingsLink to='/profile'>{userName}</S.HeaderGreetingsLink> | </S.HeaderGreetings>
                <S.HeaderSignOut to='/'>sair</S.HeaderSignOut>
            </S.HeaderMenu>
        </S.Header>
    )
}

export default Header;