import { useQuery } from '@apollo/client';
import { GET_USERS } from '../../graphql/queries/Users';
import { User } from '../../types';
import Delete from './Delete';
import  userImg from '../../../doc/images/user.png';
import { ButtonCardUser, Card, CardHeader, CardMain, ImgUser, InfoUser, Layout } from './style';

const View = () => {
  const { data, loading } = useQuery<{ user: User[] }>(GET_USERS);

  if (loading) {
      return <p>Carregando...</p>;
  }
  return (
    <Layout>
      {data?.user.map(_user => 
      <Card key={_user.id}>
        <CardHeader>
          <ImgUser src={userImg} alt='imagem do usuário' />
          <Delete id={_user.id} />
        </CardHeader>
        <CardMain>
            <InfoUser>
              <li>{_user.name}</li>
              <li>{_user.email}</li>
              <li>{_user.phone}</li>
            </InfoUser>
            <ButtonCardUser>Atualizar</ButtonCardUser>
        </CardMain>
      </Card>)}
    </Layout>
  );
}

export default View;
