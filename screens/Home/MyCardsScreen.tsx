import {ScrollView, StyleSheet, useWindowDimensions} from 'react-native';
import {AppColors} from '../../utils/AppColors';
import AppBar from '../../components/AppBar';

import CardsContent from '../../components/MyCards/CardsContent';
import {useTheme} from '../../hooks/darkModeContext';
import {useIcons} from '../../utils/AppIcons';

function MyCardsScreen({navigation}: any): React.JSX.Element {
  const {isDarkMode} = useTheme();
  const Icons = useIcons();
  const {width, height} = useWindowDimensions();
  return (
    <ScrollView
      style={[
        styles.container,
        {
          paddingHorizontal: width * 0.06,
          paddingTop: height * 0.065,
          backgroundColor: isDarkMode ? AppColors.dark : 'white',
        } as any,
      ]}>
      <AppBar
        title="My Cards"
        icon={Icons.add}
        imageWidth={15}
        onPress={() => navigation.navigate('AddNewCard')}
      />
      <CardsContent />
    </ScrollView>
  );
}
export default MyCardsScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
