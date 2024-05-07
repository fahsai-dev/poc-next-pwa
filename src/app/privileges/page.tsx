'use client';

import CardPost from '@/components/card/CardPost';
import { Container, Skeleton, Stack, Text, VStack } from '@chakra-ui/react';
import { useEffect, useState } from 'react';

export default function Privileges() {
  const [data, setData] = useState<any>({});
  const [isLoaded, setIsLoaded] = useState(false);

  const getInitialPage = async () => {
    const res = await fetch('https://dummyjson.com/todos');
    const todosData = await res.json();
    const data = {
      todos: todosData.todos,
    };

    setIsLoaded(true);
    setData(data);
  };

  useEffect(() => {
    getInitialPage();
  }, []);

  if (!isLoaded)
    return (
      <Container py="16px">
        <Skeleton height="22px" />

        <Skeleton mt={'16px'} height="22px" width={'200px'} />
        <Stack mt={'16px'}>
          <Skeleton height="60px" />
          <Skeleton height="60px" />
          <Skeleton height="60px" />
          <Skeleton height="60px" />
          <Skeleton height="60px" />
          <Skeleton height="60px" />
        </Stack>
      </Container>
    );

  return (
    <Container py="16px">
      <Text variant="heading" color={'ci_blue'} textAlign={'center'}>
        Just For You
      </Text>

      <Text variant="heading" color={'ci_blue'}>
        All Todos Card
      </Text>
      <VStack w="full">
        {data?.todos?.map((i: any) => {
          return <CardPost key={i.id} title={i.todo} time={0} />;
        })}
      </VStack>
    </Container>
  );
}
