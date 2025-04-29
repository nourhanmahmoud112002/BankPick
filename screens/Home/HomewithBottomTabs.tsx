import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import HomeScreen from './HomeScreen';
import {AppColors} from '../../utils/AppColors';
import MyCardsScreen from './MyCardsScreen';
import StatisticsScreen from './StatisticsScreen';
import SettingsScreen from '../Settings/SettingsScreen';
import React from 'react';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {
  faHouse,
  faWallet,
  faGear,
  faChartPie,
} from '@fortawesome/free-solid-svg-icons';
import { useTheme } from '../../hooks/darkModeContext';

function HomeWithBottomTabs(): React.JSX.Element {
  const {isDarkMode} = useTheme();
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
          tabBarIcon: ({color}) =>
            (
              <FontAwesomeIcon icon={faHouse} color={color} size={24} />
            ) as any,
        }}
      />
      <Tab.Screen
        name="My Cards"
        component={MyCardsScreen}
        options={{
          tabBarIcon: ({color}) =>
            (
              <FontAwesomeIcon icon={faWallet} color={color} size={24} />
            ) as any,
        }}
      />
      <Tab.Screen
        name="Statistics"
        component={StatisticsScreen}
        options={{
          tabBarIcon: ({color}) =>
            (
              <FontAwesomeIcon icon={faChartPie} color={color} size={24} />
            ) as any,
        }}
      />
      <Tab.Screen
        name="Settings"
        component={SettingsScreen}
        options={{
          tabBarIcon: ({color}) =>
            (
              <FontAwesomeIcon icon={faGear} color={color} size={24} />
            ) as any,
        }}
      />
    </Tab.Navigator>
  );
}
export default HomeWithBottomTabs;
