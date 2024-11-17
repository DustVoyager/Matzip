import React from 'react';
import {Button, SafeAreaView, StyleSheet, Text, TextInput} from 'react-native';

function App(): JSX.Element {
  return (
    <SafeAreaView style={styles.container}>
      <Text>텍스트</Text>
      <Button title="버튼이름" onPress={() => console.log('클릭됨!')} />
      <TextInput />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'blue',
  },
});

export default App;
