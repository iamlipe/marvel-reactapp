import React, { useContext } from 'react';
import MyContext from '../../context/context';
import CardList from './CardList';
import { ObjectCharacter, PropsCharacters } from '../../types/dataProps';

import { 
  Container,
  Title,
  DescriptionText,
  SeeMoreButton,
  TextButton,
  VerticalList,
} from './styles'

const MainList : React.FC<PropsCharacters> = ({ data }) => {
  const { dataId, mainPage } = useContext(MyContext)
  const LIMIT = 10;

  return (
    <Container>
      <Title>
        {`Top 10 - ${mainPage === "Quadrinhos" ? "HQs" : mainPage } Populares`}
      </Title>
      <VerticalList
        horizontal={true}
        showsVerticalScrollIndicator={false}
      >
        { data.sort((a: ObjectCharacter, b: ObjectCharacter) => a.id - b.id )
          .map((item: ObjectCharacter, index: number) => ( index >= LIMIT ? null 
            : <CardList
                key={item.id}
                id={item.id}
                title={item.title}
                image={item.image}
              />
        ))}
      </VerticalList>
      <DescriptionText>
        { data.find((character: ObjectCharacter) => (
          character.id === dataId )).description }
      </DescriptionText>
      <SeeMoreButton>
        <TextButton>Ver mais</TextButton>
      </SeeMoreButton>
    </Container>
  );
};

export default MainList;
