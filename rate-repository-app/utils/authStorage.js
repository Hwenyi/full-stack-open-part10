import AsyncStorage from '@react-native-async-storage/async-storage';

class AuthStorage {
  constructor(namespace = 'auth') {
    this.namespace = namespace;
  }

  getKey(key) {
    return `${this.namespace}:${key}`;
  }

  getAccessToken() {
    // Get the access token for the storage
    return AsyncStorage.getItem(this.getKey('accessToken'));
  }

  setAccessToken(accessToken) {
    // Add the access token to the storage
    return AsyncStorage.setItem(this.getKey('accessToken'), accessToken);
  }

  removeAccessToken() {
    // Remove the access token from the storage
    return AsyncStorage.removeItem(this.getKey('accessToken'));
  }
}

export default AuthStorage;