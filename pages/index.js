import { Box, Button, Code, Flex, Heading, Icon, Text } from '@chakra-ui/react';
import Head from 'next/head';
import { useAuth } from '@/lib/auth';

const Home = () => {
  const auth = useAuth();

  return (
    <Flex
      as="main"
      direction="column"
      align="center"
      justify="center"
      maxW="300px"
      h="100vh"
    >
      <Head>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              if (document.cookie && document.cookie.includes('fast-feedback-auth')) {
                window.location.href = "/dashboard"
              }
              `,
          }}
        />
        <title>Fast feedback</title>
      </Head>
      <Icon name="logo" color="black" h={16} w={32} viewBox="0 0 32 32 ">
        <path
          d="M19.557.113C11.34.32 9.117 8.757 9.03 12.95c1.643-2.67 4.62-3.08 6.931-3.08 2.825.085 10.27.205 17.458 0C40.61 9.663 44.802 3.28 46 .112c-5.391-.085-18.228-.205-26.443 0zM14.422 14.234C3.332 14.234-.468 24.76.045 31.948c3.594-6.418 7.617-7.53 9.243-7.445h6.675c5.956 0 11.039-6.846 12.836-10.27H14.422z"
          fill="currentColor"
        />
      </Icon>

      {auth?.user ? (
        <Button onClick={(e) => auth.signout()}>Sign out</Button>
      ) : (
        <Button mt={4} size="sm" onClick={(e) => auth.signInWithGitHub()}>
          Sign in
        </Button>
      )}
    </Flex>
  );
};

export default Home;
