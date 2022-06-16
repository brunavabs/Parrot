import React from 'react';
import fotoPerfil from '../../assets/imagens/Captura de Tela 2022-06-06 às 20.31 1.png'
import * as S from './styled';
import { baseUrl, getPosts,  } from '../../services/auth';
import { useEffect, useState } from 'react';

function Publicacao(){
    const [posts, setPosts] = useState([]);
    useEffect(() => {
        const loadPosts = async () => {
            try {
                const response = await getPosts();
                setPosts(response.data);
                console.log(response.data);
            } catch(error) {
                alert(`Erro ao carregar posts: ${error}`);
            }
        };
        loadPosts();
    }, [setPosts])
    
    return (
        posts.map((post) => {
            return(
            
                <S.Container>
                        <S.ImagePerfil src={fotoPerfil} alt="Foto do perfil"/>
                        <S.DadosPerfil>
                            <S.NomeEndereco>{post.User.name} - {post.User.apartament}</S.NomeEndereco>
                            <S.DataPublicacao>{post.createdAt}</S.DataPublicacao>
                            <p>{post.content}</p>
                        </S.DadosPerfil>
                </S.Container>
            
            )
            }  
        )
    )
}

export default Publicacao;