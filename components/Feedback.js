import { Box, Divider, Heading, Icon, Text } from '@chakra-ui/react';
import { format, parseISO } from 'date-fns';
import React from 'react';

export const Feedback = ({ author, text, createdAt }) => (
  <Box borderRadius={4} maxWidth="700px" w="full">
    <Heading size="sm" as="h3" mb={0} color="gray.800" fontWeight="medium">
      {author}
    </Heading>
    <Text color="gray.500" mb={4} fontSize="xs">
      {format(parseISO(createdAt), 'PPpp')}
    </Text>
    <Text color="gray.800" p={4} my={4}>
      {text}
    </Text>
    <Divider borderColor="gray.200" mt={6} mb={6} />
  </Box>
);
