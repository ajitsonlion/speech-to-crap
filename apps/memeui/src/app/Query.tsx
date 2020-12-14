import React from 'react';
import { Center, Icon, IconButton, Text } from '@chakra-ui/react';
import { FcRefresh } from 'react-icons/fc';
interface Props {
  query: string;
  refetch: (...args: any[]) => any;
}
export const Query: React.FC<Props> = ({ query, refetch }) => {
  return (
    <>
      <Text fontSize="3xl">{query}</Text>

      <IconButton
        isRound
        onClick={() => refetch(query)}
        aria-label="Show another"
        icon={<Icon as={FcRefresh} />}
      />
    </>
  );
};
