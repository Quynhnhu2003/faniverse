// ** Styles Import
import LoginForm from '../LoginForm';
import styles from './index.module.scss';

// ** Another Import

function Authentication() {
  return (
    <div className={styles.authenContainer}>
      <div className={styles['authenContainer--login']}>
        <LoginForm />
      </div>
    </div>
  );
}

export default Authentication;
