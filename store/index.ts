import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunkMiddleware from 'redux-thunk';
import reducer from '../reducers';

/**
 * @param {object} initialState
 * @param {boolean} options.isServer サーバー側かクライアント側かを示します。
 * @param {Request} options.req NodeJS Request オブジェクト（クライアントがサーバーからinitialStateを適用するときは設定されません）
 * @param {Request} options.res NodeJS Response オブジェクト（クライアントがサーバーからinitialStateを適用するときは設定されません）
 * @param {boolean} options.debug ユーザ定義デバッグモードパラメータ
 * @param {string} options.storeKey このキーは安全なHMRのためにグローバル名前空間にストアを保存するために使用されます
 */
export const initStore = (initialState, _options) => {
  return createStore(
    reducer,
    initialState,
    composeWithDevTools(applyMiddleware(thunkMiddleware)),
  );
};
