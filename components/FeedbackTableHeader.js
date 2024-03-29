import {
  Breadcrumb,
  BreadcrumbItem,
  Flex,
  Heading,
  Link,
} from '@chakra-ui/react';
import NextLink from 'next/link';

const FeedbackTableHeader = ({ siteName }) => (
  <>
    <Breadcrumb>
      <BreadcrumbItem>
        <NextLink href="/feedback" passHref>
          <Link color="blue.500" fontWeight={'medium'}>
            Feedback
          </Link>
        </NextLink>
      </BreadcrumbItem>
    </Breadcrumb>
    <Flex justifyContent="space-between">
      <Heading mb={8}>All feedback</Heading>
    </Flex>
  </>
);

export default FeedbackTableHeader;
