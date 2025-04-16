import {StyleSheet, Text, View} from 'react-native';
import Icon from '../Icon';
import {AppColors, isDarkMode} from '../../utils/AppColors';

function HomeTransItem({item}: any): React.JSX.Element {
  console.log(item);

  return (
    <View style={styles.container}>
      <View style={styles.leftSection}>
        <Icon width={42} icon={item.iconName} />
        <View style={styles.textContainer}>
          <Text style={styles.titleText}>{item.title}</Text>
          <Text style={styles.categoryText}>{item.category}</Text>
        </View>
      </View>
      <Text style={styles.money}>{item.money}</Text>
    </View>
  );
}
export default HomeTransItem;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 22,
  },
  leftSection: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  textContainer: {
    marginLeft: 18,
  },
  titleText: {
    fontSize: 16,
    fontWeight: '500',
    fontFamily: 'Poppins-Regular',
    color: isDarkMode ? 'white' : 'black',
    marginBottom: 7,
  },
  categoryText: {
    fontSize: 12,
    fontWeight: '400',
    fontFamily: 'Poppins-Regular',
    lineHeight: 12,
    color: AppColors.semiTransparentWhite,
  },
  money: {
    fontSize: 16,
    fontWeight: '500',
    fontFamily: 'Poppins-Regular',
    color: isDarkMode ? 'white' : 'black',
  },
});
