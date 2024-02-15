import React from 'react'
import { Image, StyleSheet, Text, View } from 'react-native'
import { ButtonComponent } from '../components/ButtonComponent'
import { StackScreenProps } from '@react-navigation/stack'
import { RootStackParamList } from '../navigator/StackNavigator'
import { stylesGeneral } from '../theme/AppTheme';

interface Props extends StackScreenProps<RootStackParamList,'HomeScreen'>{};


export const MenuScreen = ({navigation}:any) => {
  return (
    <View style={stylesGeneral.container}>
        <Text style={stylesGeneral.title}>Selecciona una opción</Text>
        <View style={styles.btnContainer}>
            <Image style={stylesGeneral.icons} source={require('../images/LogoProductos.png')}/>
        </View>
        <View style={styles.btnContainer}>
          <ButtonComponent onPress={()=>navigation.navigate('')} title='Productos'/>
        </View>
        <View style={styles.btnContainer}>
            <Image style={stylesGeneral.icons} source={require('../images/LogoClientes.png')}/>
            <Image style={stylesGeneral.icons} source={require('../images/LogoProveedor.png')}/>
        </View>
        <View style={styles.btnContainer}>
            <ButtonComponent onPress={()=>navigation.navigate('')} title='Clientes'/>
            <ButtonComponent onPress={()=>navigation.navigate('')} title='Proveedores'/>
        </View>
    </View>
  )
}

const styles=StyleSheet.create({
    btnContainer:{
        flexDirection:'row',
    },
    logo: {
      width: 120,
      height: 120,
      alignSelf:'center',
      padding:20,
      marginBottom: 40
    },
})