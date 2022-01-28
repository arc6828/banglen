import React from 'react';
import { store, persistor } from 'app/store';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import Navigator from './navigation';
import { AuthContextProvider } from '../hooks/AuthContext';
// console.disableYellowBox = true;

export default function App() {
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
