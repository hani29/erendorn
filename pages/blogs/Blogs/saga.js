import { put, takeLatest } from "redux-saga/effects";

import { actionTypes, updateBlogsDetails } from "./actions";

function* fetchBlogsDetails() {
  const res = yield fetch("http://localhost:1337/blogs");
  const blogs = yield res.json();
  yield put(updateBlogsDetails(blogs));
}

export default [takeLatest(actionTypes.FETCH_BLOGS_DETAILS, fetchBlogsDetails)];
