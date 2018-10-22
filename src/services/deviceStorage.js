import { AsyncStorage } from 'react-native';

const deviceStorage = {
  async saveKey(key, value) {
    try {
      await AsyncStorage.setItem("key", 'value');
    } catch (error) {
      console.log('AsyncStorage Error: ' + error.message);
    }
  },

  async getKey(key) {
    try {
      await AsyncStorage.getItem(key).then((value) => {
        if (value !== null) {
        return value;
        }
      });
    } catch (error) {
      console.log('AsyncStorage Error: ' + error.message);
    }
  }


};

export default deviceStorage;
