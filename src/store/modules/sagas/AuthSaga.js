import { all, takeLatest, call, put } from "redux-saga/effects";
import { Api } from '../../../Services/ApiUser';
import { SIGN_IN_REQUEST, SIGN_UP_REQUEST } from '../actionsTypes';
import { signInSuccess, signFailure } from '../actions/AuthActions';
import { Alert } from "react-native";
import { useNavigation } from '@react-navigation/native';

export function* signIn({ payload }) {

  try {
    const { email, password } = payload;

    const response = yield call(Api.post, "session", {
      email,
      password
    });

    const { token } = response.data;

    if (!token) {
      return;
    }

    Api.defaults.headers.Authorization = `Bearer ${token}`;

    yield put(signInSuccess(token));


  } catch (err) {

    yield put(signFailure());
  }
}
export function* register({ payload }) {
  try {
    const { name, email, password } = payload;
    const response = yield call(Api.post, "/users", {
      name,
      email,
      password
    });
    if (!response) {
      Alert.alert('Dados cadastrado com sucesso!');

      useNavigation().goBack();
    }
  } catch (err) {
    Alert.alert('Tente novamento!');
  }
}

export default all([
  takeLatest(SIGN_IN_REQUEST, signIn),
  takeLatest(SIGN_UP_REQUEST, register)
]);