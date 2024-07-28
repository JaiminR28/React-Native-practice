import { Button, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { NavigationContainer, useNavigation } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'


const Stack = createStackNavigator();

const App = () => {
  return (
   <NavigationContainer>
    <Stack.Navigator screenOptions={{headerTitleStyle : {color : "green"}}}>
      <Stack.Screen name="Login" component={LoginScreen} options={{headerTitleStyle : {color : "green"}}} />
      <Stack.Screen name="Home" component={HomeScreen} />
    </Stack.Navigator>
   </NavigationContainer>
  )
}

export default App


const LoginScreen = ({navigation}) => {
  const hookNavigation = useNavigation();
  return (
    <View style={styles.container}>
      <Text>Login Screen</Text>
      <Button title={"home"} onPress={() => { hookNavigation.navigate("Home", {name : "Jaimin rathwa", age : 22})}}  />
    </View>
  )
}

const HomeScreen = ({navitation, route}) => {
  console.log({route : route.params});
  return (
    <View style={styles.container}>
      <Text>Home Screen</Text>
      <Text h1 style={{color: "white"}}>Hello' {route?.params?.name}</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',
    alignItems: 'center',
    justifyContent: 'center',
  },
})