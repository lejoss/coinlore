import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';
import createSagaMiddleware from 'redux-saga'
import coinReducer from '../features/coin/coinSlice'
import saga from './saga'

const sagaMiddleware = createSagaMiddleware()
const middleware = [...getDefaultMiddleware({ thunk: false }), sagaMiddleware];

const store = configureStore({
  reducer: {
    data: coinReducer
    // control: () => {}, // pagination, forms, etc
    // comunication: () => {} // loading, spinners
  },
  middleware
})

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;

sagaMiddleware.run(saga)

export { store }
