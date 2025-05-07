import {View, Image, Text, StyleSheet} from 'react-native';
import {useTheme} from '../../hooks/darkModeContext';
import {AppColors} from '../../utils/AppColors';

function EmptyTransaction(): React.JSX.Element {
  const {isDarkMode} = useTheme();
  return (
    <View style={styles.emptyContainer}>
      <Image
        source={require('../../assets/images/transaction.png')}
        style={styles.emptyTransImage}
      />
      <Text
        style={[
          styles.emptyText,
          {color: isDarkMode ? 'white' : 'black'} as any,
        ]}>
        No Transactions Found
      </Text>
      <Text style={styles.subemptyText}>
        you haven't made any transactions yet.
      </Text>
    </View>
  );
}
export default EmptyTransaction;
const styles = StyleSheet.create({
  emptyTransImage: {
    width: '60%',
    height: 150,
    resizeMode: 'contain',
  },
  emptyContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 30,
  },
  emptyText: {
    fontSize: 16,
    fontWeight: '500',
    fontFamily: 'Poppins-Regular',
    marginTop: 20,
    marginBottom: 20,
  },
  subemptyText: {
    fontSize: 14,
    fontWeight: '400',
    fontFamily: 'Poppins-Regular',
    color: AppColors.gray,
    marginBottom: 30,
  },
});
