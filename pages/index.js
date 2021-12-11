import { Button, Code, Heading, Text } from '@chakra-ui/react';
import Head from 'next/head';
import { useAuth } from '@/lib/auth';

const Home = () => {
  const auth = useAuth();

  return (
    <div className="container">
      <Head>
        <title>Fast feedback</title>
      </Head>
      <main>
        <Heading>Fast Feedback</Heading>

        <Text>
          Current user : <Code>{auth?.user ? auth.user.email : ''}</Code>
        </Text>

        {auth?.user ? (
          <Button onClick={(e) => auth.signout()}>Sign out</Button>
        ) : (
          <Button onClick={(e) => auth.signInWithGitHub()}>Sign in</Button>
        )}
      </main>
    </div>
  );
};

export default Home;
