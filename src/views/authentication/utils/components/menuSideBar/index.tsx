// ** React Import
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';

// ** Styles Import
import styles from './index.module.scss';

// ** Another Import
import { Dialog } from '@mui/material';
import ListArtists from './components/ListArtists';
import { handleShowMenubar } from '../../../store/headerStore';
import { useAppSelector } from '../../../../../hooks/useReduxHook';
import { Transition } from '../../../../../utils/components/Transition';
import { listItemMenu } from '../../../../../data/home/listMenuSideBar';

function MenuSidebar() {
  // ** State
  const [showList, setShowList] = useState<boolean>(false);

  // ** Hook
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const showMenubar = useAppSelector((store) => store.home.header);

  // ** Function
  const closeSideBar = () => {
    dispatch(handleShowMenubar(false));
  };

  const handleShowList = () => {
    console.log('handleShowList');
    setShowList(!showList);
  };

  const navigateMenuSidebar = (url: string) => {
    console.log('navigateMenuSidebar :>> ', url);
    navigate(url);
  };

  return (
    <Dialog
      onClose={closeSideBar}
      open={showMenubar.showMenubar}
      TransitionComponent={Transition}
      className={styles.menuSideBar}
      PaperProps={{
        style: {
          margin: 0,
          width: '100%',
          maxHeight: '70%',
          height: 'auto',
          overflow: 'hidden',
          backgroundColor: '#FAF4EB',
        },
      }}
    >
      <button className={styles.menuSideBar__close} onClick={closeSideBar}>
        <span className='material-symbols-outlined'>close</span>
      </button>
      <div className={styles.menuSideBar__list}>
        {listItemMenu.map((item) => (
          <button
            key={item.name}
            className={styles.item}
            onClick={() => {
              if (item.menuExtra) {
                handleShowList();
              } else {
                navigateMenuSidebar(item.url);
              }
            }}
          >
            <div className={styles.item__label}>
              {item.name}
              {item.menuExtra && (showList ? item.icon : item.iconActive)}
            </div>

            {item.menuExtra && <ListArtists showList={showList} />}
          </button>
        ))}
      </div>
    </Dialog>
  );
}

export default MenuSidebar;
