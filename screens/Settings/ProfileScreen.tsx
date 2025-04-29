import {StyleSheet, View} from 'react-native';
import {AppColors} from '../../utils/AppColors';
import AppBar from '../../components/AppBar';
import {Icons} from '../../utils/AppIcons';
import Profile from '../../components/Settings/Profile';
import SettingsItem from '../../components/Settings/SettingsItem';
import NotificationIcon from '../../components/Settings/NotificationIcon';
import {useTheme} from '../../hooks/darkModeContext';

function ProfileScreen({navigation}: any): React.JSX.Element {
  const {isDarkMode} = useTheme();
  return (
    <View
      style={[
        styles.container,
        {backgroundColor: isDarkMode ? AppColors.dark : 'white'} as any,
      ]}>
      <AppBar
        title="Profile"
        icon={Icons.editUser}
        onPress={() => navigation.navigate('EditProfile')}
      />
      <Profile title="Senior Designer" name="Tanya Myroniuk" />
      <SettingsItem title="Personal Information" preIcon={Icons.user} />
      <SettingsItem title="Payment Preferences" preIcon={Icons.payment} />
      <SettingsItem
        title="Banks and Cards"
        preIcon={Icons.paymentEdit}
        onPress={() => navigation.navigate('AllCards')}
      />
      <SettingsItem
        title="Notifications"
        preIcon={Icons.grayNotification}
        suffICon={<NotificationIcon number={2} />}
      />
      <SettingsItem title="Message Center" preIcon={Icons.chat} />
      <SettingsItem title="Address " preIcon={Icons.address} />
      <SettingsItem
        title="Settings"
        preIcon={Icons.settings}
        onPress={() => navigation.goBack()}
      />
    </View>
  );
}
export default ProfileScreen;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 25,
    paddingTop: 54,
  },
});
