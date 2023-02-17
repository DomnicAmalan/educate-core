// /pages/_app.tsx
import { ApolloProvider } from '@apollo/client';
import apolloClient from '@app/lib/apollo';
import type { AppProps } from 'next/app';

function App({ Component, pageProps }: AppProps) {
  return (
    <ApolloProvider client={apolloClient}>
      <Component {...pageProps} />
    </ApolloProvider>
  );
}

export default App;
