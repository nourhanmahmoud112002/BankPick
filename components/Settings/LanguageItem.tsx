import {Image, Pressable, StyleSheet, Text, View} from 'react-native';
import {AppColors} from '../../utils/AppColors';
import CircularImage from '../CircularImage';
import {Icons} from '../../utils/AppIcons';
import { useTheme } from '../../hooks/darkModeContext';

function LanguageItem({item, checked, onPress}: any): React.JSX.Element {
  const {isDarkMode} = useTheme();
  return (
    <Pressable onPress={onPress}>
      <View style={styles.container}>
        <CircularImage image={item.Icon} width={48} />
        <Text
          style={[styles.name, {color: isDarkMode ? 'white' : 'black'} as any]}>
          {item.name}
        </Text>
        {checked && (
          <Image source={Icons.checked} style={styles.checkedImage} />
        )}
      </View>
    </Pressable>
  );
}

export default LanguageItem;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    borderBottomWidth: 1,
    borderBottomColor: AppColors.darkGray,
    alignItems: 'center',
    height: 70,
    marginBottom: 12,
    paddingHorizontal: 16,
  },
  name: {
    fontSize: 16,
    fontWeight: '500',
    fontFamily: 'Poppins-Regular',
    marginLeft: 16,
    flex: 1,
  },
  checkedImage: {
    width: 18,
    height: 18,
  },
});
