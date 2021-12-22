import React, { useContext, useState, useEffect } from 'react';
import MyContext from '../../context/context';
import CardList from './CardList';
import { ObjectCharacter, PropsCharacters } from '../../types/dataProps';
import { Container, VerticalList, Title } from './styles'

interface ContextProps {
  dataId: number;
  mainPage: string;
}

const ConnectionList : React.FC<PropsCharacters> = ({ data }) => {
  const { dataId, mainPage } = useContext<ContextProps>(MyContext);
  const [ list, setList ] = useState<any>([]);
  const [ title, setTitle ] =useState<string>("Aparições:");

  const selectData = () => {
    switch (mainPage) {
      case 'Filmes':
        setList(data.find((movie: ObjectCharacter) => (
          movie.id === dataId )).characters);
        setTitle("Personagens:");
        break;
      case "Quadrinhos":
        setList(data.find((character: ObjectCharacter) => (
          character.id === dataId )).creators);
        setTitle("Criadores:");
        break;
      default:
        setList(data.find((character: ObjectCharacter) => (
          character.id === dataId )).moviesApparitions);
        setTitle("Aparições:");
        break;
    }
  }

  useEffect(() => {
    selectData()
  }, [dataId, mainPage, data]);

  return (
    <Container>
      <Title>{title}</Title>
      <VerticalList
        horizontal={true}
        showsVerticalScrollIndicator={false}
      >
        { list !== undefined 
          && list.map((item: any, index: number) => ( 
            <CardList
              key={index}
              image={item.image}
            /> 
        ))}
      </VerticalList>
    </Container>
  );
}

export default ConnectionList;
