import { Card, CardBody, Text } from '@chakra-ui/react';
import React from 'react';
type Props = {
  title: string;
  time: number;
};

export default function CardPost({ title, time }: Props) {
  return (
    <Card w="full" p="16px">
      <Text variant={'subTitleMedium'}>Card Name</Text>
      <Text variant={'normalMedium'}>{title}</Text>
    </Card>
  );
}
