import React from 'react';
import fotoPerfil from '../../assets/imagens/Captura de Tela 2022-06-06 às 20.31 1.png'
import * as S from './styled';
import { baseUrl, getPosts,  } from '../../services/auth';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom'

function Publicacao(){
    const [posts, setPosts] = useState([]);
    useEffect(() => {
        const loadPosts = async () => {
            try {
                const response = await getPosts();
                setPosts(response.data);
            } catch(error) {
                alert(`Erro ao carregar posts: ${error}`);
            }
        };
        loadPosts();
    }, [setPosts])
    
    return (
        posts.map((post) => {
            const path = `/profile/${post.User.id}`
            let formattedName = post.User.name.toLowerCase().split(' ').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ');
            return(
                <S.Container>
                        <Link to={path}><S.ImagePerfil src={fotoPerfil} alt="Foto do perfil"/></Link>
                        <S.DadosPerfil>
                            <S.NomeEndereco>{formattedName} - apê {post.User.apartament}</S.NomeEndereco>
                            <S.DataPublicacao>{post.createdAt}</S.DataPublicacao>
                            <p>{post.content}</p>
                        </S.DadosPerfil>
                        
                </S.Container>
            
            )
            }  
        ).reverse()
    )
}

export default Publicacao;