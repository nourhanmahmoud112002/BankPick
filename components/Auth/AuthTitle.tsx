import {StyleSheet, Text} from 'react-native';
import {useTheme} from '../../hooks/darkModeContext';
function AuthTitle({children}: any): React.JSX.Element {
  const {isDarkMode} = useTheme();
  return (
    <Text style={[styles.text, {color: isDarkMode ? 'white' : 'black'} as any]}>
      {children}
    </Text>
  );
}
export default AuthTitle;
const styles = StyleSheet.create({
  text: {
    fontSize: 32,
    fontWeight: '500',
    fontFamily: 'Poppins-Regular',

    marginBottom: 38,
    marginTop: 53,
  },
});
