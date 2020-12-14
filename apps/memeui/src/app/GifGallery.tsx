import React from 'react';
import { Center, Container, Image, Stack } from '@chakra-ui/react';
import { GifResponse } from '@memer/models';
import { Wrap, WrapItem } from '@chakra-ui/react';
export const GifGallery: React.FC<GifResponse> = ({ gifs = [], sentiment }) => {
  return (
    <Wrap>
      <WrapItem>
        {gifs.map((gif, index) => {
          return (
            <Center key={index}>
              <Image
                p={5}
                fallback={<Image src={gif.preview} />}
                src={gif.gif}
              />
            </Center>
          );
        })}
      </WrapItem>
    </Wrap>
  );
};
