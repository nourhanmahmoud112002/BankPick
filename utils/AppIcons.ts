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
  add: isDarkMode
    ? require('../assets/images/addLight.png')
    : require('../assets/images/addDark.png'),
  notification: isDarkMode
    ? require('../assets/images/NotificationLight.png')
    : require('../assets/images/NotificationDark.png'),
  logOut: isDarkMode
    ? require('../assets/images/LogoutLight.png')
    : require('../assets/images/LogoutDark.png'),
  editUser: isDarkMode
    ? require('../assets/images/EditUserLight.png')
    : require('../assets/images/EditUserDark.png'),
  nextArrow: require('../assets/images/nextArrow.png'),
  backIcon:isDarkMode
  ? require('../assets/images/BackIconDark.png')
  : require('../assets/images/BackIconLight.png'),
  user:require('../assets/images/user.png'),
  payment:require('../assets/images/payment.png'),
  paymentEdit:require('../assets/images/paymentEdit.png'),
 chat:require('../assets/images/chat.png'),
 address:require('../assets/images/address.png'),
 settings:require('../assets/images/settings.png'),
 grayNotification:require('../assets/images/grayNotification.png'),
 creditCard:require('../assets/images/creditCard.png'),
 creditLogo:require('../assets/images/creditLogo.png'),
 allCards:require('../assets/images/allCardss.png'),
 exit:isDarkMode
 ? require('../assets/images/exitLight.png')
 : require('../assets/images/exitDark.png'),
 grayExit:require('../assets/images/grayExit.png'),
 graySearch:require('../assets/images/graySearch.png'),
 English:require('../assets/images/flags/English.png'),
 Australia:require('../assets/images/flags/Australia.png'),
 Spanish:require('../assets/images/flags/Spanish.png'),
 America:require('../assets/images/flags/America.png'),
 Vietnam:require('../assets/images/flags/Vietnam.png'),
 Franch:require('../assets/images/flags/Franch.png'),
 checked:require('../assets/images/Checked.png'),
 refresh: isDarkMode
 ? require('../assets/images/refreshLight.png')
 : require('../assets/images/refreshDark.png'),
 alexa:require('../assets/images/users/Alexa.png'),
 krishna:require('../assets/images/users/krishna.png'),
 yakub:require('../assets/images/users/Yakub.png'),
 ymilate:require('../assets/images/users/Ymilate.png'),
 bluePlus:require('../assets/images/blueplus.png'),
};
