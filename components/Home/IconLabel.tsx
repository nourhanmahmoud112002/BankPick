import {StyleSheet, Text} from 'react-native';
import {AppColors} from '../../utils/AppColors';
import {useTheme} from '../../hooks/darkModeContext';

function IconLabel({text}: any): React.JSX.Element {
  const {isDarkMode} = useTheme();
  return (
    <Text
      style={[
        styles.text,
        {color: isDarkMode ? AppColors.lightGray : AppColors.darkerGray} as any,
      ]}>
      {text}
    </Text>
  );
}
export default IconLabel;
const styles = StyleSheet.create({
  text: {
    fontSize: 13,
    fontWeight: '400',
    fontFamily: 'Poppins-Regular',
    marginTop: 7,
  },
});
