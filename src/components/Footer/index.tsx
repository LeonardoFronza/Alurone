import styles from './Footer.module.scss';
import { ReactComponent as Logo } from 'assets/logo.svg';
import { useParams } from 'react-router-dom';
export default function Footer() {
  return (
    <footer className={styles.footer}>
      <Logo/>
    </footer>
  );
}