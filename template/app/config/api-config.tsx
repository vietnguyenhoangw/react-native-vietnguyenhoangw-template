import Config from "react-native-config";

export const ApiConfig = {
  baseURL: Config.BASE_URL,
  headers: {
    'Content-Type': 'application/json',
    'Cache-Control': 'no-cache',
  },
  timeOut: 30000,
};
