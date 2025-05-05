import React from 'react';
import {StyleSheet, View} from 'react-native';
import AppImageBackground from '../AppImageBackground';
import InputField from '../Auth/InputFiled';

function AddNewCardContent(): React.JSX.Element {
  return (
    <View>
      <AppImageBackground marginTop={32} />
      <View style={styles.contentContainer}>
        <InputField
          label="Cardholder Name"
          leftIcon="user"
          defaultValue="Tanya Myroniuk"
        />
        <View style={styles.innerContainer}>
          <View style={styles.inputWrapper}>
            <InputField label="Expiry Date" defaultValue="09/06/2024" />
          </View>
          <View style={styles.inputWrapper}>
            <InputField label="4-digit CVV" defaultValue="6986" />
          </View>
        </View>
        <InputField
          label="Card Number"
          leftIcon="creditCard"
          rightIcon="creditLogo"
          defaultValue="4562 1122 4595 7852"
        />
      </View>
    </View>
  );
}
export default AddNewCardContent;

const styles = StyleSheet.create({
  contentContainer: {
    width: '100%',
    paddingTop: 30,
  },
  innerContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    gap: 30,
  },
  inputWrapper: {
    width: '40%',
    marginHorizontal: 5,
  },
});
