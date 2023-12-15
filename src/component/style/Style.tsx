/* eslint-disable prettier/prettier */
import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
        backgroundColor: '#fff',
      },
      title: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 20,
        color: '#4f9cdc',
      },
      todoItemContainer: {
        shadowColor: '#000',
        shadowOffset: {
          width: 0,
          height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,
        marginBottom: 10,
      },
      todoItem: {
        backgroundColor: 'white',
        borderRadius: 10,
        padding: 15,
        borderColor: '#d7dadb',
        borderWidth: 1,
      },
      todoText: {
        color: 'black',
        fontSize: 16,
      },
});
