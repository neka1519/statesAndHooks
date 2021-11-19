import React,{useState} from'react' ;
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





export default App;
