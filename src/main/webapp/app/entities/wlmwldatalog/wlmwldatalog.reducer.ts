import axios from 'axios';
import { ICrudGetAction, ICrudGetAllAction, ICrudPutAction, ICrudDeleteAction } from 'react-jhipster';

import { cleanEntity } from 'app/shared/util/entity-utils';
import { REQUEST, SUCCESS, FAILURE } from 'app/shared/reducers/action-type.util';

import { IWlmwldatalog, defaultValue } from 'app/shared/model/wlmwldatalog.model';

export const ACTION_TYPES = {
  FETCH_WLMWLDATALOG_LIST: 'wlmwldatalog/FETCH_WLMWLDATALOG_LIST',
  FETCH_WLMWLDATALOG: 'wlmwldatalog/FETCH_WLMWLDATALOG',
  CREATE_WLMWLDATALOG: 'wlmwldatalog/CREATE_WLMWLDATALOG',
  UPDATE_WLMWLDATALOG: 'wlmwldatalog/UPDATE_WLMWLDATALOG',
  DELETE_WLMWLDATALOG: 'wlmwldatalog/DELETE_WLMWLDATALOG',
  RESET: 'wlmwldatalog/RESET',
};

const initialState = {
  loading: false,
  errorMessage: null,
  entities: [] as ReadonlyArray<IWlmwldatalog>,
  entity: defaultValue,
  updating: false,
  updateSuccess: false,
};

export type WlmwldatalogState = Readonly<typeof initialState>;

// Reducer

export default (state: WlmwldatalogState = initialState, action): WlmwldatalogState => {
  switch (action.type) {
    case REQUEST(ACTION_TYPES.FETCH_WLMWLDATALOG_LIST):
    case REQUEST(ACTION_TYPES.FETCH_WLMWLDATALOG):
      return {
        ...state,
        errorMessage: null,
        updateSuccess: false,
        loading: true,
      };
    case REQUEST(ACTION_TYPES.CREATE_WLMWLDATALOG):
    case REQUEST(ACTION_TYPES.UPDATE_WLMWLDATALOG):
    case REQUEST(ACTION_TYPES.DELETE_WLMWLDATALOG):
      return {
        ...state,
        errorMessage: null,
        updateSuccess: false,
        updating: true,
      };
    case FAILURE(ACTION_TYPES.FETCH_WLMWLDATALOG_LIST):
    case FAILURE(ACTION_TYPES.FETCH_WLMWLDATALOG):
    case FAILURE(ACTION_TYPES.CREATE_WLMWLDATALOG):
    case FAILURE(ACTION_TYPES.UPDATE_WLMWLDATALOG):
    case FAILURE(ACTION_TYPES.DELETE_WLMWLDATALOG):
      return {
        ...state,
        loading: false,
        updating: false,
        updateSuccess: false,
        errorMessage: action.payload,
      };
    case SUCCESS(ACTION_TYPES.FETCH_WLMWLDATALOG_LIST):
      return {
        ...state,
        loading: false,
        entities: action.payload.data,
      };
    case SUCCESS(ACTION_TYPES.FETCH_WLMWLDATALOG):
      return {
        ...state,
        loading: false,
        entity: action.payload.data,
      };
    case SUCCESS(ACTION_TYPES.CREATE_WLMWLDATALOG):
    case SUCCESS(ACTION_TYPES.UPDATE_WLMWLDATALOG):
      return {
        ...state,
        updating: false,
        updateSuccess: true,
        entity: action.payload.data,
      };
    case SUCCESS(ACTION_TYPES.DELETE_WLMWLDATALOG):
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

const apiUrl = 'api/wlmwldatalogs';

// Actions

export const getEntities: ICrudGetAllAction<IWlmwldatalog> = (page, size, sort) => ({
  type: ACTION_TYPES.FETCH_WLMWLDATALOG_LIST,
  payload: axios.get<IWlmwldatalog>(`${apiUrl}?cacheBuster=${new Date().getTime()}`),
});

export const getEntity: ICrudGetAction<IWlmwldatalog> = id => {
  const requestUrl = `${apiUrl}/${id}`;
  return {
    type: ACTION_TYPES.FETCH_WLMWLDATALOG,
    payload: axios.get<IWlmwldatalog>(requestUrl),
  };
};

export const createEntity: ICrudPutAction<IWlmwldatalog> = entity => async dispatch => {
  const result = await dispatch({
    type: ACTION_TYPES.CREATE_WLMWLDATALOG,
    payload: axios.post(apiUrl, cleanEntity(entity)),
  });
  dispatch(getEntities());
  return result;
};

export const updateEntity: ICrudPutAction<IWlmwldatalog> = entity => async dispatch => {
  const result = await dispatch({
    type: ACTION_TYPES.UPDATE_WLMWLDATALOG,
    payload: axios.put(apiUrl, cleanEntity(entity)),
  });
  return result;
};

export const deleteEntity: ICrudDeleteAction<IWlmwldatalog> = id => async dispatch => {
  const requestUrl = `${apiUrl}/${id}`;
  const result = await dispatch({
    type: ACTION_TYPES.DELETE_WLMWLDATALOG,
    payload: axios.delete(requestUrl),
  });
  dispatch(getEntities());
  return result;
};

export const reset = () => ({
  type: ACTION_TYPES.RESET,
});
