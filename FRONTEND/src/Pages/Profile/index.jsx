import HeaderComponent from '../../Components/Header';
import UserComponent from '../../Components/UserInfo';
import ContainerComponent from '../../Components/ContainerPublicacao';
import PublicacaoComponent from '../../Components/Publicacao';
import EmptyComponent from '../../Components/EmptyFeed';

const Profile = () => {
  return (
    <div>
      <HeaderComponent />
      <UserComponent />
      <ContainerComponent>
        <EmptyComponent/>
        <PublicacaoComponent/>
      </ContainerComponent>
    </div>
  );
}

export default Profile;