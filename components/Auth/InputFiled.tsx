import {Image, StyleSheet, Text, TextInput, View} from 'react-native';
import {AppColors} from '../../utils/AppColors';
import {useTheme} from '../../hooks/darkModeContext';
import {useIcons} from '../../utils/AppIcons';

function InputField({
  label,
  rightIcon,
  leftIcon,
  defaultValue,
}: any): React.JSX.Element {
  const {isDarkMode} = useTheme();
  const icons = useIcons();
  return (
    <View style={styles.container}>
      <Text style={styles.textLabel}>{label}</Text>
      <View style={styles.inputContainer}>
        <Image
          source={icons[leftIcon as keyof typeof icons]}
          style={[styles.iconLeft, styles.icon]}
        />
        <TextInput
          style={[
            styles.textInput,
            {color: isDarkMode ? 'white' : 'black'} as any,
          ]}
          value={defaultValue}
        />
        {rightIcon && (
          <Image
            source={icons[rightIcon as keyof typeof icons]}
            style={[styles.iconRight, styles.icon]}
          />
        )}
      </View>
    </View>
  );
}
export default InputField;
const styles = StyleSheet.create({
  container: {
    marginBottom: 21,
  },
  textLabel: {
    fontSize: 16,
    fontWeight: '400',
    fontFamily: 'Poppins-Regular',
    color: AppColors.lightGray,
    marginBottom: 15,
  },
  inputContainer: {
    flexDirection: 'row',
    borderBottomWidth: 1.5,
    borderBottomColor: AppColors.darkGray,
    alignItems: 'center',
    maxHeight: 40,
  },
  textInput: {
    flex: 1,

    fontSize: 16,
    fontWeight: '400',
    fontFamily: 'Poppins-Regular',
  },
  icon: {
    width: 24,
    height: 24,
    resizeMode: 'contain',
    marginBottom: 2,
  },
  iconLeft: {
    marginLeft: 3,
    marginRight: 16,
  },
  iconRight: {
    marginRight: 3,
  },
});
