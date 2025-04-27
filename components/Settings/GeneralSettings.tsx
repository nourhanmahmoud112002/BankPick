import {StyleSheet, View} from 'react-native';
import SettingsSubTitle from './SettingsSubTitle';
import SettingsItem from './SettingsItem';
import { useNavigation } from '@react-navigation/native';

function GeneralSettings(): React.JSX.Element {
  const navigation = useNavigation();
  return (
    <View>
      <SettingsSubTitle title="General" />
      <View style={styles.container}>
        <SettingsItem title="Language" subTitle="English" onPress={() => navigation.navigate('Language' as never)}/>
        <SettingsItem title="My Profile" onPress={() => navigation.navigate('Profile' as never)} />
        <SettingsItem title="Contact Us" />
      </View>
    </View>
  );
}
export default GeneralSettings;
const styles = StyleSheet.create({
  container: {
    marginTop: 9,
  },
});
