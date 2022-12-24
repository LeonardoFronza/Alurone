import filtros from './filtros.json';
import styles from './Filtros.module.scss';
import classNames from 'classnames';

type IOpcao = typeof filtros[0];

interface Iprops {
  filtro: number | null;
  setFiltros: React.Dispatch<React.SetStateAction<number | null>>;
}

export default function Filtros({ filtro, setFiltros }: Iprops) {
  function selecionarFiltros(opcao: IOpcao) {
    if (opcao.id === filtro) return setFiltros(null);
    return setFiltros(opcao.id);
  }

  return (
    <div className={styles.filtros}>
      {filtros.map((opcao) => (
        <button
          key={opcao.id}
          onClick={() => selecionarFiltros(opcao)}
          /*ClassNames= if em formato de metado para simplicar isso :
          `${styles.filtros__filtro} ${filtro === opcao.id ? styles["filtros__filtro--ativo"] : ""}`  */
          className={classNames({
            [styles.filtros__filtro] : true,
            [styles['filtros__filtro--ativo']] : opcao.id === filtro
          })}
        >
          {opcao.label}
        </button>
      ))}
    </div>
  );
}
