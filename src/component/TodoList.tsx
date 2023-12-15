/* eslint-disable prettier/prettier */
import React, {useState, useEffect} from 'react';
import {View, Text, FlatList} from 'react-native';
import { styles } from './style/Style';
import ApiService from './api/ApiService';

const TodoList = () => {
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await ApiService.getTodos();
        setTodos(data);
      } catch (error) {
        console.log(error);
      }
    };

    fetchData();
  }, []);

  const renderItem = (item:any) => (
    <View style={styles.todoItemContainer}>
    <View style={styles.todoItem}>
      <Text style={styles.todoText}>{item.title}</Text>
    </View>
  </View>
);

  return (
    // eslint-disable-next-line prettier/prettier
    <View style={styles.container}>
      <Text style={styles.title}>ToDo List</Text>
      <FlatList
        data={todos}
        renderItem={({item}) => renderItem(item)} />
    </View>
  );
};

export default TodoList;
