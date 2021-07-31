import { call, takeEvery, put } from "redux-saga/effects";
import Axios from "axios";
import { sagaActions } from "./sagaActions";

let callAPI = async (options: any) => {
  return await Axios(options);
};

export function* fetchDataSaga() {
  try {
    let result = yield call(() =>
      callAPI({ url: "" })
    );
    //yield put(fetchData(result.data));
  } catch (e) {
    yield put({ type: "TODO_FETCH_FAILED" });
  }
}

export default function* rootSaga() {
  yield takeEvery(sagaActions.FETCH_DATA_SAGA, fetchDataSaga);
}
