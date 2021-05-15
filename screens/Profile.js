import React, { Component } from 'react';
 
import { StyleSheet, TextInput, View, Alert, Button, Text} from 'react-native';


Profile=({ route, navigation })=>{
    const { Email, otherParam } = route.params;
    return(
        <View style = { styles.MainContainer }>

           <Text style = {styles.TextComponentStyle}>{JSON.stringify(Email)} </Text>

           <Button title="Click here to Logout" onPress={ () => navigation.goBack() } />

        </View>
     );
  

}

 export default Profile;   


const styles = StyleSheet.create({
 
    MainContainer :{
     
    justifyContent: 'center',
    flex:1,
    margin: 10,
    },
     
    TextInputStyleClass: {
     
    textAlign: 'center',
    marginBottom: 7,
    height: 40,
    borderWidth: 1,
    
     borderColor: '#2196F3',
    
     borderRadius: 5 ,
    
    },
    
     TextComponentStyle: {
       fontSize: 20,
      color: "#000",
      textAlign: 'center', 
      marginBottom: 15
     }
    });