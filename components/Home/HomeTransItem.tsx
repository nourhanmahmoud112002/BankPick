import {StyleSheet, Text, View} from 'react-native';
import Icon from '../Icon';
import {AppColors} from '../../utils/AppColors';
import {useTheme} from '../../hooks/darkModeContext';

function HomeTransItem({item}: any): React.JSX.Element {
  const {isDarkMode} = useTheme();

  return (
    <View style={styles.container}>
      <View style={styles.leftSection}>
        <Icon width={42} icon={item.iconName} />
        <View style={styles.textContainer}>
          <Text
            style={[
              styles.titleText,
              {color: isDarkMode ? 'white' : 'black'} as any,
            ]}>
            {item.title}
          </Text>
          <Text style={styles.categoryText}>{item.category}</Text>
        </View>
      </View>
      <Text
        style={[styles.money, {color: isDarkMode ? 'white' : 'black'} as any]}>
        {item.money}
      </Text>
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
  },
});
