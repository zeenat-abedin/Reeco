import { persistStore } from 'redux-persist';
import { store } from './store'; // Import your Redux store

const persistor = persistStore(store);
console.log(persistor, "persistor")

export { persistor };
