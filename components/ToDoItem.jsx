import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput,Button } from 'react-native';

export default function ToDoItem({msg,onDelete,id}) {
    return (
        <View >
            <Text>{msg}</Text>
            <Button onPress={()=>onDelete(id)} title = "Delete"/>
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