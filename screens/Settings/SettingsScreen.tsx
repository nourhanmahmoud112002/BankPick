import {StyleSheet, View} from 'react-native';
import {AppColors} from '../../utils/AppColors';
import AppBar from '../../components/AppBar';
import {Icons} from '../../utils/AppIcons';
import GeneralSettings from '../../components/Settings/GeneralSettings';
import SecuritySettings from '../../components/Settings/SecuritySettings';
import {useTheme} from '../../hooks/darkModeContext';

function SettingsScreen(): React.JSX.Element {
  const {isDarkMode} = useTheme();
  return (
    <View
      style={[
        styles.container,
        {backgroundColor: isDarkMode ? AppColors.dark : 'white'} as any,
      ]}>
      <AppBar title="Settings" icon={Icons.logOut} />
      <GeneralSettings />
      <SecuritySettings />
    </View>
  );
}
export default SettingsScreen;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 25,
    paddingTop: 54,
  },
});
