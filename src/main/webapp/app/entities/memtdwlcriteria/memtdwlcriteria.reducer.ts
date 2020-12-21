import axios from 'axios';
import { ICrudGetAction, ICrudGetAllAction, ICrudPutAction, ICrudDeleteAction } from 'react-jhipster';

import { cleanEntity } from 'app/shared/util/entity-utils';
import { REQUEST, SUCCESS, FAILURE } from 'app/shared/reducers/action-type.util';

import { IMemtdwlcriteria, defaultValue } from 'app/shared/model/memtdwlcriteria.model';

export const ACTION_TYPES = {
  FETCH_MEMTDWLCRITERIA_LIST: 'memtdwlcriteria/FETCH_MEMTDWLCRITERIA_LIST',
  FETCH_MEMTDWLCRITERIA: 'memtdwlcriteria/FETCH_MEMTDWLCRITERIA',
  CREATE_MEMTDWLCRITERIA: 'memtdwlcriteria/CREATE_MEMTDWLCRITERIA',
  UPDATE_MEMTDWLCRITERIA: 'memtdwlcriteria/UPDATE_MEMTDWLCRITERIA',
  DELETE_MEMTDWLCRITERIA: 'memtdwlcriteria/DELETE_MEMTDWLCRITERIA',
  RESET: 'memtdwlcriteria/RESET',
};

const initialState = {
  loading: false,
  errorMessage: null,
  entities: [] as ReadonlyArray<IMemtdwlcriteria>,
  entity: defaultValue,
  updating: false,
  updateSuccess: false,
};

export type MemtdwlcriteriaState = Readonly<typeof initialState>;

// Reducer

export default (state: MemtdwlcriteriaState = initialState, action): MemtdwlcriteriaState => {
  switch (action.type) {
    case REQUEST(ACTION_TYPES.FETCH_MEMTDWLCRITERIA_LIST):
    case REQUEST(ACTION_TYPES.FETCH_MEMTDWLCRITERIA):
      return {
        ...state,
        errorMessage: null,
        updateSuccess: false,
        loading: true,
      };
    case REQUEST(ACTION_TYPES.CREATE_MEMTDWLCRITERIA):
    case REQUEST(ACTION_TYPES.UPDATE_MEMTDWLCRITERIA):
    case REQUEST(ACTION_TYPES.DELETE_MEMTDWLCRITERIA):
      return {
        ...state,
        errorMessage: null,
        updateSuccess: false,
        updating: true,
      };
    case FAILURE(ACTION_TYPES.FETCH_MEMTDWLCRITERIA_LIST):
    case FAILURE(ACTION_TYPES.FETCH_MEMTDWLCRITERIA):
    case FAILURE(ACTION_TYPES.CREATE_MEMTDWLCRITERIA):
    case FAILURE(ACTION_TYPES.UPDATE_MEMTDWLCRITERIA):
    case FAILURE(ACTION_TYPES.DELETE_MEMTDWLCRITERIA):
      return {
        ...state,
        loading: false,
        updating: false,
        updateSuccess: false,
        errorMessage: action.payload,
      };
    case SUCCESS(ACTION_TYPES.FETCH_MEMTDWLCRITERIA_LIST):
      return {
        ...state,
        loading: false,
        entities: action.payload.data,
      };
    case SUCCESS(ACTION_TYPES.FETCH_MEMTDWLCRITERIA):
      return {
        ...state,
        loading: false,
        entity: action.payload.data,
      };
    case SUCCESS(ACTION_TYPES.CREATE_MEMTDWLCRITERIA):
    case SUCCESS(ACTION_TYPES.UPDATE_MEMTDWLCRITERIA):
      return {
        ...state,
        updating: false,
        updateSuccess: true,
        entity: action.payload.data,
      };
    case SUCCESS(ACTION_TYPES.DELETE_MEMTDWLCRITERIA):
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

const apiUrl = 'api/memtdwlcriteria';

// Actions

export const getEntities: ICrudGetAllAction<IMemtdwlcriteria> = (page, size, sort) => ({
  type: ACTION_TYPES.FETCH_MEMTDWLCRITERIA_LIST,
  payload: axios.get<IMemtdwlcriteria>(`${apiUrl}?cacheBuster=${new Date().getTime()}`),
});

export const getEntity: ICrudGetAction<IMemtdwlcriteria> = id => {
  const requestUrl = `${apiUrl}/${id}`;
  return {
    type: ACTION_TYPES.FETCH_MEMTDWLCRITERIA,
    payload: axios.get<IMemtdwlcriteria>(requestUrl),
  };
};

export const createEntity: ICrudPutAction<IMemtdwlcriteria> = entity => async dispatch => {
  const result = await dispatch({
    type: ACTION_TYPES.CREATE_MEMTDWLCRITERIA,
    payload: axios.post(apiUrl, cleanEntity(entity)),
  });
  dispatch(getEntities());
  return result;
};

export const updateEntity: ICrudPutAction<IMemtdwlcriteria> = entity => async dispatch => {
  const result = await dispatch({
    type: ACTION_TYPES.UPDATE_MEMTDWLCRITERIA,
    payload: axios.put(apiUrl, cleanEntity(entity)),
  });
  return result;
};

export const deleteEntity: ICrudDeleteAction<IMemtdwlcriteria> = id => async dispatch => {
  const requestUrl = `${apiUrl}/${id}`;
  const result = await dispatch({
    type: ACTION_TYPES.DELETE_MEMTDWLCRITERIA,
    payload: axios.delete(requestUrl),
  });
  dispatch(getEntities());
  return result;
};

export const reset = () => ({
  type: ACTION_TYPES.RESET,
});
