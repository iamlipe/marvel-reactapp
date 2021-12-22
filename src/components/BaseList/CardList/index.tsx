import * as React from 'react';
import { ImageSourcePropType } from 'react-native'
import { Container, CardImage, TitleCard } from './styles'

interface Props {
  image: ImageSourcePropType ;
  character: string;
}

const CharactersList : React.FC<Props> = ({ image, character }) => {
  return (
    <Container>
      <CardImage source={image} />
      <TitleCard>{character}</TitleCard>
    </Container>
  );
}

export default CharactersList;
