import React, { useState } from 'react'
import { Image, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import { stylesGeneral } from '../theme/AppTheme'

export const RegisterScreen = () => {

    const [nombre, onChangeNombre] = useState('');
    const [apellido, onChangeApellido] = useState('');
    const [correo, onChangeCorreo] = useState('')
    const[clave, onChangeClave] = useState('')

  return (
    <View style={styles.container}>
        <View>
            <Text style={styles.title}>Registro Usuario</Text>
        </View>
        <View>
            <Text style={styles.texto}>Nombre</Text>
            <TextInput style={styles.input} onChangeText={onChangeNombre} value={nombre} placeholder='Nombre'/>
        </View>
        <View>
            <Text style={styles.texto}>Apellido</Text>
            <TextInput style={styles.input} onChangeText={onChangeApellido} value={apellido} placeholder='Apellido'/>
        </View>
        <View>
            <Text style={styles.texto}>Correo</Text>
            <TextInput style={styles.input} onChangeText={onChangeCorreo} value={correo} placeholder='Correo'/>
        </View>
        <View>
            <Text style={styles.texto}>Contraseña</Text>
            <TextInput style={styles.input} onChangeText={onChangeClave} value={clave} placeholder='Contraseña' secureTextEntry={true}/>
        </View>
        <View style={styles.boton}>
        <TouchableOpacity style={styles.cajaBoton} >
          <Text style={styles.textoBoton}>Registrar</Text>
        </TouchableOpacity>
      </View>  
    </View>
  )
}

const styles=StyleSheet.create({
  container: {
    flex:1,
    justifyContent: 'center'
  },
  input:{
    height:40,
    marginHorizontal:20,
    marginVertical:10,
    borderWidth:1,
    borderRadius:7,
    padding:10
  },
  title:{
      marginBottom:80,
      fontSize:40,
      textAlign:'center',
      color: '#0824F2'
  },
  texto:{
    marginLeft:20,
    fontSize: 20
  },
  boton:{
      alignItems:'center',
    },
    cajaBoton:{
      backgroundColor: '#525FE1',
      paddingVertical: 20,
      width:150,
      marginTop:20
    },
    textoBoton:{
      textAlign:'center',
      color:'white',
      fontSize: 25
    },
})