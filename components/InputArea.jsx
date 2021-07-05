import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput,Button} from 'react-native';

export default function InputArea({onAdd}) {
    const [text, setText] = useState('');
    return (
        <View >
            <Text>Hello Orrange Thanks for adopting me {"\n"}</Text>
            <TextInput 
            placeholder = "Enter Text Here" 
            defaultValue = {text}
            onChangeText={text => setText(text)}
            />
            <Button onPress={()=>onAdd(text)} title = "Add"/>
        </View>
    );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});