import React, { useContext } from 'react';
import MyContext from '../../../context/context';
import { ImageSourcePropType } from 'react-native'
import { LinearGradient } from 'expo-linear-gradient';

import {
  Container,
  ImageCard,
  TitleText,
  DescriptionText,
  SeeDetailsBox,
  SeeDetailsText
} from './styles';

interface ItemProps {
  item: {
    id: number
    title: string;
    description: string;
    image: ImageSourcePropType;
  };
  modal: any;
}

interface ContextProps {
  setItemId: any;
}

const Card : React.FC<ItemProps> = ({ item, modal }) => {
  const { setItemId } = useContext<ContextProps>(MyContext);

  const execModal = () => {
    setItemId(item.id)
    modal()
  }

  return (
    <Container>
      <ImageCard source={item.image} />
      <LinearGradient
        colors={['rgba(255, 0, 0, 1)', 'rgba(128, 0, 0, 0.3)' ]}
        style={{
          alignItems: 'center',
          justifyContent: 'center',
          height: 131,
          borderRadius: 30,
        }}
      >
        <TitleText>{ item.title }</TitleText>
        <DescriptionText>{ item.description }</DescriptionText>
        <SeeDetailsBox onPress={ () => execModal() }>
          <SeeDetailsText>ver detalhes</SeeDetailsText>
        </SeeDetailsBox>
      </LinearGradient>
    </Container>
  );
}

export default Card