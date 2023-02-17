import { useQuery } from '@apollo/client';
import { getUsersQuery } from '@app/gql/user.query.graphql';

const Index = () => {
  const { data } = useQuery(getUsersQuery, { variables: { email: 'sds' } });
  return <></>;
};

export default Index;
