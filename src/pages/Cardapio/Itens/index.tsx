import { useState, useEffect } from 'react';
import Item from './Item';
import cardapio from 'data/cardapio.json';
import styles from './Itens.module.scss';
import { Cardapio } from 'types/Pratos';

interface Iprops {
  busca: string;
  filtro: number | null;
  ordenador: string;
}

export default function Itens({ busca, filtro, ordenador }: Iprops) {
  const [lista, setLista] = useState(cardapio);

  useEffect(() => {
    function testaBusca(title: string) {
      const regex = new RegExp(busca, 'i'); //case insecitive, pode escrever com maisculo ou n, vai dar certo
      return regex.test(title);
    }

    function testaFiltro(id: number) {
      if (filtro !== null) return filtro === id;
      return true;
    }

    function ordena(novaLista: Cardapio) {
      switch (ordenador) {
      case 'porcao':
        return novaLista.sort((a, b) => (a.size > b.size ? 1 : -1));
      case 'qtd_pessoas':
        return novaLista.sort((a, b) => (a.serving > b.serving ? 1 : -1));
      case 'preco':
        return novaLista.sort((a, b) => (a.price > b.price ? 1 : -1));
      default:
        return novaLista;
      }
    }

    const novaLista = cardapio.filter(
      (item) => testaBusca(item.title) && testaFiltro(item.category.id)
    );
    setLista(ordena(novaLista));
  }, [busca, filtro, ordenador]);

  return (
    <div className={styles.itens}>
      {lista.map((itens) => (
        <Item key={itens.id} {...itens} />
      ))}
    </div>
  );
}
