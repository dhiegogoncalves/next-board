import { FaGithub } from 'react-icons/fa';
import { FiX } from 'react-icons/fi';

import styles from './styles.module.scss';

export function SignInButton() {
  const session = false;

  return session ? (
    <button type="button" className={styles.signInButton} onClick={() => {}}>
      <img src="https://sujeitoprogramador.com/steve.png" />
      Olá Dhiego
      <FiX color="#737380" className={styles.closeIcon} />
    </button>
  ) : (
    <button type="button" className={styles.signInButton} onClick={() => {}}>
      <FaGithub color="#FFB800" />
      Entrar com github
    </button>
  );
}
