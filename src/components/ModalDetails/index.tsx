import React, { useContext, useEffect, useState } from 'react';
import { ImageSourcePropType } from 'react-native';
import MyContext from '../../context/context';
import { Modal } from 'react-native';

import closeIcon from '../../images/closeIcon.png';
import starsIcon from '../../images/starts.png';

import {
  Container,
  CloseModalButton,
  CloseModalIcon,
  ImageModal,
  TextList,
  TextTitle,
  Info,
  TextTitleList,
  Stars,
  RatingText,
  RatingBox,
} from './styles';

interface ModalProps {
  visible: boolean;
  modal: any
}

interface Item {
  title: string;
}

interface Context {
  data: any;
  itemId: number | undefined;
  mainPage: string;
}

const ModalDetails : React.FC<ModalProps> = ({ visible, modal }) => {
  const { data, itemId, mainPage} = useContext<Context>(MyContext);
  const [title, setTitle] = useState<string | null>();
  const [image, setImage] = useState<ImageSourcePropType | undefined>(undefined);
  const [item, setItem] = useState<any>([]);
  const [titleList, setTitleList] = useState<string>("Aparições:");

  const selectItem = () => {
    switch (mainPage) {
      case 'Filmes':
        setItem(
          data.find((item: any) => item.id === itemId )
          .characters);
        break;
      case "Quadrinhos":
        setItem(
          data.find((item: any) => item.id === itemId )
          .creators);
        break;
      default:
        setItem(
          data.find((item: any) => item.id === itemId )
          .moviesApparitions);
        break;
    }
  }

  const SelectTitleList = () => {
    switch (mainPage) {
      case 'Personagens':
        setTitleList("Avaliações dos Fãs:")
        break;
      default:
        setTitleList("Crítica:")
        break;
    }
  }
  
  useEffect(() => {
    if ( itemId !== undefined && data !== undefined ) {
      setImage(
        data.find((item: any) => item.id === itemId).image
      );
      setTitle(
        data.find((item: any) => item.id === itemId).title
      );
      selectItem()
    }
  }, [itemId])

  useEffect(() => {
    SelectTitleList();
  },[mainPage])

  return (
    <Modal
      animationType="slide"
      transparent={true}
      visible={visible}
    >
      <Container>
        { image !== undefined && <ImageModal source={image} /> }
        <Info>
          <TextTitle>{title}</TextTitle>
          { mainPage === "Personagens" && <TextTitleList>Aparições:</TextTitleList>}
          { item !== undefined && mainPage === "Personagens" 
            && item.map((item: Item) => <TextList>{item.title}</TextList> )}
          { mainPage !== "Personagens" && itemId !== undefined
            && <TextList>
              {data.find((item: any) => item.id === itemId).description}
            </TextList> }
        </Info>
        <RatingBox >
          <RatingText>{titleList}</RatingText>
          <Stars source={starsIcon} />
        </RatingBox>
        <CloseModalButton onPress={modal} >
          <CloseModalIcon source={closeIcon} />
        </CloseModalButton>
      </Container>
    </Modal>
  );
}

export default ModalDetails;
