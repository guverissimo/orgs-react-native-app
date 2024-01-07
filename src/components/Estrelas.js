import React, {useState} from 'react';
import {Image, StyleSheet, TouchableOpacity, View} from 'react-native';

import estrela from '../assets/estrela.png';
import estrelaCinza from '../assets/estrelaCinza.png';

export default function Estrelas({
  quantidade: quantidadeAntiga,
  editavel = false,
  grande = false,
}) {
  const [quantidade, setQuantidade] = useState(quantidadeAntiga);
  const style = styleFunction(grande);

  // Metodo para definir qual imagem da estrela usar
  const getImage = index => {
    if (index < quantidade) {
      return estrela;
    }
    return estrelaCinza;
  };

  const RenderEstrelas = () => {
    //Criando o array de estrelas
    const listaEstrelas = [];
    for (let i = 0; i < 5; i++) {
      listaEstrelas.push(
        <TouchableOpacity
          key={i}
          onPress={() => setQuantidade(i + 1)}
          disabled={!editavel}>
          <Image source={getImage(i)} style={style.estrela} />
        </TouchableOpacity>,
      );
    }

    return listaEstrelas;
  };
  return (
    <View style={style.estrelas}>
      {/* Renderizando o array de estrelas */}
      <RenderEstrelas />
    </View>
  );
}

const styleFunction = grande =>
  StyleSheet.create({
    estrelas: {
      flexDirection: 'row',
    },
    estrela: {
      width: grande ? 36 : 12,
      height: grande ? 36 : 12,
      marginRight: 2,
    },
  });
