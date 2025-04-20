import {StyleSheet, Text, View} from 'react-native';
import {AppColors} from '../../utils/AppColors';

function NotificationIcon({number}: any): React.JSX.Element {
  return (
    <View style={styles.container}>
      <Text style={styles.number}>{number}</Text>
    </View>
  );
}
export default NotificationIcon;

const styles = StyleSheet.create({
  container: {
    width: 18,
    height: 18,
    borderRadius: 9,
    backgroundColor: AppColors.green,
  },
  number: {
    justifyContent: 'center',
    alignItems: 'center',
    textAlign: 'center',
    color: 'white',
    fontSize: 11,
    fontWeight: '400',
    fontFamily: 'Poppins-Regular',
  },
});
