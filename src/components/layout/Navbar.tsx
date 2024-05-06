'use client';

import { Box, Flex, Text } from '@chakra-ui/react';
import Image from 'next/image';

export default function Navbar() {
  return (
    <Box bg={'white_floral'} px={4}>
      <Flex h={16} alignItems={'center'} justifyContent={'center'}>
        <Image src={'/manifest-icons/icon-48.png'} alt="App icon" width={40} height={40} />
        <Text color="ci_blue" fontSize={'28px'} fontWeight={'700'}>
          {' '}
          PWA{' '}
        </Text>
      </Flex>
    </Box>
  );
}
