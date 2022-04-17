import { takeLatest } from "redux-saga/effects";
import { handleGetPhoto, handleGetPhotos } from "./handlers/photos";

function* watcherSaga() {
  yield takeLatest("GET_PHOTOS", handleGetPhotos);
  yield takeLatest("GET_PHOTO", handleGetPhoto);
}

export { watcherSaga };
