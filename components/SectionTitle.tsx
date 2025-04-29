import {StyleSheet, Text} from 'react-native';
import {useTheme} from '../hooks/darkModeContext';

function SectionTitle({title}: any): React.JSX.Element {
  const {isDarkMode} = useTheme();
  return (
    <Text style={[styles.text, {color: isDarkMode ? 'white' : 'black'} as any]}>
      {title}
    </Text>
  );
}
export default SectionTitle;
const styles = StyleSheet.create({
  text: {
    fontSize: 18,
    fontWeight: '500',
    fontFamily: 'Poppins-Regular',
  },
});
