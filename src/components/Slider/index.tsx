import React, { useContext, useState } from 'react';
import MyContext from '../../context/context';
import Card from './Card';
import { Container } from './styles';

interface IndexProps {
  page: number;
  modal: any;
}

const Slider : React.FC<IndexProps> = ({ page, modal }) => {
  const { data } = useContext(MyContext);
  const LIMIT_INDEX = data.length - 1
  const INDEX_1 = page - 1 !== 0 ? (page - 1) + (3 * (page - 1)) : 0;
  const INDEX_2 = page !== 1 ? page + (3 * (page - 1)) : 1;
  const INDEX_3 = page + 1 !== 2 ? (page + 1) + (3 * (page - 1)) : 2;
  const INDEX_4 = page + 2 !== 3 ? (page + 2) + (3 * (page - 1)) : 3;

  return (
    <Container>
      { INDEX_1 <= LIMIT_INDEX && <Card modal={modal} item={data[INDEX_1]} /> }
      { INDEX_2 <= LIMIT_INDEX && <Card modal={modal} item={data[INDEX_2]} /> }
      { INDEX_3 <= LIMIT_INDEX && <Card modal={modal} item={data[INDEX_3]} /> }
      { INDEX_4 <= LIMIT_INDEX && <Card modal={modal} item={data[INDEX_4]} />}
    </Container>
  );
}

export default Slider;