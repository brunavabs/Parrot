import HeaderComponent from '../../Components/Header';
import PublicarComponent from '../../Components/Publicar';
import ContainerComponent from '../../Components/ContainerPublicacao';
import PublicacaoComponent from '../../Components/Publicacao';

const Feed = () => {
  return (
    <>
      <HeaderComponent />
      <PublicarComponent />
      <ContainerComponent>
        <PublicacaoComponent/>
      </ContainerComponent>
    </>
  );
}

export default Feed;