// ** Styles Import
import LoginForm from '../LoginForm';
import styles from './index.module.scss';

// ** Another Import

function Authentication() {
  return (
    <div className={styles.loginContainer}>
      <LoginForm />
    </div>
  );
}

export default Authentication;
