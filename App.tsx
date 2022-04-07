import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Platform } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator, NativeStackNavigationProp } from '@react-navigation/native-stack';
import { ThemeProvider } from 'styled-components/native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import AppLoading from 'expo-app-loading';

import theme from './src/global/styles/theme/index';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

//Pages
import { About } from './src/pages/About';
import { AboutDev } from './src/pages/AboutDev';
import { Authors } from './src/pages/Authors';
import { Reference } from './src/pages/Reference';
import { Thanks } from './src/pages/Thanks';
import { Quiz } from './src/pages/Quiz';
import { Home } from './src/pages/Home';

import Colors from './src/global/styles/theme';

import {
  useFonts,
  Roboto_400Regular,
  Roboto_500Medium,
  Roboto_700Bold
} from '@expo-google-fonts/roboto';

function SettingsScreen() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Settings!</Text>
    </View>
  );
}

//List pages
export type RootStackParamList = {
  Sobre: undefined;
  AboutDev: undefined;
  Autores: undefined;
  'Referências': undefined;
  Thanks: undefined;
  Home: undefined;
  SettingsScreen: undefined;
  Quiz: undefined;
};

//Screen props with pages
export type ScreenProp = NativeStackNavigationProp<RootStackParamList>;

//Stack and Tab Navigations
const Stack = createNativeStackNavigator<RootStackParamList>();
const Tab = createBottomTabNavigator<RootStackParamList>();


export default function App() {

  const [fontsLoaded] = useFonts({
    Roboto_400Regular,
    Roboto_500Medium,
    Roboto_700Bold
  })

  if(!fontsLoaded){
    return <AppLoading />
  }
  
  return (
    <>
      <StatusBar 
        style={Platform.OS === 'ios' ? 'light' : 'light'}
        animated
      />
      <ThemeProvider theme={theme}>
        <NavigationContainer>
          <Tab.Navigator
            screenOptions={({ route }) => ({
              headerShown: false,
              tabBarStyle: {
                display: 'flex',
                flexDirection: 'row',
                height: 90,
                backgroundColor: Colors.colors.secondary,
                borderTopWidth: 0,
                borderTopLeftRadius: 20,
                borderTopRightRadius: 20,
                alignItems: 'center',
                position: 'absolute'
              },
              tabBarIcon: ({ focused, color, size }) => {
                let iconName;
    
                switch (route.name) {
                  case 'Home':
                    iconName = focused
                    ? 'home'
                    : 'home-outline';
                    break;
                  case 'Sobre':
                    iconName = focused
                    ? 'information-circle-outline'
                    : 'information-outline';
                    break;
                  case 'Autores':
                    iconName = focused
                    ? 'people-circle-outline'
                    : 'people-outline';
                    break;
                  case 'Referências':
                    iconName = focused
                    ? 'document-text-outline'
                    : 'document-outline';
                    break;
                  case 'Quiz':
                    iconName = focused
                    ? 'chatbubble-ellipses-outline'
                    : 'chatbubble-outline';
                    break;
                  default:
                    break;
                }  
                //@ts-ignore
                return <Ionicons name={iconName} size={size} color={color} />;
              },
              tabBarActiveTintColor: 'tomato',
              tabBarInactiveTintColor: '#FFF',
              tabBarItemStyle: {
                display: 'flex',
                backgroundColor: Colors.colors.primary_light,
                borderRadius: 17,
                height: 50,
                margin: 4,
                paddingBottom: 5
              },
              tabBarLabelStyle: {
                color: '#FFF',
                fontSize: 11,
                fontFamily: Colors.fonts.medium
              },
            })}
          >
            <Tab.Screen name="Home" component={Home}/>
            <Tab.Screen name="Sobre" component={About} />
            <Tab.Screen name="Autores" component={Authors} />
            <Tab.Screen name="Referências" component={Reference} />
            <Tab.Screen name="Quiz" component={Thanks} />
          </Tab.Navigator>
        </NavigationContainer>
      </ThemeProvider>
    </>
  );
}
