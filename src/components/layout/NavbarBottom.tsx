'use client';

import { Icons } from '@/constants/ICONS';
import { usePathname } from 'next/navigation';

import { Box, Button, Container, HStack, StackDivider, Text } from '@chakra-ui/react';
import Image from 'next/image';
import NextLink from 'next/link';

export default function NavbarBottom() {
  const pathname = usePathname();

  const MENU = [
    {
      icon: Icons.home,
      label: 'HOME',
      href: '/',
    },
    {
      icon: Icons.chart,
      label: 'Privileges',
      href: '/privileges',
    },
    {
      icon: Icons.handshake,
      label: 'Package',
      href: '/package',
    },
    {
      icon: Icons.user,
      label: 'Profile',
      href: '/profile',
    },
  ];

  return (
    <Box position={'fixed'} bottom={0} w="full">
      <Container>
        <HStack
          divider={<StackDivider borderColor="bg" />}
          boxShadow="2xl"
          bg={'white_floral'}
          borderRadius={'36px'}
          mb="16px"
          p="8px"
        >
          {MENU.map((i) => (
            <NextLink passHref href={i.href} legacyBehavior key={i.label}>
              <Button
                w={'full'}
                as="a"
                variant={'link'}
                _hover={{ textDecoration: 'none' }}
                display="flex"
                flexDirection="column"
                textAlign={'center'}
                bg={pathname == i.href ? 'bg' : 'none'}
                borderRadius={'24px'}
                p="8px"
              >
                <Image src={i.icon} alt={i.href} width={18} height={18} />
                <Text mt="4px" variant={'smaller'} color={'blue_second_1'}>
                  {i.label}
                </Text>
              </Button>
            </NextLink>
          ))}
        </HStack>
      </Container>
    </Box>
  );
}
