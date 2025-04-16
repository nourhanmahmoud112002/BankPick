import {isDarkMode} from './AppColors';

export const Icons: Record<string, any> = {
  email: require('../assets/images/EmailIcon.png'),
  password: require('../assets/images/LockPasswordIcon.png'),
  eye: require('../assets/images/EyeShowUpIcon.png'),
  phone: require('../assets/images/PhoneCallIcon.png'),
  search: isDarkMode
    ? require('../assets/images/SearchIconLight.png')
    : require('../assets/images//SearchIconDark.png'),
  arrowUp: isDarkMode
    ? require('../assets/images/ArrowUpLight.png')
    : require('../assets/images/ArrowUpDark.png'),
  arrowDown: isDarkMode
    ? require('../assets/images/ArrowDownLight.png')
    : require('../assets/images/ArrowDownDark.png'),
  loan: isDarkMode
    ? require('../assets/images/LoanLight.png')
    : require('../assets/images/LoanDark.png'),
  topUp: isDarkMode
    ? require('../assets/images/TopUpLight.png')
    : require('../assets/images/TopUpDark.png'),
  apple: isDarkMode
    ? require('../assets/images/appleIcon.png')
    : require('../assets/images/appleDark.png'),
  download: isDarkMode
    ? require('../assets/images/download.png')
    : require('../assets/images/downloandark.png'),
  spotify: require('../assets/images/spotify.png'),
  grocery: require('../assets/images/grocery.png'),
};
