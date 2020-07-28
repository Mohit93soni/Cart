import React from 'react';
import { View, Text, Button,StyleSheet } from 'react-native';

class HomeScreen extends React.Component {
  render() {
    return (
        <View style={Styles.container}>
            
            <Button title='Go to Tv' 
      onPress={()=>this.props.navigation.navigate('Tv')}/>
                  <Button title='Go to Mobile' 
      onPress={()=>this.props.navigation.navigate('Mobile')}/>
        </View>
       
    )
      
  }
}

const Styles=StyleSheet.create({
    container:{
        flex:1,
        justifyContent:'center',
        alignItems:'center'
    }
});

export default HomeScreen;