import React from 'react';
import { Button, StyleSheet, TextInput, View, Text, FlatList, Modal } from 'react-native';
import { useState } from 'react';


const InputBar = ({back}) => {

    const [text, onChangeText] = useState("");
    const [itemList, setItemList] = useState([])
    const [itemSelected, setItemSelected] = useState({})
    const [modalVisible, setModalVisible] = useState(false)

    const addItem = () => {
        onChangeText('')
        const item = {
        value: text,
        id: Math.random().toString(),
        }
        setItemList([
            ...itemList,
            item
        ])
        onChangeText('')
    }

    const removeModal = (id) => {
        setModalVisible(true)
        setItemSelected(itemList.find(item => item.id === id))
    }

    const removeItem = () => {
        const newList = itemList.filter(item => item.id !== itemSelected.id)
        setItemList(newList)
        setModalVisible(false)
    }
    

    return(
        <View style={styles.screen}>
            <View style={styles.inputContainer}>
                <Button style={styles.btn}
                    onPress={back}
                    title="<"
                />
                <TextInput
                    style={styles.input}
                    onChangeText={onChangeText}
                    value={text}
                    placeholder="Add your task" 
                />
                <Button style={styles.btn}
                    onPress={addItem}
                    title="+"
                />
            </View>
            <View style={styles.items}>
                <FlatList
                data={itemList}
                keyExtractor={item => item.id}
                renderItem={(data) => (
                    <View style={styles.item} key={data.item.id}>
                        <Text>{data.item.value}</Text>
                        <Button title="X" onPress={() => removeModal(data.item.id)}/>
                    </View>
                )}
                />
            </View>
            <Modal style={styles.modal} visible={modalVisible} animationType="slide">
                <View>
                    <View>
                        <Text>Are you sure to delete item?</Text>
                    </View>
                    <View>
                        <Text>{itemSelected.value}</Text>
                    </View>
                </View>
                <View>
                    <Button title="DELETE" onPress={removeItem} />
                </View>
            </Modal>
        </View>
    )

}

const styles = StyleSheet.create({
    input: {
        height: 40,
        margin: 4,
        width: 270,
        borderWidth: 1,
        padding: 10,
        justifyContent: 'flex-start',
    },
    inputContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
    },
    screen: {
        padding: 30,
    },
    btn: {
        height: 40,
        width: 40,
    },
    item: {
        flexDirection: 'row',
        alignItems: 'center',
        borderWidth: 1,
        borderRadius: 10,
        padding: 10,
        marginTop: 10,
        marginBottom: 10,
        justifyContent:'space-between',
        backgroundColor: '#EEEEEE',

    },
    editBtn: {
        alignSelf: "center",
    },
    modal: {
        height: 80,
        width: 80,
    }
});

export default InputBar;