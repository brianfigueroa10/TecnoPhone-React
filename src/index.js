import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './App';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import { GlobalStyles } from './styles/GlobalStyles';
import { persistor, store } from './redux/store';
import { PersistGate } from 'redux-persist/integration/react';
import { FirebaseAppProvider } from 'reactfire';
import app from './firebase/firebaseConfig';


const root = createRoot(document.getElementById('root'));
root.render(
  <Provider store={store}>
    <FirebaseAppProvider firebaseConfig={app}>
      <PersistGate persistor={persistor}>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </PersistGate>
    </FirebaseAppProvider>
    <GlobalStyles />
  </Provider>
);
