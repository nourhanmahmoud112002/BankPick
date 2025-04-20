import {StyleSheet, Text, View} from 'react-native';
import SettingsSubTitle from './SettingsSubTitle';
import SettingsItem from './SettingsItem';
import {AppColors} from '../../utils/AppColors';
import DarkTheme from './DarkTheme';

function SecuritySettings(): React.JSX.Element {
  return (
    <View>
      <SettingsSubTitle title="Security" />
      <SettingsItem title="Change Password" />
      <SettingsItem title="Privacy Policy" />
      <Text style={styles.text}>Choose what data you share with us</Text>
      <DarkTheme/>
    </View>
  );
}
export default SecuritySettings;
const styles = StyleSheet.create({
  text: {
    marginTop: 15,
    marginBottom:29,
    fontSize: 14,
    fontWeight: '400',
    fontFamily: 'Poppins-Regular',
    color: AppColors.gray,
  },
});
