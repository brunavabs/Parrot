import React from 'react';
import logo from '../../assets/imagens/parrot-logo2.png'
import * as S from './styled';
import { Link } from 'react-router-dom';


function Header(){
    let user = localStorage.getItem('user');
    let id = JSON.parse(user).id; 
    let name = JSON.parse(user).name;
    let path = `/profile/${id}`;
    return(
        <S.Header>
            <Link to='/feed'>
                <img src={logo} alt="logo"/>
            </Link>
            <S.HeaderMenu>
                <S.HeaderGreetings>Olá, <S.HeaderGreetingsLink to={path}>{name}</S.HeaderGreetingsLink> | </S.HeaderGreetings>
                <S.HeaderSignOut to='/'>sair</S.HeaderSignOut>
            </S.HeaderMenu>
        </S.Header>
    )
}

export default Header;