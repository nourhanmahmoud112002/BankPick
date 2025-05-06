import React from 'react';
import {StyleSheet, useWindowDimensions, View} from 'react-native';
import AppImageBackground from '../AppImageBackground';
import InputField from '../Auth/InputFiled';
import AppOverlayBackImage from '../AppOverlayBackImage';

function AddNewCardContent(): React.JSX.Element {
  const {width} = useWindowDimensions();
  return (
    <View>
      <AppImageBackground marginTop={32} />
      <AppOverlayBackImage marginTop={30}/>
      <View
        style={[styles.contentContainer, {paddingHorizontal: width * 0.06}]}>
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
