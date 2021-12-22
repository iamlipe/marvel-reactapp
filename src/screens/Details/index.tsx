import React, { useContext, useState } from 'react';
import { View } from 'react-native';
import MyContext from '../../context/context';
import Swiper from 'react-native-swiper'
import { ObjectCharacter } from '../../types/dataProps';

import {
  Slider,
  Header,
  Select,
  ModalDetails,
} from '../../components'

import {
  Container,
  PageTitle,
  ArrowIcon,
  TitlePageIcon,
  TitlePage,
  BackGroundModal,
} from './styles'

import arrowIcon from '../../images/arrowIcon.png'
import charactersIcon from '../../images/charactersIcon.png'

interface ContextProps {
  data: any;
  mainPage: string;
}

const Details: React.FC = () => {
  const [modalVisible, setModalVisible] = useState(false);
  const { data, mainPage } = useContext<ContextProps>(MyContext);
  const LIMIT = Math.ceil(data.length / 4)

  return (
    <Container>
      <Header />
      <PageTitle>
        <ArrowIcon source={ arrowIcon } />
        <TitlePageIcon source={ charactersIcon } />
        <TitlePage>{mainPage === "Quadrinhos" ? "HQs" : mainPage}</TitlePage>
      </PageTitle>
      <Select />
      <Swiper 
        showsButtons={false}
        style={{
          height: '100%',
          alignSelf: 'center',
        }}
        activeDotColor="#FF0000"
        dotColor="#84848D"
      >
        { data.map((item: ObjectCharacter, index: number ) => (
          index >= LIMIT ? null
          : <Slider 
            modal={ () => setModalVisible(!modalVisible) }
            key={index}
            page={index + 1}
          />
        ))}
      </Swiper>
      <BackGroundModal visible={modalVisible} />
      <ModalDetails
        visible={modalVisible}
        modal={ () => setModalVisible(!modalVisible)}
      />
    </Container>
  );
}

export default Details;

