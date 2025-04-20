import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import HomeScreen from './HomeScreen';
import {AppColors, isDarkMode} from '../../utils/AppColors';
import MyCardsScreen from './MyCardsScreen';
import StatisticsScreen from './StatisticsScreen';
import SettingsScreen from '../Settings/SettingsScreen';
// import SettingsIcon from '../../assets/svgs/SettingsIcon.svg';
// import HomeIcon from '../../assets/svgs/HomeIcon.svg';
// import CardIcon from '../../assets/svgs/CardIcon.svg';
// import StatIcon from '../../assets/svgs/StatIcon.svg';

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
          height: 80,
          paddingTop: 7,
        },
        tabBarActiveTintColor: AppColors.primaryColor,
        tabBarInactiveTintColor: AppColors.LavenderGray,
        tabBarLabelStyle: {
          marginTop: 5,
          fontSize: 12,
        },
      }}>
      <Tab.Screen
        name="Home"
        component={HomeScreen}
        options={{
        //   tabBarIcon: ({color, size}) => {
        //     console.log("home",HomeIcon);
        //    return <HomeIcon width={size} height={size} color={color} /> 
        // } ,
        }}
      />
      <Tab.Screen
        name="My Cards"
        component={MyCardsScreen}
        options={{
          // tabBarIcon: ({color, size}) => (
          //   <CardIcon width={size} height={size} color={color} />
          // ) ,
        }}
      />
      <Tab.Screen
        name="Statistics"
        component={StatisticsScreen}
        options={{
          // tabBarIcon: ({color, size}) => (
          //   <StatIcon width={size} height={size} color={color} />
          // ),
        }}
      />
      <Tab.Screen
        name="Settings"
        component={SettingsScreen}
        options={{
          // tabBarIcon: ({color, size}) => (
          //   <SettingsIcon width={size} height={size} color={color} />
          // ),
        }}
      />
    </Tab.Navigator>
  );
}
export default HomeWithBottomTabs;
