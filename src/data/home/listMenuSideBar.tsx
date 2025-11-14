import { AuthenRoutePaths } from '../../views/authentication/utils/enum/home';

export const listItemMenu = [
  {
    id: 1,
    name: 'shop all',
    menuExtra: false,
    url: '#shop-all',
  },
  {
    id: 2,
    name: 'sale',
    menuExtra: false,
    url: '#sale',
  },
  {
    id: 3,
    name: 'Nghệ sĩ',
    icon: <span className='material-symbols-outlined'>keyboard_arrow_up</span>,
    iconActive: (
      <span className='material-symbols-outlined'>keyboard_arrow_down</span>
    ),
    menuExtra: true,
    url: '#',
  },
  {
    id: 4,
    name: 'Trạng thái pre-order',
    menuExtra: false,
    url: '#pre-order',
  },

  {
    id: 5,
    name: 'Đăng nhập',
    menuExtra: false,
    url: '/' + AuthenRoutePaths.SIGN_IN,
  },
];
