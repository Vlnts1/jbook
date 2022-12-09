import { ActionType } from '../action-types';
import { Cell, CellTypes } from '../cell';

export type Direction = 'up' | 'down';

export type MoveCellAction = {
  type: ActionType.MOVE_CELL;
  payload: {
    id: string;
    direction: Direction;
  };
};

export type DeleteCellAction = {
  type: ActionType.DELETE_CELL;
  payload: string;
};

export type InsertCellAfterAction = {
  type: ActionType.INSERT_CELL_AFTER;
  payload: {
    id: string | null;
    type: CellTypes;
  };
};

export type UpdateCellAction = {
  type: ActionType.UPDATE_CELL;
  payload: {
    id: string;
    content: string;
  };
};

export type BundleStartAction = {
  type: ActionType.BUNDLE_START;
  payload: {
    cellId: string;
  };
};

export type BundleCompleteAction = {
  type: ActionType.BUNDLE_COMPLETE;
  payload: {
    cellId: string;
    bundle: {
      code: string;
      err: string;
    };
  };
};

export type FetchCellsAction = {
  type: ActionType.FETCH_CELLS;
};

export type FetchCellsCompleteAction = {
  type: ActionType.FETCH_CELLS_COMPLETE;
  payload: Cell[];
};

export type FetchCellsErrorAction = {
  type: ActionType.FETCH_CELLS_ERROR;
  payload: string;
};

export type SaveCellsErrorAction = {
  type: ActionType.SAVE_CELLS_ERROR;
  payload: string;
};

export type Action =
  | MoveCellAction
  | DeleteCellAction
  | InsertCellAfterAction
  | UpdateCellAction
  | BundleStartAction
  | BundleCompleteAction
  | FetchCellsAction
  | FetchCellsCompleteAction
  | FetchCellsErrorAction
  | SaveCellsErrorAction;
