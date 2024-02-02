import { takeEvery, put } from "redux-saga/effects";
import {
  PRODUCT_LIST,
  SEARCH_PRODUCT,
  SET_PRODUCT_LIST,
  ADD_TO_CART,
  REMOVE_FROM_CART,
  EMPTY_CART,
} from "./type";
import {
  setProductList,
  addToCartSlice,
  removeFromCartSlice,
  emptyCartSlice,
} from "./ProductSlice";

function* getProduct() {
  let data = yield fetch("http://localhost:3500/products");
  data = yield data.json();

  yield put(setProductList(data));
}

function* addToCartSaga(action) {
  yield put(addToCartSlice(action.payload));
}

function* removeFromCartSaga(action) {
  yield put(removeFromCartSlice(action.payload));
}

function* emptyCartSaga(action) {
  yield put(emptyCartSlice(action.payload));
}

function* productSaga() {
  yield takeEvery(PRODUCT_LIST, getProduct);
  yield takeEvery(ADD_TO_CART, addToCartSaga);
  yield takeEvery(REMOVE_FROM_CART, removeFromCartSaga);
  yield takeEvery(EMPTY_CART, emptyCartSaga);
}

export default productSaga;
