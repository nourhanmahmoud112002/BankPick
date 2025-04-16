import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import HomeScreen from './HomeScreen';
import {AppColors, isDarkMode} from '../../utils/AppColors';
import MyCardsScreen from './MyCardsScreen';
import StatisticsScreen from './StatisticsScreen';
import SettingsScreen from '../Settings/SettingsScreen';
// import Ionicons from 'react-native-vector-icons/Ionicons';

function HomeWithBottomTabs(): React.JSX.Element {
  const Tab = createBottomTabNavigator();
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarStyle: {
          backgroundColor: isDarkMode
            ? AppColors.blueGray
            : AppColors.lighterGray,
          borderTopWidth: 0,
          height: 86,
        },
        tabBarActiveTintColor: AppColors.primaryColor,
        tabBarInactiveTintColor: AppColors.LavenderGray,
      }}>
      <Tab.Screen
        name="Home"
        component={HomeScreen}
        options={
          {
            // tabBarIcon: ({ color, size }) => (
            //   <Ionicons name="home-outline" size={size} color={color} />
            // ),
          }
        }
      />
      <Tab.Screen name="My Cards" component={MyCardsScreen} />
      <Tab.Screen name="Statistics" component={StatisticsScreen} />
      <Tab.Screen name="Settings" component={SettingsScreen} />
    </Tab.Navigator>
  );
}
export default HomeWithBottomTabs;
