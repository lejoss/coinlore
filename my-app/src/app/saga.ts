import { call, takeEvery, put } from "redux-saga/effects";
import Axios from "axios";
import { sagaActions } from './sagaActions'
import { fetchCoins } from '../features/coin/coinSlice'

let callAPI = async (options: any) => {
  return await Axios(options);
};

export function* fetchCoinsSaga() {
  try {
    let result = yield call(() =>
      callAPI({ url: "https://api.coinlore.net/api/tickers/" })
    );
    yield put(fetchCoins(result.data));
  } catch (e) {
    yield put({ type: "COIN_FETCH_FAILED" });
  }
}

export default function* rootSaga() {
  yield takeEvery(sagaActions.FETCH_COINS_SAGA, fetchCoinsSaga);
}
