import React, { useState, useEffect } from 'react'
import MyContext from './context'
import Movies from '../data/movies';
import Characters from '../data/characters';
import Comics from '../data/comics';

interface ContextValues {

}

const Provider : React.FC = ({ children }) => {
  const [dataId, setDataId] = useState(1);
  const [mainPage, setMainPage] = useState("Personagens");
  const [data, setData] = useState<any>(Characters)
  const [itemId, setItemId] = useState<number | undefined>(undefined);


  const selectData = () => {
    switch (mainPage) {
      case 'Filmes':
        setData(Movies)
        break;
      case "Quadrinhos":
        setData(Comics)
        break;
      default:
        setData(Characters)
        break;
    }
  }

  useEffect(() => {
    selectData()
  }, [mainPage])

  const contextValue: any = {
    dataId,
    setDataId,
    mainPage,
    setMainPage,
    data,
    itemId,
    setItemId,
  };

  return (
    <MyContext.Provider value={ contextValue }>
      { children }
    </MyContext.Provider>
  );
}

export default Provider;