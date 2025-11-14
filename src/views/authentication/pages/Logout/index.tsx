// ** Styles Import
import styles from './index.module.scss';

// ** Another Import
import { useNavigate } from 'react-router-dom';
import { HomeRoutePaths } from '../../../home/utils/enum/home';

function Logout() {
  // ** Hook
  const navigate = useNavigate();

  // ** function
  const handleNavigateHome = () => {
    navigate('/' + HomeRoutePaths.HOME);
  };

  return (
    <div className={styles.logout}>
      <div className={styles.card}>
        <div className={styles.icon}>
          <span className='material-symbols-outlined'>logout</span>
        </div>
        <h1 className={styles.title}>You're Logged Out</h1>
        <p className={styles.message}>
          You've successfully logged out of your account.
        </p>
        <button onClick={handleNavigateHome} className={styles.button}>
          Return to Home
          <span className='material-symbols-outlined'>
            keyboard_double_arrow_right
          </span>
        </button>
      </div>
    </div>
  );
}

export default Logout;
