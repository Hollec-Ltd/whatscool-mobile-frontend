import { AsyncStorage } from 'react-native';


class LocalStroragePersister {
   static storeData = async (key, value) => {
     try {
       await AsyncStorage.setItem(
         key,
         value,
       );
     } catch (error) {
       console.log(error);
     }
   };

    static retrieveData = async (key) => {
      try {
        const data = await AsyncStorage.getItem(key);
        if (data !== null) {
          return data;
        }
      } catch (error) {
         return;
      }
    };
}

export default LocalStroragePersister;
