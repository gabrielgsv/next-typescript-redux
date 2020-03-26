import thunkMiddleware from 'redux-thunk';
import {
  createStore,
  applyMiddleware,
  Store as ReduxStore,
} from 'redux';
import reducers from './reducers';

const initialState = {}

const dev: boolean = process.env.NODE_ENV !== 'production';

const { composeWithDevTools } = dev ? require('redux-devtools-extension') : require('redux-devtools-extension/logOnlyInProduction');

export type Store = ReduxStore<typeof initialState>;

export type AppState = ReturnType<typeof reducers>

export default (state = initialState): Store => {
  const middlewares = dev ? [thunkMiddleware] : [];
  return createStore(reducers, state, composeWithDevTools(applyMiddleware(...middlewares)));
};