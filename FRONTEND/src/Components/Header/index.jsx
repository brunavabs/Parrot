import React from 'react';
import logo from '../../assets/imagens/parrot-logo2.png'
import * as S from './styled';
import { Link, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify'


function Header(){
    const navigate = useNavigate()
    function deslogar(){
        localStorage.clear();
        navigate('/')
        toast.warn('Perfil deslogado com sucesso!')
    }

    let user = localStorage.getItem('user');
    let id = JSON.parse(user).id; 
    let name = JSON.parse(user).name;
    let formattedName = name.toLowerCase().split(' ').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ');
    let path = `/profile/${id}`;
    return(
        <S.Header>
            <Link to='/feed'>
                <img src={logo} alt="logo"/>
            </Link>
            <S.HeaderMenu>
                <S.HeaderGreetings>Olá, <S.HeaderGreetingsLink to={path}>{formattedName}</S.HeaderGreetingsLink> | </S.HeaderGreetings>
                <S.HeaderSignOut onClick={deslogar}>sair</S.HeaderSignOut>
            </S.HeaderMenu>
        </S.Header>
    )
}

export default Header;