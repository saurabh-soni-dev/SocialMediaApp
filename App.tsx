import React from 'react';
import Route from './src/navigation';
import { Provider } from 'react-redux';
import store from './src/services/reduxToolkit/store';
import { PersistGate } from 'redux-persist/integration/react';

const App = () => {
  const persistStore = store();

  return (
    <Provider store={persistStore.store}>
      <PersistGate loading={null} persistor={persistStore.persistor}>
        <Route />
      </PersistGate>
    </Provider>
  );
};

export default App;
