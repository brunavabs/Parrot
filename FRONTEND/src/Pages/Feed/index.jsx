import HeaderComponent from '../../Components/Header';
import PublicarComponent from '../../Components/Publicar';
import ContainerComponent from '../../Components/ContainerPublicacao';
import PublicacaoComponent from '../../Components/Publicacao';

import { useState } from 'react'

const Feed = () => {
  const [posts, setPosts] = useState([]);
    return (
      <>
        <HeaderComponent />
        <PublicarComponent setPosts={setPosts} />
        <ContainerComponent>
          <PublicacaoComponent posts={posts} setPosts={setPosts}/>
        </ContainerComponent>
      </>
    );
  }


export default Feed;