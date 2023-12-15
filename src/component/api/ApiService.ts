/* eslint-disable prettier/prettier */
import axios from 'axios';

class ApiService {
  static async getTodos() {
    try {
      const response = await axios.get(
        'https://jsonplaceholder.typicode.com/todos',
      );
      return response.data;
    } catch (error) {
      console.error('Error fetching data:', error);
      throw error;
    }
  }
}

export default ApiService;
