import React from 'react';
import {Image, StyleSheet, Text, View} from 'react-native';

import {carregaTopo} from '../../../servicos/carregaDados';
import logo from '../../../assets/logo.png';

class Topo extends React.Component {
  state = {
    topo: {
      boasVindas: '',
      legenda: '',
    },
  };

  atualizaTopo() {
    const retorno = carregaTopo();
    this.setState({ topo: retorno});
  }

  componentDidMount() {
    this.atualizaTopo();
  }

  render() {
    return (
      <View style={style.topo}>
        <Image source={logo} style={style.imagem} />
        <Text style={style.boasvindas}>{this.state.topo.boasVindas}</Text>
        <Text style={style.legenda}>{this.state.topo.legenda}</Text>
      </View>
    );
  }
}

const style = StyleSheet.create({
  topo: {
    backgroundColor: '#F6F6F6',
    padding: 16,
  },
  imagem: {
    width: 70,
    height: 28,
  },
  boasvindas: {
    marginTop: 24,
    fontSize: 26,
    lineHeight: 42,
    color: 'black',
    fontWeight: 'bold',
  },
  legenda: {
    fontSize: 16,
    lineHeight: 26,
  },
});

export default Topo;
