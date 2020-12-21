import axios from 'axios';
import { ICrudGetAction, ICrudGetAllAction, ICrudPutAction, ICrudDeleteAction } from 'react-jhipster';

import { cleanEntity } from 'app/shared/util/entity-utils';
import { REQUEST, SUCCESS, FAILURE } from 'app/shared/reducers/action-type.util';

import { IItxtxntype, defaultValue } from 'app/shared/model/itxtxntype.model';

export const ACTION_TYPES = {
  FETCH_ITXTXNTYPE_LIST: 'itxtxntype/FETCH_ITXTXNTYPE_LIST',
  FETCH_ITXTXNTYPE: 'itxtxntype/FETCH_ITXTXNTYPE',
  CREATE_ITXTXNTYPE: 'itxtxntype/CREATE_ITXTXNTYPE',
  UPDATE_ITXTXNTYPE: 'itxtxntype/UPDATE_ITXTXNTYPE',
  DELETE_ITXTXNTYPE: 'itxtxntype/DELETE_ITXTXNTYPE',
  RESET: 'itxtxntype/RESET',
};

const initialState = {
  loading: false,
  errorMessage: null,
  entities: [] as ReadonlyArray<IItxtxntype>,
  entity: defaultValue,
  updating: false,
  updateSuccess: false,
};

export type ItxtxntypeState = Readonly<typeof initialState>;

// Reducer

export default (state: ItxtxntypeState = initialState, action): ItxtxntypeState => {
  switch (action.type) {
    case REQUEST(ACTION_TYPES.FETCH_ITXTXNTYPE_LIST):
    case REQUEST(ACTION_TYPES.FETCH_ITXTXNTYPE):
      return {
        ...state,
        errorMessage: null,
        updateSuccess: false,
        loading: true,
      };
    case REQUEST(ACTION_TYPES.CREATE_ITXTXNTYPE):
    case REQUEST(ACTION_TYPES.UPDATE_ITXTXNTYPE):
    case REQUEST(ACTION_TYPES.DELETE_ITXTXNTYPE):
      return {
        ...state,
        errorMessage: null,
        updateSuccess: false,
        updating: true,
      };
    case FAILURE(ACTION_TYPES.FETCH_ITXTXNTYPE_LIST):
    case FAILURE(ACTION_TYPES.FETCH_ITXTXNTYPE):
    case FAILURE(ACTION_TYPES.CREATE_ITXTXNTYPE):
    case FAILURE(ACTION_TYPES.UPDATE_ITXTXNTYPE):
    case FAILURE(ACTION_TYPES.DELETE_ITXTXNTYPE):
      return {
        ...state,
        loading: false,
        updating: false,
        updateSuccess: false,
        errorMessage: action.payload,
      };
    case SUCCESS(ACTION_TYPES.FETCH_ITXTXNTYPE_LIST):
      return {
        ...state,
        loading: false,
        entities: action.payload.data,
      };
    case SUCCESS(ACTION_TYPES.FETCH_ITXTXNTYPE):
      return {
        ...state,
        loading: false,
        entity: action.payload.data,
      };
    case SUCCESS(ACTION_TYPES.CREATE_ITXTXNTYPE):
    case SUCCESS(ACTION_TYPES.UPDATE_ITXTXNTYPE):
      return {
        ...state,
        updating: false,
        updateSuccess: true,
        entity: action.payload.data,
      };
    case SUCCESS(ACTION_TYPES.DELETE_ITXTXNTYPE):
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

const apiUrl = 'api/itxtxntypes';

// Actions

export const getEntities: ICrudGetAllAction<IItxtxntype> = (page, size, sort) => ({
  type: ACTION_TYPES.FETCH_ITXTXNTYPE_LIST,
  payload: axios.get<IItxtxntype>(`${apiUrl}?cacheBuster=${new Date().getTime()}`),
});

export const getEntity: ICrudGetAction<IItxtxntype> = id => {
  const requestUrl = `${apiUrl}/${id}`;
  return {
    type: ACTION_TYPES.FETCH_ITXTXNTYPE,
    payload: axios.get<IItxtxntype>(requestUrl),
  };
};

export const createEntity: ICrudPutAction<IItxtxntype> = entity => async dispatch => {
  const result = await dispatch({
    type: ACTION_TYPES.CREATE_ITXTXNTYPE,
    payload: axios.post(apiUrl, cleanEntity(entity)),
  });
  dispatch(getEntities());
  return result;
};

export const updateEntity: ICrudPutAction<IItxtxntype> = entity => async dispatch => {
  const result = await dispatch({
    type: ACTION_TYPES.UPDATE_ITXTXNTYPE,
    payload: axios.put(apiUrl, cleanEntity(entity)),
  });
  return result;
};

export const deleteEntity: ICrudDeleteAction<IItxtxntype> = id => async dispatch => {
  const requestUrl = `${apiUrl}/${id}`;
  const result = await dispatch({
    type: ACTION_TYPES.DELETE_ITXTXNTYPE,
    payload: axios.delete(requestUrl),
  });
  dispatch(getEntities());
  return result;
};

export const reset = () => ({
  type: ACTION_TYPES.RESET,
});
