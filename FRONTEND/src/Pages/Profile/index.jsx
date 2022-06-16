import HeaderComponent from '../../Components/Header';
import UserComponent from '../../Components/UserInfo';
import ContainerComponent from '../../Components/ContainerPublicacao';
import PublicacaoComponent from '../../Components/Publicacao';
import EmptyComponent from '../../Components/EmptyFeed';
import { getUserPost } from '../../services/auth';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const Profile = () => {
  const { id } = useParams();
  const [idParam, setIdParam] = useState([]);
    useEffect(() => {
        const loadUser = async () => {
            try {
                const response = await getUserPost(id);
                setIdParam(response.data);
            } catch(error) {
                alert(`Erro: ${error}`);
            }
        };
        loadUser();
    }, [setIdParam])
    
    function verificaLenght(){
        if(idParam.length === 0) return true;
    }
    console.log(idParam);
  return (
    <>
      <HeaderComponent />
      <UserComponent />
      <ContainerComponent>
        {verificaLenght ? <EmptyComponent/> : <PublicacaoComponent/>}
      </ContainerComponent>
    </>
  );
}

export default Profile;