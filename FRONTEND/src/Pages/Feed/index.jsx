import HeaderComponent from '../../Components/Header';
import PublicarComponent from '../../Components/Publicar';
import ContainerComponent from '../../Components/ContainerPublicacao';
import PublicacaoComponent from '../../Components/Publicacao';

const Feed = () => {
  return (
    <div>
      <HeaderComponent />
      <PublicarComponent />
      <ContainerComponent>
        <PublicacaoComponent/>
      </ContainerComponent>
    </div>
  );
}

export default Feed;