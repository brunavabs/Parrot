import React, { useEffect, useState } from 'react';
import fotoPerfil from '../../assets/imagens/Captura de Tela 2022-06-06 às 20.31 1.png'
import * as S from './styled';
import { useParams } from 'react-router-dom';
import { getUser, updateUser } from '../../services/auth';
import { useSelector } from 'react-redux';
import { toast } from 'react-toastify'

function UserInfo(){    
    const userIdRedux = useSelector((state) => state.id)
    
    const { id } = useParams();

    const [user, setUser] = useState(null);

    useEffect(() => {
        const loadUser = async () => {
            try {
                const response = await getUser(id);
                setUser(response.data);
            } catch(error) {
                toast.warn(`Erro: ${error}`);
            }
        };
        loadUser();
    }, [setUser])
    
    function verificaId(){
        return id == userIdRedux
    }
    
    const verificacao = verificaId()
    const path = `/edit/${id}`
    return(
        <S.Container>
            <S.SubContainer>
                <S.ImagePerfil src={fotoPerfil} alt="Foto do perfil"/>
                <S.DadosPerfil>
                    <S.DadosPerfilTitulo>{user?.name}</S.DadosPerfilTitulo>
                    <span>apê {user?.apartament}</span>
                    <span>{user?.email}</span>
                </S.DadosPerfil>
            </S.SubContainer>
            <S.SubContainerEditarBtn>
                { verificacao ? <S.EditarBtn to={path}>editar</S.EditarBtn> : null}
            </S.SubContainerEditarBtn>
        </S.Container>
    )
}

export default UserInfo;