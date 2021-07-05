import React, { useState } from 'react';
import { StyleSheet, View ,FlatList  } from 'react-native';

import InputArea from './components/InputArea';
import ToDoItem from './components/ToDoItem';


export default function App() {
  const [todoItems, setTodoItems] = useState([ {todoMessage:"Henlo" ,id:0} ]);

  function onAdd(message){

    setTodoItems([...todoItems,{ todoMessage:message ,id:Math.random() }])  
  }

  function onDelete(id){
    setTodoItems(todoItems.filter(x=>x.id!=id))
  }

  return (
    <View style={styles.container}>
      <InputArea onAdd = {onAdd}/>
      {todoItems.map(x=><ToDoItem id= {x.id} onDelete= {onDelete} msg ={x.todoMessage} ></ToDoItem>)}
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