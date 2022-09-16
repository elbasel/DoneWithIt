import AsyncStorage from "@react-native-async-storage/async-storage";
import moment from "moment";

const prefix = "cache";
const expiryInMinutes = 5;

const isExpired = (item) => {
  const now = moment();
  const timestamp = moment(item.timestamp);

  return now.diff(timestamp, "minutes") > expiryInMinutes;
};

const store = async (key, value) => {
  const item = {
    value,
    timestamp: Date.now(),
  };

  try {
    await AsyncStorage.setItem(prefix + key, JSON.stringify(item));
  } catch (error) {
    console.log(error);
  }
};

const get = async (key) => {
  try {
    const value = await AsyncStorage.getItem(prefix + key);
    const item = JSON.parse(value);

    if (!item) return null;

    if (isExpired(item)) {
      await AsyncStorage.removeItem(prefix + key);
      return null;
    }

    return item.value;
  } catch (error) {
    console.log(error);
  }
};

export default {
  store,
  get,
};
