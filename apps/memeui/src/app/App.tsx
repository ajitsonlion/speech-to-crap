import React, { useEffect, useState } from 'react';
import useFetch from 'use-http';
import { Center, ChakraProvider, Stack } from '@chakra-ui/react';
import { Header } from './Header';
import { Footer } from './Footer';
import { getRandomWelcomeQuery } from './seed';
import { GifResponse } from '@memer/models';
import { Query } from './Query';
import { GifGallery } from './GifGallery';

declare const annyang: any;

export function App() {
  const { get, response } = useFetch<GifResponse>(`/api/gif`);
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
              <Query query={query} refetch={fetchQuerResult}></Query>
            </Center>
            <Center>
              <GifGallery {...response?.data} />
            </Center>
          </Stack>
        </Center>
      </main>
      <Footer />
    </ChakraProvider>
  );
}

export default App;
