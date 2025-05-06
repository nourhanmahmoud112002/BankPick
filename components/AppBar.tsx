import {StyleSheet, Text, View} from 'react-native';
import BackIcon from './BackIcon';
import Icon from './Icon';
import {useTheme} from '../hooks/darkModeContext';
function AppBar({title, icon, onPress, imageWidth ,paddingHorizontal}: any): React.JSX.Element {
  const {isDarkMode} = useTheme();
  return (
    <View style={[styles.constainer,{paddingHorizontal:paddingHorizontal}]}>
      <BackIcon />
      <Text
        style={[styles.text, {color: isDarkMode ? 'white' : 'black'} as any]}>
        {title}
      </Text>
      {icon && (
        <Icon
          icon={icon}
          width={42}
          onPress={onPress}
          imageWidth={imageWidth}
        />
      )}
      {!icon && <View />}
    </View>
  );
}
export default AppBar;
const styles = StyleSheet.create({
  constainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  text: {
    fontSize: 20,
    fontWeight: '500',
    fontFamily: 'Poppins-Regular',
    textAlign: 'center',
  },
});
