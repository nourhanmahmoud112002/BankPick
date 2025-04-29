import {StyleSheet, Text, TextInput, View} from 'react-native';
import {AppColors} from '../../utils/AppColors';
import {useTheme} from '../../hooks/darkModeContext';

function SendMoneySection(): React.JSX.Element {
  const {isDarkMode} = useTheme();
  return (
    <View
      style={[
        styles.container,
        {backgroundColor: isDarkMode ? AppColors.darkerGray : 'white'} as any,
      ]}>
      <Text style={styles.label}>Enter Your Amount</Text>
      <View style={styles.moneyContianer}>
        <Text style={styles.money}>USD</Text>
        <TextInput
          placeholder="36.00"
          style={[
            styles.moneyInput,
            {color: isDarkMode ? 'white' : 'black'} as any,
          ]}
          placeholderTextColor={isDarkMode ? 'white' : 'black'}
        />
      </View>
    </View>
  );
}
export default SendMoneySection;
const styles = StyleSheet.create({
  container: {
    height: 120,
    width: '100%',
    borderRadius: 14,
    borderWidth:1,
    borderColor:'#E7EAEE',
    paddingLeft: 16,
    marginBottom: 31,
    alignItems: 'flex-start',
  },
  label: {
    marginTop: 29,
    fontSize: 14,
    fontWeight: '400',
    fontFamily: 'Poppins-Regular',
    textAlign: 'center',
    color: AppColors.softBlue,
  },
  moneyContianer: {
    flexDirection: 'row',
    marginTop: 10,
    alignItems: 'center',
  },
  money: {
    color: AppColors.softBlue,
    fontSize: 24,
    fontWeight: '600',
    fontFamily: 'Poppins-Regular',
  },
  moneyInput: {
    marginLeft: 16,
    fontSize: 24,
    fontWeight: '600',
    fontFamily: 'Poppins-Regular',
  },
});
