import {StyleSheet, useWindowDimensions, View} from 'react-native';
import {AppColors} from '../../utils/AppColors';
import AppBar from '../../components/AppBar';

import GeneralSettings from '../../components/Settings/GeneralSettings';
import SecuritySettings from '../../components/Settings/SecuritySettings';
import {useTheme} from '../../hooks/darkModeContext';
import {useIcons} from '../../utils/AppIcons';

function SettingsScreen(): React.JSX.Element {
  const {isDarkMode} = useTheme();
  const icons = useIcons();
  const {width, height} = useWindowDimensions();
  return (
    <View
      style={[
        styles.container,
        {
          paddingHorizontal: width * 0.06,
          paddingTop: height * 0.065,
          backgroundColor: isDarkMode ? AppColors.dark : 'white',
        } as any,
      ]}>
      <AppBar title="Settings" icon={icons.logOut} />
      <GeneralSettings />
      <SecuritySettings />
    </View>
  );
}
export default SettingsScreen;
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
