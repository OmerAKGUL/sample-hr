import axios from 'axios';
import { ICrudGetAction, ICrudGetAllAction, ICrudPutAction, ICrudDeleteAction } from 'react-jhipster';

import { cleanEntity } from 'app/shared/util/entity-utils';
import { REQUEST, SUCCESS, FAILURE } from 'app/shared/reducers/action-type.util';

import { IMemethodparam, defaultValue } from 'app/shared/model/memethodparam.model';

export const ACTION_TYPES = {
  FETCH_MEMETHODPARAM_LIST: 'memethodparam/FETCH_MEMETHODPARAM_LIST',
  FETCH_MEMETHODPARAM: 'memethodparam/FETCH_MEMETHODPARAM',
  CREATE_MEMETHODPARAM: 'memethodparam/CREATE_MEMETHODPARAM',
  UPDATE_MEMETHODPARAM: 'memethodparam/UPDATE_MEMETHODPARAM',
  DELETE_MEMETHODPARAM: 'memethodparam/DELETE_MEMETHODPARAM',
  RESET: 'memethodparam/RESET',
};

const initialState = {
  loading: false,
  errorMessage: null,
  entities: [] as ReadonlyArray<IMemethodparam>,
  entity: defaultValue,
  updating: false,
  updateSuccess: false,
};

export type MemethodparamState = Readonly<typeof initialState>;

// Reducer

export default (state: MemethodparamState = initialState, action): MemethodparamState => {
  switch (action.type) {
    case REQUEST(ACTION_TYPES.FETCH_MEMETHODPARAM_LIST):
    case REQUEST(ACTION_TYPES.FETCH_MEMETHODPARAM):
      return {
        ...state,
        errorMessage: null,
        updateSuccess: false,
        loading: true,
      };
    case REQUEST(ACTION_TYPES.CREATE_MEMETHODPARAM):
    case REQUEST(ACTION_TYPES.UPDATE_MEMETHODPARAM):
    case REQUEST(ACTION_TYPES.DELETE_MEMETHODPARAM):
      return {
        ...state,
        errorMessage: null,
        updateSuccess: false,
        updating: true,
      };
    case FAILURE(ACTION_TYPES.FETCH_MEMETHODPARAM_LIST):
    case FAILURE(ACTION_TYPES.FETCH_MEMETHODPARAM):
    case FAILURE(ACTION_TYPES.CREATE_MEMETHODPARAM):
    case FAILURE(ACTION_TYPES.UPDATE_MEMETHODPARAM):
    case FAILURE(ACTION_TYPES.DELETE_MEMETHODPARAM):
      return {
        ...state,
        loading: false,
        updating: false,
        updateSuccess: false,
        errorMessage: action.payload,
      };
    case SUCCESS(ACTION_TYPES.FETCH_MEMETHODPARAM_LIST):
      return {
        ...state,
        loading: false,
        entities: action.payload.data,
      };
    case SUCCESS(ACTION_TYPES.FETCH_MEMETHODPARAM):
      return {
        ...state,
        loading: false,
        entity: action.payload.data,
      };
    case SUCCESS(ACTION_TYPES.CREATE_MEMETHODPARAM):
    case SUCCESS(ACTION_TYPES.UPDATE_MEMETHODPARAM):
      return {
        ...state,
        updating: false,
        updateSuccess: true,
        entity: action.payload.data,
      };
    case SUCCESS(ACTION_TYPES.DELETE_MEMETHODPARAM):
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

const apiUrl = 'api/memethodparams';

// Actions

export const getEntities: ICrudGetAllAction<IMemethodparam> = (page, size, sort) => ({
  type: ACTION_TYPES.FETCH_MEMETHODPARAM_LIST,
  payload: axios.get<IMemethodparam>(`${apiUrl}?cacheBuster=${new Date().getTime()}`),
});

export const getEntity: ICrudGetAction<IMemethodparam> = id => {
  const requestUrl = `${apiUrl}/${id}`;
  return {
    type: ACTION_TYPES.FETCH_MEMETHODPARAM,
    payload: axios.get<IMemethodparam>(requestUrl),
  };
};

export const createEntity: ICrudPutAction<IMemethodparam> = entity => async dispatch => {
  const result = await dispatch({
    type: ACTION_TYPES.CREATE_MEMETHODPARAM,
    payload: axios.post(apiUrl, cleanEntity(entity)),
  });
  dispatch(getEntities());
  return result;
};

export const updateEntity: ICrudPutAction<IMemethodparam> = entity => async dispatch => {
  const result = await dispatch({
    type: ACTION_TYPES.UPDATE_MEMETHODPARAM,
    payload: axios.put(apiUrl, cleanEntity(entity)),
  });
  return result;
};

export const deleteEntity: ICrudDeleteAction<IMemethodparam> = id => async dispatch => {
  const requestUrl = `${apiUrl}/${id}`;
  const result = await dispatch({
    type: ACTION_TYPES.DELETE_MEMETHODPARAM,
    payload: axios.delete(requestUrl),
  });
  dispatch(getEntities());
  return result;
};

export const reset = () => ({
  type: ACTION_TYPES.RESET,
});
