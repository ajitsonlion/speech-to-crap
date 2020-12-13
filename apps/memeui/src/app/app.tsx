import React, { useEffect, useState } from 'react';
import useFetch from 'use-http';
import { Center, ChakraProvider, IconButton, Stack } from '@chakra-ui/react';
import { Image } from '@chakra-ui/react';
import { Header } from './Header';
import { Footer } from './Footer';
import { Text } from '@chakra-ui/react';
import { Icon } from '@chakra-ui/react';
import { FcRefresh } from 'react-icons/fc';
import { getRandomWelcomeQuery } from './seed';

declare const annyang: any;

export function App() {
  const { get, response } = useFetch(`/api/gif`);
  const [query, setQuery] = useState(getRandomWelcomeQuery());

  const fetchQuerResult = async (query: string) => {
    await get(`?query=${query}&random=${Math.random()}`);
  };

  useEffect(() => {
    annyang.start({ autoRestart: true, continuous: true });
    annyang.setLanguage('en-IN');
    fetchQuerResult(query);

    annyang.addCallback('result', async function (phrases) {
      setQuery(phrases[0]);

      await fetchQuerResult(phrases[0]);
    });
  }, []);

  return (
    <ChakraProvider>
      <Header />
      <main>
        <Center>
          <Stack spacing={3}>
            <Center>
              <Text fontSize="3xl">{query}</Text>

              <IconButton
                isRound
                onClick={() => fetchQuerResult(query)}
                aria-label="Show another"
                icon={<Icon as={FcRefresh} />}
              />
            </Center>
            <Image
              fallback={<Image width="50vw" src={response?.data?.preview} />}
              width="50vw"
              src={response?.data?.gif}
            />
          </Stack>
        </Center>
      </main>
      <Footer />
    </ChakraProvider>
  );
}

export default App;
