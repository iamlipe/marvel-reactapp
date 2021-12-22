import React, { useContext } from 'react';
import MyContext from '../../../context/context';
import { ImageSourcePropType } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { Text } from 'react-native';

import { 
  Container,
  RatingBox,
  BackGroundImage,
  Stars,
  RatingText,
  NotSelected
} from './styles';


import starsIcon from '../../../images/starts.png';

interface Props {
  image: ImageSourcePropType;
  title: string;
  id: number;
}

interface ContextProps {
  setDataId: any;
  dataId: number;
}

const CardList: React.FC<Props> = ({ title, image, id }) => {
  const { setDataId, dataId } = useContext<ContextProps>(MyContext);

  return (
    <Container
      id={id}
      index={ dataId }
      active={ dataId === id ? true : false }
      onPress={ () => setDataId(id) }
    >
      <NotSelected active={ dataId === id ? true : false } />
      <BackGroundImage
        id={id}
        index={ dataId }
        active={ dataId === id ? true : false }
        source={image} 
      />
      { dataId === id && 
        <LinearGradient
          colors={['rgba(128, 0, 0, 0.3)', 'rgba(255, 0, 0, 1)' ]}
          style={{ 
            width: 200,
            height: 59,
            borderRadius: 30,
            display: 'flex',
            justifyContent: 'center',
            padding: 10,
          }}
        >
          <Text style={{ color: "#fff", width: 202 }} >{title}</Text>
          <RatingBox >
            <RatingText>Avaliações dos Fãs</RatingText>
            <Stars source={starsIcon} />
          </RatingBox>
        </LinearGradient>
      }
    </Container>

  );
};

export default CardList;

