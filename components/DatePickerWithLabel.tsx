import {StyleSheet, Text, View} from 'react-native';
import {AppColors} from '../utils/AppColors';
import CustomDatePicker from './CustomDatePicker';

function DatePickerWithLabel({title}:any): React.JSX.Element {
  return (
    <View style={styles.container}>
      <Text style={styles.textLabel}>{title}</Text>
      <CustomDatePicker/>
    </View>
  );
}
export default DatePickerWithLabel;
const styles = StyleSheet.create({
  container: {
    width: 90,
  },
  innerContainer: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    alignItems: 'center',
    flex: 1,
  },
  textLabel: {
    fontSize: 16,
    fontWeight: '400',
    fontFamily: 'Poppins-Regular',
    color: AppColors.lightGray,
  },

});
