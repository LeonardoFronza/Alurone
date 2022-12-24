import styles from './Botao.module.scss';

interface Iprops {
    descritivo: string
}

export default function Botao({descritivo} : Iprops) {
  return (
    <button className={styles.botao}>
      {descritivo}
    </button>
  );
}