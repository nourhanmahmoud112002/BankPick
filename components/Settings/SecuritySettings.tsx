import {StyleSheet, Text, View} from 'react-native';
import SettingsSubTitle from './SettingsSubTitle';
import SettingsItem from './SettingsItem';
import {AppColors} from '../../utils/AppColors';
import DarkTheme from './DarkTheme';
import { useNavigation } from '@react-navigation/native';

function SecuritySettings(): React.JSX.Element {
  const navigation = useNavigation();
  return (
    <View>
      <SettingsSubTitle title="Security" />
      <SettingsItem title="Change Password" />
      <SettingsItem title="Privacy Policy" onPress={() => navigation.navigate('TermsAndConditions' as never)} />
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
