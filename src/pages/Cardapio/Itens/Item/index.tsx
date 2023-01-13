import styles from './Item.module.scss';
import { Prato } from 'types/Pratos';
import TagsPratos from 'components/TagsPratos';
import { useNavigate } from 'react-router-dom';
import { memo } from 'react';

type Iprops = Prato;

function Item(props : Iprops) {
  const {id,title, description, photo} = props;
  const navegate = useNavigate();
  return (
    <div className={styles.item} onClick={() =>navegate(`/prato/${id}`)}>
      <div className={styles.item__imagem}>
        <img src={photo} alt={title} />
      </div>

      <div className={styles.item__descricao}>
        <div className={styles.item__titulo}>
          <h2>{title}</h2>
          <p>{description}</p>
        </div>

        <TagsPratos {...props}/>
      </div>
    </div>
  );
}
//Desta forma o react só renderiza os item de uma vez, fazendo que com que tenha mais perfomace
export default memo(Item);