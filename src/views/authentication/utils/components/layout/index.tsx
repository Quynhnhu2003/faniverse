// ** React Import
import { Outlet } from 'react-router-dom';

// ** Styles Import
import styles from './index.module.scss';

export default function LayoutAuthen() {
  return (
    <div className={styles.layoutContainer}>
      <Outlet />
    </div>
  );
}
