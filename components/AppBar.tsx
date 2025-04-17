import {StyleSheet, Text, View} from 'react-native';
import BackIcon from './BackIcon';
import {isDarkMode} from '../utils/AppColors';
import Icon from './Icon';
function AppBar({title,icon}:any): React.JSX.Element {
  return (
    <View style={styles.constainer}>
      <BackIcon />
      <Text style={styles.text}>{title}</Text>
      <Icon icon={icon} width={42} />
    </View>
  );
}
export default AppBar;
const styles = StyleSheet.create({
  constainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  text: {
    fontSize: 20,
    fontWeight: '500',
    fontFamily: 'Poppins-Regular',
    color: isDarkMode ? 'white' : 'black',
    textAlign: 'center',
    // marginHorizontal: 20,
  },
});
