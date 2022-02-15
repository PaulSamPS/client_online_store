import {applyMiddleware, combineReducers, createStore} from 'redux'
import thunk from 'redux-thunk'
import {composeWithDevTools} from 'redux-devtools-extension'
import { persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage'
import {userReducer} from './reducers/userReducer'
import {productReducer} from './reducers/productReducer'
import {typeReducer} from './reducers/typeReducer'
import {brandReducer} from './reducers/brandReducer'
import {menuReducer} from './reducers/menuReducer'
import {dayProductReducer} from './reducers/dayProducts.reducer'

const persistConfig = {
    key: 'root',
    storage,
}

export const rootReducers = combineReducers({
    user: userReducer,
    product: productReducer,
    dayProducts: dayProductReducer,
    type: typeReducer,
    brand: brandReducer,
    menu: menuReducer
})

const persistedReducer = persistReducer(persistConfig, rootReducers)

export const store = createStore(persistedReducer, composeWithDevTools(applyMiddleware(thunk)))

export const persistor = persistStore(store)

export type RootState = ReturnType<typeof rootReducers>
export type AppDispatch = typeof store.dispatch


