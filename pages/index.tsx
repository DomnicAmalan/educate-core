import { useQuery } from '@apollo/client';
import { getAQuery } from '../src/gql/user.query.graphql';

const Index = () => {
  useQuery(getAQuery, {
    variables: { email: 'testemail@gmail.com' },
  });
  return <></>;
};

export default Index;
