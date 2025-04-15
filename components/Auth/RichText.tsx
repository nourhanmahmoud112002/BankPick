import {StyleSheet, Text, View} from 'react-native';
import {AppColors} from '../../utils/AppColors';

function RichText({partOne, partTwo, onPress}: any): React.JSX.Element {
  return (
    <View style={styles.container}>
      <Text style={styles.partOne}>
        {partOne}
        <Text style={styles.partTwo} onPress={onPress}>
          {partTwo}
        </Text>
      </Text>
    </View>
  );
}
export default RichText;
const styles = StyleSheet.create({
  container: {
    marginTop: 29,
    alignItems: 'center',
  },
  partOne: {
    color: AppColors.lightGray,
    fontSize: 14,
    fontWeight: '400',
    fontFamily: 'Poppins-Regular',
  },
  partTwo: {
    color: AppColors.primaryColor,
    fontSize: 14,
    fontWeight: '800',
    fontFamily: 'Poppins-Regular',
  },
});
