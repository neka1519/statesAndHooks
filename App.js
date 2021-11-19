/*import React,{useState} from'react' ;
import{View, Text,Button,StyleSheet} from'react-native';

const App =()=> {

const[name,setName] = useState('Neka');
//the initial value will be set to Neka
const[session, setSession] = useState({number :1,
   title:'Hoos and States'})
const[current, setCurrent] = useState(true)

const updateHandler =()=>{
  setName('Your name is Neka')
  setSession({number : 2})
  setCurrent (false)
}
return(
<View style = {styles.container}>
  <Text  styles = {styles.textContainer}>{name} </Text>
  <Text  styles = {styles.textContainer}> 
  You are in the session {session.number}
   </Text>
   <Text  styles = {styles.textContainer}> 
  {current ? 'You are in current Session' : 'You have moved to next session' }
   </Text>
    <Button title = "Update" 
    color ='#000000'
    onPress = {updateHandler}>
    </Button>
</View>
  )
  }
const styles = StyleSheet.create({
  container:{
    flex:1,
    backgroundColor : '#678dff',
    alignContent : 'center',
    alignItems : 'center'
  },


  textContainer :  {
    fontSize : 25,
    fontWeight : 'bold',
    color : '#ff9023',
    marginTop : 100
  }
})
export default App; */

import React,{useState} from'react' ;
import {View, StyleSheet, Text, Button} from 'react-native' ;

const App = ()=>{

//usestate
const[counter, setCounter] = useState(0);

const updateValue=()=>{
  setCounter (counter+1)
}


return(
 <View style = {styles.container}>
 <Text style = {styles.containerText}> {counter * 5} </Text>
 <Button title = 'ADD' color = '#45fa00' onPress ={updateValue}>
 </Button>
 <Text style = {styles.containerText}> You have pressed the button {counter} times </Text>
 </View>
  )
}

const styles = StyleSheet.create({
  container : {
    flex : '50%',
    backgroundColor : '#f30154',
    borderColor : 'yellow',
    alignContent : 'center',
    alignItems : 'center'
  },
  containerText :{
fontSize : 20,
fontStyle : 'italic'
  }
})
export default App;
