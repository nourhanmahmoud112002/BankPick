import {Image, Pressable, StyleSheet, Text, View} from 'react-native';
import {AppColors, isDarkMode} from '../../utils/AppColors';
// import Icon from '../Icon';
import {Icons} from '../../utils/AppIcons';

function SettingsItem({
  title,
  subTitle,
  preIcon,
  suffICon,
  onPress,
}: any): React.JSX.Element {
  let suffiexIcon = <Image source={Icons.nextArrow} style={styles.image} />;
  if (suffICon) {
    suffiexIcon = suffICon;
  }
  return (
    <Pressable onPress={onPress}>
      <View style={styles.container}>
        <View style={styles.leftContainer}>
          {preIcon && <Image source={preIcon} style={styles.preIcon} />}
          <Text style={styles.title}>{title}</Text>
        </View>
        <View style={styles.innerContainer}>
          <Text style={styles.subTitle}>{subTitle}</Text>
          {suffiexIcon}
        </View>
      </View>
    </Pressable>
  );
}
export default SettingsItem;
const styles = StyleSheet.create({
  container: {
    marginTop: 22,
    flexDirection: 'row',
    borderBottomWidth: 1,
    borderBottomColor: AppColors.darkGray,
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingBottom: 10,
  },
  leftContainer:{
    flexDirection: 'row',
  },
  innerContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  preIcon: {
    width: 24,
    height: 24,
    marginRight: 16,
  },
  title: {
    fontSize: 14,
    fontWeight: '500',
    fontFamily: 'Poppins-Regular',
    color: isDarkMode ? 'white' : 'black',
  },
  subTitle: {
    fontSize: 14,
    fontWeight: '400',
    fontFamily: 'Poppins-Regular',
    color: AppColors.gray,
    paddingRight: 16,
  },
  image: {
    width: 7,
    height: 12,
  },
});
