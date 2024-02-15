import { createStackNavigator } from '@react-navigation/stack';
import { HomeScreen } from '../screens/HomeScreen';
import { LoginScreen } from '../screens/LoginScreen';
import { RegisterScreen } from '../screens/RegisterScreen';
import { MenuScreen } from '../screens/MenuScreen';

export type RootStackParamList ={
    HomeScreen:undefined,
    LoginScreen:undefined,
    RegisterScreen:undefined,
    MenuScreen:undefined,
    MenorScreen:undefined
}



const Stack = createStackNavigator<RootStackParamList>();

export const StackNavigator =()=> {
  return (
    <Stack.Navigator>
      <Stack.Screen name="HomeScreen" options={{title:'Home'}} component={HomeScreen}/>
      <Stack.Screen name="LoginScreen" options={{title:'Login'}} component={LoginScreen}/>
      <Stack.Screen name="RegisterScreen" options={{title:'Register'}} component={RegisterScreen}/>
      <Stack.Screen name="MenuScreen" options={{title:'Menu'}} component={MenuScreen}/>
    </Stack.Navigator>
  );
}