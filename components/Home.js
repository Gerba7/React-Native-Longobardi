import React from 'react';
import { Button, StyleSheet, TextInput, View, Text, FlatList, Modal } from 'react-native';
import { useState } from 'react';


const Home = ({start}) => {


    return(
        <View style={styles.screen}>
                <Button style={styles.btn}
                    onPress={start}
                    title="Add Items"
                />
        </View>
    )

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