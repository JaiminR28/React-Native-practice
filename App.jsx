import {FlatList, StyleSheet, Text, View} from 'react-native';
import React from 'react';

const App = () => {
  const data = [
    {
      id: 0,
      name: 'John Doe',
      age: 30,
    },
    {
      id: 1,
      name: 'Jane Doe',
      age: 25,
    },
    {
      id: 2,
      name: 'Mike Doe',
      age: 28,
    },
    {
      id: 3,
      name: 'Sarah Doe',
      age: 32,
    },
  ];
  return (
    <View>
      <Text>App for test</Text>
      {data.map((item, index) => {
        return (
          <View key={index} style={styles.container}>
            <Text style={{color: '#aaa'}}>{item.age}</Text>
          </View>
        );
      })}
    </View>
  );
};

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    display: 'flex',
    flexDirection: 'row',
    padding: 10,
    marginBottom: 10,
    borderWidth: 1,
    borderColor: '#ddd',
    backgroundColor: '#aaa',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  text: {
    display: 'flex',
  },
});
