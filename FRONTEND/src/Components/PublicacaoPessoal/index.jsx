import React from 'react';
import fotoPerfil from '../../assets/imagens/Captura de Tela 2022-06-06 às 20.31 1.png'
import * as S from './styled';
import { getUserPost } from '../../services/auth';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

function PublicacaoPessoal(){
    const { id } = useParams();
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        const loadPosts = async () => {
            try {
                const response = await getUserPost(id);
                setPosts(response.data);
            } catch(error) {
                alert(`Erro ao carregar posts: ${error}`);
            }
        };
        loadPosts();
    }, [setPosts])
    
    return (
        posts.map((post) => {
            let formattedName = post.User.name.toLowerCase().split(' ').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ');
            return(
                <S.Container>
                        <S.ImagePerfil src={fotoPerfil} alt="Foto do perfil"/>
                        <S.DadosPerfil>
                            <S.NomeEndereco>{formattedName} - {post.User.apartament}</S.NomeEndereco>
                            <S.DataPublicacao>{post.createdAt}</S.DataPublicacao>
                            <p>{post.content}</p>
                        </S.DadosPerfil>
                </S.Container>
            )
            }  
        ).reverse()
    )
}

export default PublicacaoPessoal;