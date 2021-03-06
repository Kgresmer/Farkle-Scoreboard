import { createStore, compose, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import reducers from '../reducers';
import {persistReducer, persistStore} from "redux-persist";
import { AsyncStorage } from 'react-native'
import autoMergeLevel2 from 'redux-persist/lib/stateReconciler/autoMergeLevel2';

const persistConfig = {
    key: 'root',
    storage: AsyncStorage,
    stateReconciler: autoMergeLevel2,
    whitelist: ['player']
};

const persistedReducer = persistReducer(persistConfig, reducers);

export const store = createStore(persistedReducer,
        undefined,
        compose(
            applyMiddleware(thunk)
        ));
export const persistor = persistStore(store);