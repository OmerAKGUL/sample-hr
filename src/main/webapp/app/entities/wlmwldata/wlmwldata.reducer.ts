import axios from 'axios';
import { ICrudGetAction, ICrudGetAllAction, ICrudPutAction, ICrudDeleteAction } from 'react-jhipster';

import { cleanEntity } from 'app/shared/util/entity-utils';
import { REQUEST, SUCCESS, FAILURE } from 'app/shared/reducers/action-type.util';

import { IWlmwldata, defaultValue } from 'app/shared/model/wlmwldata.model';

export const ACTION_TYPES = {
  FETCH_WLMWLDATA_LIST: 'wlmwldata/FETCH_WLMWLDATA_LIST',
  FETCH_WLMWLDATA: 'wlmwldata/FETCH_WLMWLDATA',
  CREATE_WLMWLDATA: 'wlmwldata/CREATE_WLMWLDATA',
  UPDATE_WLMWLDATA: 'wlmwldata/UPDATE_WLMWLDATA',
  DELETE_WLMWLDATA: 'wlmwldata/DELETE_WLMWLDATA',
  RESET: 'wlmwldata/RESET',
};

const initialState = {
  loading: false,
  errorMessage: null,
  entities: [] as ReadonlyArray<IWlmwldata>,
  entity: defaultValue,
  updating: false,
  totalItems: 0,
  updateSuccess: false,
};

export type WlmwldataState = Readonly<typeof initialState>;

// Reducer

export default (state: WlmwldataState = initialState, action): WlmwldataState => {
  switch (action.type) {
    case REQUEST(ACTION_TYPES.FETCH_WLMWLDATA_LIST):
    case REQUEST(ACTION_TYPES.FETCH_WLMWLDATA):
      return {
        ...state,
        errorMessage: null,
        updateSuccess: false,
        loading: true,
      };
    case REQUEST(ACTION_TYPES.CREATE_WLMWLDATA):
    case REQUEST(ACTION_TYPES.UPDATE_WLMWLDATA):
    case REQUEST(ACTION_TYPES.DELETE_WLMWLDATA):
      return {
        ...state,
        errorMessage: null,
        updateSuccess: false,
        updating: true,
      };
    case FAILURE(ACTION_TYPES.FETCH_WLMWLDATA_LIST):
    case FAILURE(ACTION_TYPES.FETCH_WLMWLDATA):
    case FAILURE(ACTION_TYPES.CREATE_WLMWLDATA):
    case FAILURE(ACTION_TYPES.UPDATE_WLMWLDATA):
    case FAILURE(ACTION_TYPES.DELETE_WLMWLDATA):
      return {
        ...state,
        loading: false,
        updating: false,
        updateSuccess: false,
        errorMessage: action.payload,
      };
    case SUCCESS(ACTION_TYPES.FETCH_WLMWLDATA_LIST):
      return {
        ...state,
        loading: false,
        entities: action.payload.data,
        totalItems: parseInt(action.payload.headers['x-total-count'], 10),
      };
    case SUCCESS(ACTION_TYPES.FETCH_WLMWLDATA):
      return {
        ...state,
        loading: false,
        entity: action.payload.data,
      };
    case SUCCESS(ACTION_TYPES.CREATE_WLMWLDATA):
    case SUCCESS(ACTION_TYPES.UPDATE_WLMWLDATA):
      return {
        ...state,
        updating: false,
        updateSuccess: true,
        entity: action.payload.data,
      };
    case SUCCESS(ACTION_TYPES.DELETE_WLMWLDATA):
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

const apiUrl = 'api/wlmwldata';

// Actions

export const getEntities: ICrudGetAllAction<IWlmwldata> = (page, size, sort) => {
  const requestUrl = `${apiUrl}${sort ? `?page=${page}&size=${size}&sort=${sort}` : ''}`;
  return {
    type: ACTION_TYPES.FETCH_WLMWLDATA_LIST,
    payload: axios.get<IWlmwldata>(`${requestUrl}${sort ? '&' : '?'}cacheBuster=${new Date().getTime()}`),
  };
};

export const getEntity: ICrudGetAction<IWlmwldata> = id => {
  const requestUrl = `${apiUrl}/${id}`;
  return {
    type: ACTION_TYPES.FETCH_WLMWLDATA,
    payload: axios.get<IWlmwldata>(requestUrl),
  };
};

export const createEntity: ICrudPutAction<IWlmwldata> = entity => async dispatch => {
  const result = await dispatch({
    type: ACTION_TYPES.CREATE_WLMWLDATA,
    payload: axios.post(apiUrl, cleanEntity(entity)),
  });
  dispatch(getEntities());
  return result;
};

export const updateEntity: ICrudPutAction<IWlmwldata> = entity => async dispatch => {
  const result = await dispatch({
    type: ACTION_TYPES.UPDATE_WLMWLDATA,
    payload: axios.put(apiUrl, cleanEntity(entity)),
  });
  return result;
};

export const deleteEntity: ICrudDeleteAction<IWlmwldata> = id => async dispatch => {
  const requestUrl = `${apiUrl}/${id}`;
  const result = await dispatch({
    type: ACTION_TYPES.DELETE_WLMWLDATA,
    payload: axios.delete(requestUrl),
  });
  dispatch(getEntities());
  return result;
};

export const reset = () => ({
  type: ACTION_TYPES.RESET,
});
