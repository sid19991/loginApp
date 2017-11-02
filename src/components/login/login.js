import React,{Component} from 'react';
import {Text,View,StyleSheet,Image} from 'react-native';
import LoginForm from './loginForm';
export default class Login extends Component{
  render(){
    return(
      <View style={styles.container}>
        <View style={styles.Imagelogo}>
        <Image source={require("../../images/Octocat.png")} style={styles.logo}/>
        <Text style={styles.title}>An app made for github using react native</Text>
        </View>
        <View style={styles.form}>
        <LoginForm/>
        </View>
      </View>
    )
  }
}
const styles=StyleSheet.create({
  container:{
    flex:1,
    backgroundColor:"#f49842"
  },
  logo:{
    width:100,
    height:100
  },
  Imagelogo:{
      flexGrow:1,
      justifyContent:'center',
      alignItems:'center'
  },
  form:{

  },
  title:{
    color:'white',
    marginTop:10,
    width:160,
    opacity:0.6
  }
})
