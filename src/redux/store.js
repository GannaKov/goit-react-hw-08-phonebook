import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';
import storage from 'redux-persist/lib/storage';
import { authReducer } from './auth/slice';
import { contactsReducer } from './contacts/contactsSlice';
import { filtersReducer } from './contacts/filterSlice';

import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';

const authPersistConfig = {
  key: 'auth',
  storage,
  whitelist: ['token'],
};
const middleware = [
  ...getDefaultMiddleware({
    serializableCheck: {
      ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
    },
  }),
];
export const store = configureStore({
  reducer: {
    auth: persistReducer(authPersistConfig, authReducer),
    contacts: contactsReducer,
    filter: filtersReducer,
  },
  middleware,
  devTools: process.env.NODE_ENV === 'development',
});

//export const store = configureStore({
//   reducer: {
//     contacts: contactsReducer,
//     filter: filtersReducer,
//   },
// });
// import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';
// import {
//   persistStore,
//   persistReducer,
//   FLUSH,
//   REHYDRATE,
//   PAUSE,
//   PERSIST,
//   PURGE,
//   REGISTER,
// } from 'redux-persist';
// import storage from 'redux-persist/lib/storage';
// import { tasksReducer } from './tasks/slice';
// import { authReducer } from './auth/slice';

// const middleware = [
//   ...getDefaultMiddleware({
//     serializableCheck: {
//       ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
//     },
//   }),
// ];

// // Persisting token field from auth slice to localstorage
// const authPersistConfig = {
//   key: 'auth',
//   storage,
//   whitelist: ['token'],
// };

// export const store = configureStore({
//   reducer: {
//     auth: persistReducer(authPersistConfig, authReducer),
//     tasks: tasksReducer,
//   },
//   middleware,
//   devTools: process.env.NODE_ENV === 'development',
// });

//export const persistor = persistStore(store);
