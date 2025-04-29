import {StyleSheet, View} from 'react-native';
import {AppColors} from '../../utils/AppColors';
import AppBar from '../../components/AppBar';

import CardsContent from '../../components/MyCards/CardsContent';
import {useTheme} from '../../hooks/darkModeContext';
import {useIcons} from '../../utils/AppIcons';

function MyCardsScreen({navigation}: any): React.JSX.Element {
  const {isDarkMode} = useTheme();
  const Icons = useIcons();
  return (
    <View
      style={[
        styles.container,
        {backgroundColor: isDarkMode ? AppColors.dark : 'white'} as any,
      ]}>
      <AppBar
        title="My Cards"
        icon={Icons.add}
        imageWidth={15}
        onPress={() => navigation.navigate('AddNewCard')}
      />
      <CardsContent />
    </View>
  );
}
export default MyCardsScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 25,
    paddingTop: 54,
  },
});
