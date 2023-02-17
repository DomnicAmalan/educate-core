import { useQuery } from '@apollo/client';
import { getUsersQuery } from '../src/gql/user.query';

const Index = () => {
  useQuery(getUsersQuery);
  return <></>;
};

export default Index;
