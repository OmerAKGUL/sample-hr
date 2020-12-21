import axios from 'axios';
import { ICrudGetAction, ICrudGetAllAction, ICrudPutAction, ICrudDeleteAction } from 'react-jhipster';

import { cleanEntity } from 'app/shared/util/entity-utils';
import { REQUEST, SUCCESS, FAILURE } from 'app/shared/reducers/action-type.util';

import { IMematchmethod, defaultValue } from 'app/shared/model/mematchmethod.model';

export const ACTION_TYPES = {
  FETCH_MEMATCHMETHOD_LIST: 'mematchmethod/FETCH_MEMATCHMETHOD_LIST',
  FETCH_MEMATCHMETHOD: 'mematchmethod/FETCH_MEMATCHMETHOD',
  CREATE_MEMATCHMETHOD: 'mematchmethod/CREATE_MEMATCHMETHOD',
  UPDATE_MEMATCHMETHOD: 'mematchmethod/UPDATE_MEMATCHMETHOD',
  DELETE_MEMATCHMETHOD: 'mematchmethod/DELETE_MEMATCHMETHOD',
  RESET: 'mematchmethod/RESET',
};

const initialState = {
  loading: false,
  errorMessage: null,
  entities: [] as ReadonlyArray<IMematchmethod>,
  entity: defaultValue,
  updating: false,
  updateSuccess: false,
};

export type MematchmethodState = Readonly<typeof initialState>;

// Reducer

export default (state: MematchmethodState = initialState, action): MematchmethodState => {
  switch (action.type) {
    case REQUEST(ACTION_TYPES.FETCH_MEMATCHMETHOD_LIST):
    case REQUEST(ACTION_TYPES.FETCH_MEMATCHMETHOD):
      return {
        ...state,
        errorMessage: null,
        updateSuccess: false,
        loading: true,
      };
    case REQUEST(ACTION_TYPES.CREATE_MEMATCHMETHOD):
    case REQUEST(ACTION_TYPES.UPDATE_MEMATCHMETHOD):
    case REQUEST(ACTION_TYPES.DELETE_MEMATCHMETHOD):
      return {
        ...state,
        errorMessage: null,
        updateSuccess: false,
        updating: true,
      };
    case FAILURE(ACTION_TYPES.FETCH_MEMATCHMETHOD_LIST):
    case FAILURE(ACTION_TYPES.FETCH_MEMATCHMETHOD):
    case FAILURE(ACTION_TYPES.CREATE_MEMATCHMETHOD):
    case FAILURE(ACTION_TYPES.UPDATE_MEMATCHMETHOD):
    case FAILURE(ACTION_TYPES.DELETE_MEMATCHMETHOD):
      return {
        ...state,
        loading: false,
        updating: false,
        updateSuccess: false,
        errorMessage: action.payload,
      };
    case SUCCESS(ACTION_TYPES.FETCH_MEMATCHMETHOD_LIST):
      return {
        ...state,
        loading: false,
        entities: action.payload.data,
      };
    case SUCCESS(ACTION_TYPES.FETCH_MEMATCHMETHOD):
      return {
        ...state,
        loading: false,
        entity: action.payload.data,
      };
    case SUCCESS(ACTION_TYPES.CREATE_MEMATCHMETHOD):
    case SUCCESS(ACTION_TYPES.UPDATE_MEMATCHMETHOD):
      return {
        ...state,
        updating: false,
        updateSuccess: true,
        entity: action.payload.data,
      };
    case SUCCESS(ACTION_TYPES.DELETE_MEMATCHMETHOD):
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

const apiUrl = 'api/mematchmethods';

// Actions

export const getEntities: ICrudGetAllAction<IMematchmethod> = (page, size, sort) => ({
  type: ACTION_TYPES.FETCH_MEMATCHMETHOD_LIST,
  payload: axios.get<IMematchmethod>(`${apiUrl}?cacheBuster=${new Date().getTime()}`),
});

export const getEntity: ICrudGetAction<IMematchmethod> = id => {
  const requestUrl = `${apiUrl}/${id}`;
  return {
    type: ACTION_TYPES.FETCH_MEMATCHMETHOD,
    payload: axios.get<IMematchmethod>(requestUrl),
  };
};

export const createEntity: ICrudPutAction<IMematchmethod> = entity => async dispatch => {
  const result = await dispatch({
    type: ACTION_TYPES.CREATE_MEMATCHMETHOD,
    payload: axios.post(apiUrl, cleanEntity(entity)),
  });
  dispatch(getEntities());
  return result;
};

export const updateEntity: ICrudPutAction<IMematchmethod> = entity => async dispatch => {
  const result = await dispatch({
    type: ACTION_TYPES.UPDATE_MEMATCHMETHOD,
    payload: axios.put(apiUrl, cleanEntity(entity)),
  });
  return result;
};

export const deleteEntity: ICrudDeleteAction<IMematchmethod> = id => async dispatch => {
  const requestUrl = `${apiUrl}/${id}`;
  const result = await dispatch({
    type: ACTION_TYPES.DELETE_MEMATCHMETHOD,
    payload: axios.delete(requestUrl),
  });
  dispatch(getEntities());
  return result;
};

export const reset = () => ({
  type: ACTION_TYPES.RESET,
});
