import produtores from '../mocks/produtores';
import topo from '../mocks/topo';

export const carregaProdutores = (ordenarPor = 'nome') => {
  if (ordenarPor === 'nome') {
    produtores.lista.sort((atual, proximo) => {
      if (atual.nome > proximo.nome) {
        return 1;
      } else if (atual.nome < proximo.nome) {
        return -1;
      }
      return 0;
    });
  } else if (ordenarPor === 'distancia') {
    produtores.lista.sort(
      (atual, proximo) => atual.distancia - proximo.distancia,
    );
  } else if (ordenarPor === 'estrelas') {
    produtores.lista.sort(
      (atual, proximo) => atual.estrelas - proximo.estrelas,
    );
  }
  return produtores;
};

export const carregaTopo = () => {
  return topo;
};
