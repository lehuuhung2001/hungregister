import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View ,TextInput,TouchableOpacity,
  TouchableWithoutFeedback,Keyboard,KeyboardAvoidingView,Platform,ScrollView} from 'react-native';
import { backgroundColor } from 'react-native/Libraries/Components/View/ReactNativeStyleAttributes';
import {useState} from 'react';
import * as Yup from 'yup';
import { SignupSchema } from './vaditation';

export default function App() {
  const [firstname,setfirstname] = useState('');
  const [lastname,setlastname] = useState('');
  function submit(){
    alert(firstname)
  }
  return (
    <TouchableWithoutFeedback onPress ={Keyboard.dismiss}>
    <KeyboardAvoidingView
      behavior={Platform.OS === "ios" ? "padding" : "height"}style = {{flex: 1,justifyContent:'center'}}>
    <View style={styles.container}>
    <StatusBar style="light"/>
      <View style ={styles.box1}>
      <Text style = {{textAlign: 'center',paddingVertical: 70,color: 'white',fontSize: 18}}>Register</Text>
      </View>
      <Text style = {styles.text}>First Name</Text>
        <View style = {styles.box2}><TextInput style = {{paddingTop: 12}} value ={setfirstname} onChangeText={text_ =>setfirstname(text_)}></TextInput></View>
      <Text style = {styles.text}>Last Name</Text>
        <View style = {styles.box2}><TextInput style = {{paddingTop: 12}} value ={setlastname}></TextInput></View>
      <Text style = {styles.text}>Email Address</Text>
        <View style = {styles.box2}><TextInput style = {{paddingTop: 12}}></TextInput></View>
      <Text style = {styles.text}>Password</Text>
        <View style = {styles.box2}><TextInput style = {{paddingTop: 12}}></TextInput></View>
      <Text style = {styles.text}>Confirm Password</Text>
        <View style = {styles.box2}><TextInput style = {{paddingTop: 12}}> </TextInput></View>
      <TouchableOpacity style = {styles.box3} onPress ={submit}><Text style = {{textAlign:'center',paddingTop:15,fontWeight:'bold', 
      color:'white'}}>SUBMIT</Text></TouchableOpacity>
    </View>
    </KeyboardAvoidingView>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    
  },
  box1: {
    flex: 0.4,
    backgroundColor: '#3498db',
  },
  box2: {
    width: '80%',
    height: 45,
    borderRadius: 10,
    borderWidth: 2,
    borderColor: '#f2f2f2',
    marginLeft: 30,
    
  },
  box3:{
    width: '80%',
    height: 45,
    borderRadius: 18,
    backgroundColor:'#2980b9',
    marginLeft: 30,
    marginTop: 40
  },
  text:{
    paddingLeft: 30,
    paddingTop: 30,
    color: '#3498db',
  }
});
