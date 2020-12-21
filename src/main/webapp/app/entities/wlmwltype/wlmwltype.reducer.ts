import axios from 'axios';
import { ICrudGetAction, ICrudGetAllAction, ICrudPutAction, ICrudDeleteAction } from 'react-jhipster';

import { cleanEntity } from 'app/shared/util/entity-utils';
import { REQUEST, SUCCESS, FAILURE } from 'app/shared/reducers/action-type.util';

import { IWlmwltype, defaultValue } from 'app/shared/model/wlmwltype.model';

export const ACTION_TYPES = {
  FETCH_WLMWLTYPE_LIST: 'wlmwltype/FETCH_WLMWLTYPE_LIST',
  FETCH_WLMWLTYPE: 'wlmwltype/FETCH_WLMWLTYPE',
  CREATE_WLMWLTYPE: 'wlmwltype/CREATE_WLMWLTYPE',
  UPDATE_WLMWLTYPE: 'wlmwltype/UPDATE_WLMWLTYPE',
  DELETE_WLMWLTYPE: 'wlmwltype/DELETE_WLMWLTYPE',
  RESET: 'wlmwltype/RESET',
};

const initialState = {
  loading: false,
  errorMessage: null,
  entities: [] as ReadonlyArray<IWlmwltype>,
  entity: defaultValue,
  updating: false,
  updateSuccess: false,
};

export type WlmwltypeState = Readonly<typeof initialState>;

// Reducer

export default (state: WlmwltypeState = initialState, action): WlmwltypeState => {
  switch (action.type) {
    case REQUEST(ACTION_TYPES.FETCH_WLMWLTYPE_LIST):
    case REQUEST(ACTION_TYPES.FETCH_WLMWLTYPE):
      return {
        ...state,
        errorMessage: null,
        updateSuccess: false,
        loading: true,
      };
    case REQUEST(ACTION_TYPES.CREATE_WLMWLTYPE):
    case REQUEST(ACTION_TYPES.UPDATE_WLMWLTYPE):
    case REQUEST(ACTION_TYPES.DELETE_WLMWLTYPE):
      return {
        ...state,
        errorMessage: null,
        updateSuccess: false,
        updating: true,
      };
    case FAILURE(ACTION_TYPES.FETCH_WLMWLTYPE_LIST):
    case FAILURE(ACTION_TYPES.FETCH_WLMWLTYPE):
    case FAILURE(ACTION_TYPES.CREATE_WLMWLTYPE):
    case FAILURE(ACTION_TYPES.UPDATE_WLMWLTYPE):
    case FAILURE(ACTION_TYPES.DELETE_WLMWLTYPE):
      return {
        ...state,
        loading: false,
        updating: false,
        updateSuccess: false,
        errorMessage: action.payload,
      };
    case SUCCESS(ACTION_TYPES.FETCH_WLMWLTYPE_LIST):
      return {
        ...state,
        loading: false,
        entities: action.payload.data,
      };
    case SUCCESS(ACTION_TYPES.FETCH_WLMWLTYPE):
      return {
        ...state,
        loading: false,
        entity: action.payload.data,
      };
    case SUCCESS(ACTION_TYPES.CREATE_WLMWLTYPE):
    case SUCCESS(ACTION_TYPES.UPDATE_WLMWLTYPE):
      return {
        ...state,
        updating: false,
        updateSuccess: true,
        entity: action.payload.data,
      };
    case SUCCESS(ACTION_TYPES.DELETE_WLMWLTYPE):
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

const apiUrl = 'api/wlmwltypes';

// Actions

export const getEntities: ICrudGetAllAction<IWlmwltype> = (page, size, sort) => ({
  type: ACTION_TYPES.FETCH_WLMWLTYPE_LIST,
  payload: axios.get<IWlmwltype>(`${apiUrl}?cacheBuster=${new Date().getTime()}`),
});

export const getEntity: ICrudGetAction<IWlmwltype> = id => {
  const requestUrl = `${apiUrl}/${id}`;
  return {
    type: ACTION_TYPES.FETCH_WLMWLTYPE,
    payload: axios.get<IWlmwltype>(requestUrl),
  };
};

export const createEntity: ICrudPutAction<IWlmwltype> = entity => async dispatch => {
  const result = await dispatch({
    type: ACTION_TYPES.CREATE_WLMWLTYPE,
    payload: axios.post(apiUrl, cleanEntity(entity)),
  });
  dispatch(getEntities());
  return result;
};

export const updateEntity: ICrudPutAction<IWlmwltype> = entity => async dispatch => {
  const result = await dispatch({
    type: ACTION_TYPES.UPDATE_WLMWLTYPE,
    payload: axios.put(apiUrl, cleanEntity(entity)),
  });
  return result;
};

export const deleteEntity: ICrudDeleteAction<IWlmwltype> = id => async dispatch => {
  const requestUrl = `${apiUrl}/${id}`;
  const result = await dispatch({
    type: ACTION_TYPES.DELETE_WLMWLTYPE,
    payload: axios.delete(requestUrl),
  });
  dispatch(getEntities());
  return result;
};

export const reset = () => ({
  type: ACTION_TYPES.RESET,
});
