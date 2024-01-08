import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View,Image, Platform, Dimensions, Touchable, TouchableWithoutFeedback, Alert, TouchableOpacity, ImageBackground } from 'react-native';

export default function App() {
  const handleYes = ()=>{
    console.log("yes");
  }
  const handleNo = () =>{
    console.log("no")
  }
  const handleTouchable = ()=>{
    Alert.alert('The title','The message',[{text: 'yes' ,onPress: handleYes},{text:'No' , onPress: handleNo}]);
  }

  return (
    <View style={styles.container}>
    
        <ImageBackground
          source={require('./assets/landingPage1.jpg')}
          style={styles.landingImage}
        >
        <TouchableOpacity style={styles.login}>
          <View style={{flex: 1,alignItems:'center',justifyContent: 'center'}}>
            <Text style={{fontSize:20,fontFamily:'monospace',color:'white'}}>Login</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity  style={styles.signin}>
          <View style={{flex: 1,alignItems:'center',justifyContent: 'center'}}>
            <Text style={{fontSize:20,fontFamily:'monospace',color:'white'}}>SignUp</Text>
          </View>
        </TouchableOpacity>
        </ImageBackground>
    </View>
  );
}

const styles = StyleSheet.create({
  container:{
    flex: 1,
  },
  landingImage: {
    flex: 1,
    resizeMode: 'cover',
    height: Dimensions.get('screen').height,
    width: Dimensions.get('screen').width,
    alignItems: 'center',
    justifyContent: 'center',
    
  },
  login: {
    position: 'absolute',
    bottom: 50,
    backgroundColor: 'rgba(255, 0, 0, 0.8)',
    padding: 10,
    borderRadius: 5,
    width: 300,
    height: 70
  },
  signin:{
    position: 'absolute',
    bottom : 150,
    backgroundColor: 'rgba(0, 255, 0, 0.8)',
    padding: 10,
    borderRadius: 5,
    width: 300,
    height: 70
  }
});
