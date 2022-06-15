import React from 'react';
import fotoPerfil from '../../assets/imagens/Captura de Tela 2022-06-06 às 20.31 1.png'
import * as S from './styled';
import { Link } from 'react-router-dom';


function UserInfo(){
    return(
        <S.Container>
            <S.SubContainer>
                <S.ImagePerfil src={fotoPerfil} alt="Foto do perfil"/>
                <S.DadosPerfil>
                    <S.DadosPerfilTitulo>Nome Sobrenome</S.DadosPerfilTitulo>
                    <span>apê 82</span>
                    <span>user@mail.com</span>
                </S.DadosPerfil>
            </S.SubContainer>
            <S.SubContainerEditarBtn>
                <S.EditarBtn>
                    editar
                </S.EditarBtn>
            </S.SubContainerEditarBtn>
        </S.Container>
    )
}

export default UserInfo;