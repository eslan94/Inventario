import React from 'react'
import { Image, StyleSheet, Text, View } from 'react-native'
import { ButtonComponent } from '../components/ButtonComponent'
import { StackScreenProps } from '@react-navigation/stack'
import { RootStackParamList } from '../navigator/StackNavigator'
import { stylesGeneral } from '../theme/AppTheme';

interface Props extends StackScreenProps<RootStackParamList,'HomeScreen'>{};


export const HomeScreen = ({navigation}:any) => {
  return (
    <View style={stylesGeneral.container}>
        <Text style={stylesGeneral.title}>Bienvenido</Text>
        <View style={styles.btnContainer}>
            <Image style={stylesGeneral.icons} source={require('../images/IniciarSesion.png')}/>
            <Image style={stylesGeneral.icons} source={require('../images/NuevoRegistro.png')}/>
        </View>
        <View style={styles.btnContainer}>
            <ButtonComponent onPress={()=>navigation.navigate('LoginScreen')} title='Login'/>
            <ButtonComponent onPress={()=>navigation.navigate('RegisterScreen')} title='Register'/>
        </View>
    </View>
  )
}

const styles=StyleSheet.create({
    btnContainer:{
        flexDirection:'row',
        
    }
})