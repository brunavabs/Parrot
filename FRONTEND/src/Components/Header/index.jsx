import React from 'react';
import logo from '../../assets/imagens/parrot-logo2.png'
import * as S from './styled';
import { Link } from 'react-router-dom';

function Header(){
    let userName = 'Usuário';
    return(
        <S.Header>
            <div>
                <img src={logo} alt="logo"/>
            </div>
            <S.HeaderMenu>
                <S.HeaderGreetings>Olá,{userName} | </S.HeaderGreetings>
                <S.HeaderSignOut href="#">sair</S.HeaderSignOut>
            </S.HeaderMenu>
        </S.Header>
    )
}

export default Header;