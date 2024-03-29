import HeaderComponent from '../../Components/Header';
import UserComponent from '../../Components/UserInfo';
import ContainerComponent from '../../Components/ContainerPublicacao';
import PublicacaoComponent from '../../Components/PublicacaoPessoal';
import EmptyComponent from '../../Components/EmptyFeed';
import { getUserPost } from '../../services/auth';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { toast } from 'react-toastify'

const Profile = () => {
  const { id } = useParams();
  const [idParam, setIdParam] = useState([]);
    useEffect(() => {
        const loadUser = async () => {
            try {
                const response = await getUserPost(id);
                setIdParam(response.data);
            } catch(error) {
                toast.warn(`Erro: ${error}`);
            }
        };
        loadUser();
    }, [setIdParam])

    const verificaLenght = () => {
      if( idParam.length === 0 )
      return true
    }

  return (
    <>
      <HeaderComponent />
      <UserComponent />
      <ContainerComponent>
        {verificaLenght() ? <EmptyComponent/> : <PublicacaoComponent/>}
      </ContainerComponent>
    </>
  );
}

export default Profile;