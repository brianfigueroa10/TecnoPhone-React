import { combineReducers, configureStore } from '@reduxjs/toolkit';
import recommendedReducer from './RecommendationSlice';
import storage from 'redux-persist/lib/storage';
import productsReducer from './productsSlice'
import userReducer from './UserSlice'
import { persistReducer } from 'redux-persist';
import persistStore from 'redux-persist/es/persistStore';
import categoriesReducer from './categoriesSlice'
import cartReducer from './cartSlice'

const reducers = combineReducers({
    categories: categoriesReducer,
    products: productsReducer,
    recommended: recommendedReducer,
    cart: cartReducer,
    user: userReducer,
})

const persistConfig = {
    key: 'root',
    storage,
    whitelist: ['cart', 'user'] //guarda la info en el storage de la cart y el usuario solamente
}

const persistedReducer = persistReducer(persistConfig, reducers);

export const store = configureStore({
    reducer: persistedReducer,
    middleware: getDefaultMiddleware => getDefaultMiddleware({ serializableCheck: false })
});

export const persistor = persistStore(store);
