import React from 'react';
import fotoPerfil from '../../assets/imagens/Captura de Tela 2022-06-06 às 20.31 1.png'
import * as S from './styled';
import { baseUrl, getPosts,  } from '../../services/auth';
import { useEffect } from 'react';
import { Link } from 'react-router-dom'
import moment from 'moment';
import { toast } from 'react-toastify'

function Publicacao({posts, setPosts}){

    useEffect(() => {
        const loadPosts = async () => {
            try {
                const response = await getPosts();
                setPosts(response.data);
            } catch(error) {
                toast.warn(`Erro ao carregar posts`);
            }
        };
        loadPosts();
    }, [setPosts])
    
    return (
        posts.map((post) => {
            const path = `/profile/${post.User.id}`
            let formattedName = post.User.name.toLowerCase().split(' ').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ');
            let formattedDate = moment(post.createdAt).tz('America/Sao_Paulo').format('DD/MM/YYYY HH:mm');
            return(
                <S.Container key={post.id}>
                        <Link to={path}><S.ImagePerfil src={fotoPerfil} alt="Foto do perfil"/></Link>
                        <S.DadosPerfil>
                            <S.NomeEndereco>{formattedName} - apê {post.User.apartament}</S.NomeEndereco>
                            <S.DataPublicacao>{formattedDate}</S.DataPublicacao>
                            <p>{post.content}</p>
                        </S.DadosPerfil>
                        
                </S.Container>
            
            )
            }  
        ).reverse()
    )
}

export default Publicacao;