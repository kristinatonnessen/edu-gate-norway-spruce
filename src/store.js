import { applyMiddleware, createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import { persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage'
import thunk from 'redux-thunk';
import rootReducer from './reducers';


export const initialState = {
  users: [],
  results: [],
  schools: [],
  loading: false
};

const persistConfig = {
    key: 'root',
    storage,
}

const persistedReducer = persistReducer(persistConfig, rootReducer)

export const store =  createStore(
  persistedReducer,
  initialState,
  composeWithDevTools(applyMiddleware(thunk))
);

export const persistor = persistStore(store);
