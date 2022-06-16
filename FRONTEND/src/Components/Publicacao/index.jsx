import React from 'react';
import fotoPerfil from '../../assets/imagens/Captura de Tela 2022-06-06 às 20.31 1.png'
import * as S from './styled';
import { baseUrl, getPosts } from '../../services/auth';
import { useEffect, useState } from 'react';

function Publicacao(){
    const [posts, setPosts] = useState([]);
    //const [users, setUsers] = useState([]);
    useEffect(() => {
        async function loadPosts(){
            await getPosts();
        }.then((response) => {
            return setPosts(response.data);
        })
    })

    
    loadPosts()
    
    return(
        
        <S.Container>
                <S.ImagePerfil src={fotoPerfil} alt="Foto do perfil"/>
                <S.DadosPerfil>
                    <S.NomeEndereco> - </S.NomeEndereco>
                    <S.DataPublicacao>00/00/2022 00:00</S.DataPublicacao>
                    {/* {posts.map((post) => (<p>{post.content}</p>))} */}
                </S.DadosPerfil>
        </S.Container>
    )
}

export default Publicacao;