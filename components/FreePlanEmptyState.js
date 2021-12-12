import { Box, Button, Heading } from '@chakra-ui/react';
import { Text } from '@chakra-ui/react';
import React from 'react';
import DashboardShell from './DashboardShell';

const FreePlanEmptyState = () => {
  return (
    <DashboardShell>
      <Box width="100%" backgroundColor="white">
        <Heading size="md">Get feedback on your site instantly.</Heading>
        <Text>Start today, then grow with us</Text>
        <Button>Upgrade to Starter</Button>
      </Box>
    </DashboardShell>
  );
};

export default FreePlanEmptyState;
