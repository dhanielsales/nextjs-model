import { Box, Text } from '@chakra-ui/react';
import React from 'react';

export const Home: React.FC = () => {
  return (
    <Box d="flex" alignItems="center" justifyContent="center" height="100%">
      <Text fontSize="xl" color="#202080" fontWeight="bold">
        HOME
      </Text>
    </Box>
  );
};
