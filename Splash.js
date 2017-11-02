import React,{Component} from 'react';
import {Text,View,StyleSheet} from 'react-native';
export default class Splash extends Component{
  render(){
    return(
      <View style={styles.wrapper}>
        <Text style={styles.title}>Hello World!</Text>
        <Text style={styles.subtitle}>Welcome to React Native</Text>
      </View>
    )
  }
}
const styles=StyleSheet.create({
  wrapper:{
    backgroundColor:'red',
    justifyContent:'center',
    flex:1,
    alignItems:'center'
  },
  title:{
    color:'white',
    fontSize:35,
    fontWeight:'bold'
  },
  subtitle:{
    color:'white',
    fontWeight:'normal'
  }
})
