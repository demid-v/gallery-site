import { call, put } from "redux-saga/effects";
import { setPhoto, setPhotos } from "../../ducks/photos";
import { requestGetPhoto, requestGetPhotos } from "../requests/photos";

function* handleGetPhotos() {
  try {
    const response = yield call(requestGetPhotos);
    const { data } = response;
    yield put(setPhotos(data));
  } catch (error) {
    console.error(error);
  }
}

function* handleGetPhoto(action) {
  try {
    const response = yield call(() => requestGetPhoto(action.id));
    const { data } = response;
    yield put(setPhoto(data));
  } catch (error) {
    console.error(error);
  }
}

export { handleGetPhotos, handleGetPhoto };
