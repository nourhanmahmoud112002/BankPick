import {StyleSheet, View} from 'react-native';
import {isDarkMode, AppColors} from '../../utils/AppColors';
import AppBar from '../../components/AppBar';
import {Icons} from '../../utils/AppIcons';
import GeneralSettings from '../../components/Settings/GeneralSettings';
import SecuritySettings from '../../components/Settings/SecuritySettings';

function SettingsScreen(): React.JSX.Element {
  return (
    <View style={styles.container}>
      <AppBar title="Settings" icon={Icons.logOut} />
      <GeneralSettings/>
      <SecuritySettings/>
    </View>
  );
}
export default SettingsScreen;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 25,
    paddingTop: 54,
    backgroundColor: isDarkMode ? AppColors.dark : 'white',
  },
});
