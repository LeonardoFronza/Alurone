import classNames from 'classnames';
import { Prato } from 'types/Pratos';
import styles from './TagsPratos.module.scss';


export default function TagsPratos({
  category,
  size,
  serving,
  price
}: Prato) {
  return (
    <div className={styles.tags}>
      <div className={classNames({
        [styles.tags__tipo] : true,
        [styles[`tags__tipo__${category.label.toLocaleLowerCase()}`]] : true
      })}>{category.label}</div>

      <div className={styles.tags__porcao}>{size}g</div>

      <div className={styles.tags__qtdpessoas}>Serve {serving} pessoas.</div>

      <div className={styles.tags__valor}>R${price.toFixed(2)}</div>
    </div>
  );
}