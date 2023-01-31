import { Feedback } from '@/components/Feedback';
import FeedbackLink from '@/components/FeedbackLink';
import { useAuth } from '@/lib/auth';
import { getAllFeedback } from '@/lib/db-admin';
import { GithubIcon } from '@/styles/github';
import { GoogleIcon } from '@/styles/google';
import { Box, Button, Flex, Icon, Link, Stack, Text } from '@chakra-ui/react';
import Head from 'next/head';

const SITE_ID = '5jSD2rpqNynzVd2UCL67';

export async function getStaticProps() {
  const { feedback } = await getAllFeedback(SITE_ID);

  return {
    props: {
      allFeedBack: feedback || [],
    },
  };
}

const Home = ({ allFeedBack }) => {
  const auth = useAuth();

  return (
    <>
      <Box bg="gray.100" py={16}>
        <Flex as="main" direction="column" maxWidth="700px" margin="0 auto">
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
          <Text fontSize="lg" py={4}>
            <Text as="span" fontWeight="bold" display="inline">
              Fast Feedback
            </Text>
            {' was built as part of '}
            <Link
              href="https://react2025.com"
              isExternal
              textDecoration="underline"
            >
              React 2025
            </Link>
            {`. It's the easiest way to add comments or reviews to your static site. Try it out by leaving a comment below. After the comment is approved, it will display below.`}
          </Text>

          {auth?.user ? (
            <Button
              as="a"
              href="/dashboard"
              backgroundColor="white"
              color="gray.900"
              fontWeight="medium"
              mt={4}
              size="lg"
              maxW="200px"
              _hover={{ bg: 'gray.100' }}
              _active={{
                bg: 'gray.100',
                transform: 'scale(0.95)',
              }}
            >
              View Dashboard
            </Button>
          ) : (
            <Stack>
              <Button
                onClick={(e) => auth.signInWithGitHub()}
                backgroundColor="gray.900"
                color="white"
                fontWeight="medium"
                leftIcon={<GithubIcon />}
                mt={4}
                size="lg"
                maxW="200px"
                _hover={{ bg: 'gray.700' }}
                _active={{
                  bg: 'gray.800',
                  transform: 'scale(0.95)',
                }}
              >
                Sign in with Github
              </Button>
              <Button
                onClick={(e) => auth.signInWithGoogle()}
                backgroundColor="white"
                color="gray.900"
                variant={'outline'}
                fontWeight="medium"
                leftIcon={<GoogleIcon />}
                mt={4}
                size="lg"
                maxW="200px"
                _hover={{ bg: 'gray.100' }}
                _active={{
                  bg: 'gray.100',
                  transform: 'scale(0.95)',
                }}
              >
                Sign in with Google
              </Button>
            </Stack>
          )}
        </Flex>
      </Box>
      <Box
        display="flex"
        flexDirection="column"
        width="full"
        maxWidth="700px"
        margin="0 auto"
        mt={8}
      >
        <FeedbackLink paths={[SITE_ID]} />
        {allFeedBack.map((feedback) => (
          <Feedback key={feedback.id} {...feedback} />
        ))}
      </Box>
    </>
  );
};

export default Home;
