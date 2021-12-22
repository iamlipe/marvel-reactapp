import React from 'react';
import CardList from './CardList';
import { ObjectCharacter, PropsCharacters } from '../../types/dataProps';
import { useNavigation } from '@react-navigation/native';

import {
  Container,
  VerticalList,
  Title,
  SeeMoreButton,
  TextButton
} from './styles'

const CharactersList : React.FC<PropsCharacters> = ({ data }) => {
  const navigation = useNavigation(); 
  const LIMIT = 5;

  return (
    <Container>
      <Title>Personagens</Title>
      <VerticalList
        horizontal={true}
        showsVerticalScrollIndicator={false}
      >
        { data.sort((a: ObjectCharacter, b: ObjectCharacter) => b.id - a.id)
            .map((item: ObjectCharacter, index: number) => (index >= LIMIT ? null
              : <CardList
                  key={item.id}
                  image={item.image}
                  character={item.title} 
                />
        ))}
      </VerticalList>
      <SeeMoreButton onPress={() => navigation.navigate('Details')}>
        <TextButton>+ Ver todos</TextButton>
      </SeeMoreButton>
    </Container>
  );
};

export default CharactersList;
