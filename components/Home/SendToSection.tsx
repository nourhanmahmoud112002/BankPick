import {Image, StyleSheet, Text, View} from 'react-native';
import {AppColors, isDarkMode} from '../../utils/AppColors';
import CircularImage from '../CircularImage';
import {Icons} from '../../utils/AppIcons';
import SectionTitle from '../SectionTitle';

function SendToSection(): React.JSX.Element {
  return (
    <View style={styles.container}>
      <View style={styles.sectionTitle}><SectionTitle title="Send To"/>  </View>
      <View style={styles.innerContainer}>
        <View style={styles.imageAndText}>
          <View style={styles.add}>
            <Image source={Icons.bluePlus} style={styles.addImage}/>
          </View>
          <Text style={styles.text}>Add</Text>
        </View>
        <View style={styles.imageAndText}>
          <CircularImage image={Icons.ymilate} width={48} />
          <Text style={styles.text}>Yamilet</Text>
        </View>
        <View style={styles.imageAndText}>
          <CircularImage image={Icons.alexa} width={48} />
          <Text style={styles.text}>Alexa</Text>
        </View>
        <View style={styles.imageAndText}>
          <CircularImage image={Icons.yakub} width={48} />
          <Text style={styles.text}>Yakub</Text>
        </View>

        <View style={styles.imageAndText}>
          <CircularImage image={Icons.krishna} width={48} />
          <Text style={styles.text}>Krishna</Text>
        </View>
      </View>
    </View>
  );
}
export default SendToSection;

const styles = StyleSheet.create({
  container: {
    backgroundColor: AppColors.darkerGray,
    marginTop: 400,
    height: 140,
    justifyContent: 'center',
    borderRadius: 14,
    paddingLeft:12,
    marginBottom:31,
  },
  sectionTitle:{
    marginBottom:15,
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
    alignItems:'center',
    justifyContent:'center',
  },
  addImage:{
    width:18,
    height:18,
  },
  imageAndText: {
    marginRight: 18,
  },
  text: {
    fontSize: 12,
    fontWeight: '400',
    fontFamily: 'Poppins-Regular',
    color: isDarkMode ? 'white' : 'black',
    textAlign: 'center',
    marginTop: 7,
  },
});
