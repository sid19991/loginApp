import React,{Component} from 'react';
import {Text,View,StyleSheet,Image,TextInput,TouchableOpacity,KeyboardAvoidingView,StatusBar} from 'react-native';
export default class loginForm extends Component{
  constructor(props){
    super(props)
    this.state={
      "display":""
    }
    this.onClick = this.onClick.bind(this);
  }
  onClick(e){
    this.setState({display:"Hello"});
  }
  render(){
const text = this.state.display;
    return(
      <View>
      <Text>{text}</Text>

      <KeyboardAvoidingView behaviour="padding" style={styles.container}>

      <StatusBar barStyle="light-content"/>
      <TextInput
      placeholder="Username or Email"
      returnKeyType="next" placeholderTextColor="rgba(255,255,255,0.7)"
      keyboardType="email-address" autoCapitalize="none" autoCorrect={false}
      style={styles.input} onSubmitEditing={()=>this.passwordInput.focus()}/>
      <TextInput placeholder="Password" returnKeyType="go" secureTextEntry placeholderTextColor="rgba(255,255,255,0.7)" style={styles.input} ref={(input)=>this.passwordInput=input}/>
      <TouchableOpacity style={styles.touchableContainer}>
      <Text style={styles.touchableText} onPress={this.onClick}>LOGIN</Text>
      </TouchableOpacity>
      </KeyboardAvoidingView>
      </View>
    )
  }
}
const styles = StyleSheet.create({
  container:{

  },
  input:{
    height:40,
    backgroundColor:'rgba(255,255,255,0.2)',
    marginBottom:10,
    color:"#FFF",
    paddingHorizontal:10
  },
  touchableContainer:{
    backgroundColor:"#1345c4",
    paddingVertical:15
  },
  touchableText:{
    textAlign:'center',
    color:"#FFFFFF",
    fontWeight:'700'
  }
})
