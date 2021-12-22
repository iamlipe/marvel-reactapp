import * as React from 'react';
import { ImageSourcePropType } from 'react-native'
import { Container } from './styles'

interface PropsImage {
  image: ImageSourcePropType 
}

const BaseList : React.FC<PropsImage> = ({image}) => {
  return (
    <Container source={image} />
  );
}

export default BaseList;


