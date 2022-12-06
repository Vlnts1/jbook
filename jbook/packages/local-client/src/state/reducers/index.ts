import { combineReducers } from 'redux';
import { bundlerReducer } from './bundlesReducer';
import { cellsReducer } from './cellsReducer';

export const reducers = combineReducers({
  cells: cellsReducer,
  bundles: bundlerReducer,
});

export type RootState = ReturnType<typeof reducers>;
