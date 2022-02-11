import React, { useEffect } from 'react';
import { store, persistor } from 'app/store';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import Navigator from './navigation';
import { AuthContextProvider } from '../hooks/AuthContext';
import { LogBox } from 'react-native';
// console.disableYellowBox = true;

export default function App() {
  useEffect(() => { 
  // LogBox.ignoreLogs(['Require cycle']);
  LogBox.ignoreLogs(['Require cycle','Setting a timer']);
 }, []);
  return (
    <Provider store={store}>
      {/* <AuthContextProvider> */}
      <PersistGate loading={null} persistor={persistor}>
        <Navigator />
      </PersistGate>
      {/* </AuthContextProvider> */}
    </Provider>
  );
}
