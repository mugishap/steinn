import { combineReducers, configureStore } from "@reduxjs/toolkit";
import storage from 'redux-persist/lib/storage';
import { persistReducer, persistStore } from 'redux-persist';
import thunk from 'redux-thunk';
import songsReducer from './slices/songsSlice';

const persistConfig = {
    key:"root",
    storage
}


const ALL_REDUCERS = combineReducers({
    songs:songsReducer
})

const persistedreducer = persistReducer(persistConfig, ALL_REDUCERS)

export const store = configureStore({
    reducer:persistedreducer,
    devTools:import.meta.env.VITE_NODE_ENV !== 'production',
    middleware:[thunk]
})

export const persistor = persistStore(store)