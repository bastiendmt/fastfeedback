import { Box, Button, Flex, Heading } from '@chakra-ui/react';
import { Text } from '@chakra-ui/react';
import React from 'react';
import AddSiteModal from './AddSiteModal';
import DashboardShell from './DashboardShell';

const EmptyState = () => (
  <Flex
    width="100%"
    backgroundColor="white"
    borderRadius="8px"
    p={16}
    justify="center"
    direction="column"
    align="center"
  >
    <Heading size="md" mb={2}>
      You haven&#39;t added any sites.
    </Heading>
    <Text mb={8}>Welcome, let&#39;s get started.</Text>
    <AddSiteModal>Add your first site</AddSiteModal>
  </Flex>
);

export default EmptyState;
