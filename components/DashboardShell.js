import { useAuth } from '@/lib/auth';
import { LogoIcon } from '@/styles/logo';
import { Avatar, Box, Button, Flex, Link } from '@chakra-ui/react';
import NextLink from 'next/link';

const DashboardShell = ({ children }) => {
  const { user, signout } = useAuth();

  return (
    <Box backgroundColor="gray.100" h="100vh">
      <Flex backgroundColor="white" mb={16} w="full">
        <Flex
          alignItems="center"
          justifyContent="space-between"
          pt={4}
          pb={4}
          maxW="1250px"
          margin="0 auto"
          w="full"
          px={8}
        >
          <Flex>
            <NextLink href={'/'} passHref>
              <LogoIcon name="logo" size="16px" mr={8} />
            </NextLink>
            <NextLink href={'/dashboard'} passHref>
              <Link mr={4}>Sites</Link>
            </NextLink>
            <NextLink href={'/feedback'} passHref>
              <Link>Feedback</Link>
            </NextLink>
          </Flex>
          <Flex justifyContent="center" alignItems="center">
            {user && (
              <Button variant="ghost" mr={2} onClick={() => signout()}>
                Log Out
              </Button>
            )}
            <Avatar size="sm" src={user?.photoUrl} />
          </Flex>
        </Flex>
      </Flex>
      <Flex margin="0 auto" direction="column" maxW="1250px" px={8}>
        {children}
      </Flex>
    </Box>
  );
};

export default DashboardShell;
