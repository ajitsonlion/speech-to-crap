import React, { useEffect, useState } from 'react';
import useFetch from 'use-http';
import { Center, ChakraProvider, IconButton, Stack } from '@chakra-ui/react';
import { Image } from '@chakra-ui/react';
import { Header } from './Header';
import { Footer } from './Footer';
import { Text } from '@chakra-ui/react';
import { Icon } from '@chakra-ui/react';
import { FcLikePlaceholder } from 'react-icons/fc';

declare const annyang: any;

export function App() {
  const { get, response } = useFetch(`/api/gif`);
  const [query, setQuery] = useState('welcome to shit show');

  const fetchQuerResult = async (query: string) => {
    await get(`?query=${query}`);
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

              <IconButton aria-label="Search database" icon={ <Icon as={FcLikePlaceholder} />} />

            </Center>
            <Image
              fallback={
                <Image
                  boxSize="60vw"
                  objectFit="cover"
                  src={response?.data?.data.images.preview_gif.url}
                />
              }
              boxSize="60vw"
              objectFit="cover"
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
