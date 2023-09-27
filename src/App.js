import React from 'react'
import MainView from './pages'
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import { Provider } from 'react-redux';
import { store, persistor } from './Store/store';
import CustomModal from './component/Modal';
import { PersistGate } from 'redux-persist/integration/react'; // Import PersistGate

const App = () => {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <CustomModal />
        <MainView />
      </PersistGate>
    </Provider>

  )
}

export default App