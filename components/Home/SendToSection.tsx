import {Image, StyleSheet, Text, View} from 'react-native';
import {AppColors} from '../../utils/AppColors';
import CircularImage from '../CircularImage';
import {Icons} from '../../utils/AppIcons';
import SectionTitle from '../SectionTitle';
import {useTheme} from '../../hooks/darkModeContext';

function SendToSection(): React.JSX.Element {
  const {isDarkMode} = useTheme();
  return (
    <View
      style={[
        styles.container,
        {backgroundColor: isDarkMode ? AppColors.darkerGray : 'white'} as any,
      ]}>
      <View style={styles.sectionTitle}>
        <SectionTitle title="Send To" />
      </View>
      <View style={styles.innerContainer}>
        <View style={styles.imageAndText}>
          <View style={styles.add}>
            <Image source={Icons.bluePlus} style={styles.addImage} />
          </View>
          <Text
            style={[
              styles.text,
              {color: isDarkMode ? 'white' : 'black'} as any,
            ]}>
            Add
          </Text>
        </View>
        <View style={styles.imageAndText}>
          <CircularImage image={Icons.ymilate} width={48} />
          <Text
            style={[
              styles.text,
              {color: isDarkMode ? 'white' : 'black'} as any,
            ]}>
            Yamilet
          </Text>
        </View>
        <View style={styles.imageAndText}>
          <CircularImage image={Icons.alexa} width={48} />
          <Text
            style={[
              styles.text,
              {color: isDarkMode ? 'white' : 'black'} as any,
            ]}>
            Alexa
          </Text>
        </View>
        <View style={styles.imageAndText}>
          <CircularImage image={Icons.yakub} width={48} />
          <Text
            style={[
              styles.text,
              {color: isDarkMode ? 'white' : 'black'} as any,
            ]}>
            Yakub
          </Text>
        </View>

        <View style={styles.imageAndText}>
          <CircularImage image={Icons.krishna} width={48} />
          <Text
            style={[
              styles.text,
              {color: isDarkMode ? 'white' : 'black'} as any,
            ]}>
            Krishna
          </Text>
        </View>
      </View>
    </View>
  );
}
export default SendToSection;

const styles = StyleSheet.create({
  container: {
    marginTop: 400,
    height: 140,
    justifyContent: 'center',
    borderRadius: 20,
    borderWidth:1,
    borderColor:'#E7EAEE',
    paddingLeft: 12,
    marginBottom: 31,
  },
  sectionTitle: {
    marginBottom: 15,
  },
  innerContainer: {
    flexDirection: 'row',
  },
  add: {
    width: 48,
    height: 48,
    borderRadius: 32,
    borderColor: AppColors.primaryColor,
    borderWidth: 2,
    alignItems: 'center',
    justifyContent: 'center',
  },
  addImage: {
    width: 18,
    height: 18,
  },
  imageAndText: {
    marginRight: 18,
  },
  text: {
    fontSize: 12,
    fontWeight: '400',
    fontFamily: 'Poppins-Regular',
    textAlign: 'center',
    marginTop: 7,
  },
});
