import {StyleSheet, Text, TextInput, View} from 'react-native';
import {AppColors, isDarkMode} from '../../utils/AppColors';

function BirthPicker({title}:any): React.JSX.Element {
  return (
    <View style={styles.container}>
      <Text style={styles.textLabel}>{title}</Text>
      <View style={styles.innerContainer}>
        <View style={styles.inputContainer}>
          <TextInput style={styles.textInput} />
        </View>
        <View style={styles.inputContainer}>
          <TextInput style={styles.textInput} />
        </View>
        <View style={styles.inputContainer}>
          <TextInput style={styles.textInput} />
        </View>
      </View>
    </View>
  );
}
export default BirthPicker;
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
    marginBottom: 10,
  },
  inputContainer: {
    flexDirection: 'row',
    borderBottomWidth: 1.5,
    borderBottomColor: AppColors.darkGray,
    alignItems: 'center',
    maxHeight: 25,
    marginLeft: 28,
  },
  textInput: {
    flex: 1,
    color: isDarkMode ? 'white' : 'black',
    fontSize: 16,
    fontWeight: '400',
    fontFamily: 'Poppins-Regular',
  },
});
