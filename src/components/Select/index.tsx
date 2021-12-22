import React, { useState } from "react";
import { Picker } from '@react-native-picker/picker';
import { Container } from './styles';

const Select : React.FC = () => {
  const [selectedValue, setSelectedValue] = useState("crescente");

  return (
    <Container>
      <Picker
        selectedValue={selectedValue}
        dropdownIconColor="#f80000"
        style={{ 
          height: 33, 
          width: 167,
          color:'#FF0000',
          fontWeight: "bold",
          fontSize: 12,
          borderRadius: 10,
        }}
        onValueChange={(itemValue) => setSelectedValue(itemValue)}
      >
        <Picker.Item label="Lançamento" value="crescente" />
        <Picker.Item label="Cronologia" value="decrescente" />
      </Picker>
    </Container>
  );
}

export default Select;
