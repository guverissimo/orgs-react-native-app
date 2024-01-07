import React, {useState} from 'react';
import {StyleSheet, View} from 'react-native';
import Estrela from './Estrela';

export default function Estrelas({
  quantidade: quantidadeAntiga,
  editavel = false,
  grande = false,
}) {
  const [quantidade, setQuantidade] = useState(quantidadeAntiga);

  // Metodo para definir qual imagem da estrela usar

  const RenderEstrelas = () => {
    //Criando o array de estrelas
    const listaEstrelas = [];
    for (let i = 0; i < 5; i++) {
      listaEstrelas.push(
        <Estrela
          key={i}
          onPress={() => setQuantidade(i + 1)}
          desabilitada={!editavel}
          preenchida={i < quantidade}
          grande={grande}
        />,
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

const style = StyleSheet.create({
  estrelas: {
    flexDirection: 'row',
  },
});
