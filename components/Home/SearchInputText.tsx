import {Image, StyleSheet, TextInput, View} from 'react-native';
import {AppColors, isDarkMode} from '../../utils/AppColors';
import {Icons} from '../../utils/AppIcons';

function SearchInputText({text,rightIcon}:any): React.JSX.Element {
  return (
    <View style={styles.container}>
      <Image source={Icons.graySearch} style={[styles.icon, styles.iconLeft]} />
      <TextInput
        style={styles.textInput}
        placeholder={text}
        placeholderTextColor={AppColors.gray}
      />
       {rightIcon && <Image source={Icons.grayExit} style={[styles.icon, styles.iconRight]}/>}
    </View>
  );
}

export default SearchInputText;
const styles = StyleSheet.create({
  container: {
    marginTop: 32,
    marginBottom:30,
    flexDirection: 'row',
    borderWidth: 1.5,
    borderColor: AppColors.darkGray,
    borderRadius: 12,
    alignItems: 'center',
  },
  textInput: {
    flex: 1,
    color: isDarkMode ? 'white' : 'black',
    fontSize: 16,
    fontWeight: '400',
    fontFamily: 'Poppins-Regular',
  },
  icon: {
    width: 24,
    height: 24,
    resizeMode: 'contain',
    marginBottom: 2,
  },
  iconLeft: {
    marginLeft: 18,
    marginRight: 16,
  },
  iconRight: {
    width: 12,
    height: 12,
    marginRight: 16,
  },
});
