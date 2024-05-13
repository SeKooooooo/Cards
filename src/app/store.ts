import { configureStore } from '@reduxjs/toolkit';
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
import storage from 'redux-persist/lib/storage';
import auth from '../features/authSlice';
import page from '../features/pageSlice';
import { api } from './services/api';

const persistConfig = {
	key: 'token',
	storage,
};

const persistedReducer = persistReducer(persistConfig, auth);

export const store = configureStore({
	reducer: {
		[api.reducerPath]: api.reducer,
		persistedReducer,
		page
	},
	middleware: (getDefaultMiddleware) =>
		getDefaultMiddleware({
		  serializableCheck: {
			ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
		  },
		}).concat(api.middleware)
});

export const persistor = persistStore(store);
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
