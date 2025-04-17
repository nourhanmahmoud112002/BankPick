import {StyleSheet, View} from 'react-native';
import {isDarkMode, AppColors} from '../../utils/AppColors';
import AppBar from '../../components/AppBar';
import {Icons} from '../../utils/AppIcons';

function MyCardsScreen(): React.JSX.Element {
  return (
    <View style={styles.container}>
      <AppBar title="My Cards" icon={Icons.add} />
    </View>
  );
}
export default MyCardsScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 25,
    paddingTop: 54,
    backgroundColor: isDarkMode ? AppColors.dark : 'white',
  },
});
