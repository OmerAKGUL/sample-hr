import axios from 'axios';
import { ICrudGetAction, ICrudGetAllAction, ICrudPutAction, ICrudDeleteAction } from 'react-jhipster';

import { cleanEntity } from 'app/shared/util/entity-utils';
import { REQUEST, SUCCESS, FAILURE } from 'app/shared/reducers/action-type.util';

import { IMematchresultctx, defaultValue } from 'app/shared/model/mematchresultctx.model';

export const ACTION_TYPES = {
  FETCH_MEMATCHRESULTCTX_LIST: 'mematchresultctx/FETCH_MEMATCHRESULTCTX_LIST',
  FETCH_MEMATCHRESULTCTX: 'mematchresultctx/FETCH_MEMATCHRESULTCTX',
  CREATE_MEMATCHRESULTCTX: 'mematchresultctx/CREATE_MEMATCHRESULTCTX',
  UPDATE_MEMATCHRESULTCTX: 'mematchresultctx/UPDATE_MEMATCHRESULTCTX',
  DELETE_MEMATCHRESULTCTX: 'mematchresultctx/DELETE_MEMATCHRESULTCTX',
  RESET: 'mematchresultctx/RESET',
};

const initialState = {
  loading: false,
  errorMessage: null,
  entities: [] as ReadonlyArray<IMematchresultctx>,
  entity: defaultValue,
  updating: false,
  updateSuccess: false,
};

export type MematchresultctxState = Readonly<typeof initialState>;

// Reducer

export default (state: MematchresultctxState = initialState, action): MematchresultctxState => {
  switch (action.type) {
    case REQUEST(ACTION_TYPES.FETCH_MEMATCHRESULTCTX_LIST):
    case REQUEST(ACTION_TYPES.FETCH_MEMATCHRESULTCTX):
      return {
        ...state,
        errorMessage: null,
        updateSuccess: false,
        loading: true,
      };
    case REQUEST(ACTION_TYPES.CREATE_MEMATCHRESULTCTX):
    case REQUEST(ACTION_TYPES.UPDATE_MEMATCHRESULTCTX):
    case REQUEST(ACTION_TYPES.DELETE_MEMATCHRESULTCTX):
      return {
        ...state,
        errorMessage: null,
        updateSuccess: false,
        updating: true,
      };
    case FAILURE(ACTION_TYPES.FETCH_MEMATCHRESULTCTX_LIST):
    case FAILURE(ACTION_TYPES.FETCH_MEMATCHRESULTCTX):
    case FAILURE(ACTION_TYPES.CREATE_MEMATCHRESULTCTX):
    case FAILURE(ACTION_TYPES.UPDATE_MEMATCHRESULTCTX):
    case FAILURE(ACTION_TYPES.DELETE_MEMATCHRESULTCTX):
      return {
        ...state,
        loading: false,
        updating: false,
        updateSuccess: false,
        errorMessage: action.payload,
      };
    case SUCCESS(ACTION_TYPES.FETCH_MEMATCHRESULTCTX_LIST):
      return {
        ...state,
        loading: false,
        entities: action.payload.data,
      };
    case SUCCESS(ACTION_TYPES.FETCH_MEMATCHRESULTCTX):
      return {
        ...state,
        loading: false,
        entity: action.payload.data,
      };
    case SUCCESS(ACTION_TYPES.CREATE_MEMATCHRESULTCTX):
    case SUCCESS(ACTION_TYPES.UPDATE_MEMATCHRESULTCTX):
      return {
        ...state,
        updating: false,
        updateSuccess: true,
        entity: action.payload.data,
      };
    case SUCCESS(ACTION_TYPES.DELETE_MEMATCHRESULTCTX):
      return {
        ...state,
        updating: false,
        updateSuccess: true,
        entity: {},
      };
    case ACTION_TYPES.RESET:
      return {
        ...initialState,
      };
    default:
      return state;
  }
};

const apiUrl = 'api/mematchresultctxes';

// Actions

export const getEntities: ICrudGetAllAction<IMematchresultctx> = (page, size, sort) => ({
  type: ACTION_TYPES.FETCH_MEMATCHRESULTCTX_LIST,
  payload: axios.get<IMematchresultctx>(`${apiUrl}?cacheBuster=${new Date().getTime()}`),
});

export const getEntity: ICrudGetAction<IMematchresultctx> = id => {
  const requestUrl = `${apiUrl}/${id}`;
  return {
    type: ACTION_TYPES.FETCH_MEMATCHRESULTCTX,
    payload: axios.get<IMematchresultctx>(requestUrl),
  };
};

export const createEntity: ICrudPutAction<IMematchresultctx> = entity => async dispatch => {
  const result = await dispatch({
    type: ACTION_TYPES.CREATE_MEMATCHRESULTCTX,
    payload: axios.post(apiUrl, cleanEntity(entity)),
  });
  dispatch(getEntities());
  return result;
};

export const updateEntity: ICrudPutAction<IMematchresultctx> = entity => async dispatch => {
  const result = await dispatch({
    type: ACTION_TYPES.UPDATE_MEMATCHRESULTCTX,
    payload: axios.put(apiUrl, cleanEntity(entity)),
  });
  return result;
};

export const deleteEntity: ICrudDeleteAction<IMematchresultctx> = id => async dispatch => {
  const requestUrl = `${apiUrl}/${id}`;
  const result = await dispatch({
    type: ACTION_TYPES.DELETE_MEMATCHRESULTCTX,
    payload: axios.delete(requestUrl),
  });
  dispatch(getEntities());
  return result;
};

export const reset = () => ({
  type: ACTION_TYPES.RESET,
});
