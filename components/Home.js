import React from 'react';
import { Button, StyleSheet, TextInput, View, Text, FlatList, Modal } from 'react-native';
import { useState } from 'react';


const Home = ({start}) => {

    const [home, setStart] = useState(false)

    const start = () => {
      setStart(true)
    }
  
    const back = () => {
      setStart(false)
    }
  
    return (
      <View style={styles.container}>
        { home ? <InputBar back={back} /> : <Home start={start} /> }
      </View>
    );

}

const styles = StyleSheet.create({
    screen: {
        padding: 30,
    },
    btn: {
        height: 40,
        width: 40,
    },
});

export default Home;