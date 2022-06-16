import React from 'react';
import fotoPerfil from '../../assets/imagens/Captura de Tela 2022-06-06 às 20.31 1.png'
import * as S from './styled';
import { Link } from 'react-router-dom';

import { useSelector } from "react-redux"
import { signIn } from '../../store/users';

function Publicacao(){
    const user = useSelector(signIn)
    let username = user.payload.usersSlice.name;
    let apartament = user.payload.usersSlice.apartament;
    return(
        <S.Container>
                <S.ImagePerfil src={fotoPerfil} alt="Foto do perfil"/>
                <S.DadosPerfil>
                    <S.NomeEndereco> {username} - {apartament}</S.NomeEndereco>
                    <S.DataPublicacao>00/00/2022 00:00</S.DataPublicacao>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                </S.DadosPerfil>
        </S.Container>
    )
}

export default Publicacao;