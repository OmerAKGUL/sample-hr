import axios from 'axios';
import { ICrudGetAction, ICrudGetAllAction, ICrudPutAction, ICrudDeleteAction } from 'react-jhipster';

import { cleanEntity } from 'app/shared/util/entity-utils';
import { REQUEST, SUCCESS, FAILURE } from 'app/shared/reducers/action-type.util';

import { IItxcustinfo, defaultValue } from 'app/shared/model/itxcustinfo.model';

export const ACTION_TYPES = {
  FETCH_ITXCUSTINFO_LIST: 'itxcustinfo/FETCH_ITXCUSTINFO_LIST',
  FETCH_ITXCUSTINFO: 'itxcustinfo/FETCH_ITXCUSTINFO',
  CREATE_ITXCUSTINFO: 'itxcustinfo/CREATE_ITXCUSTINFO',
  UPDATE_ITXCUSTINFO: 'itxcustinfo/UPDATE_ITXCUSTINFO',
  DELETE_ITXCUSTINFO: 'itxcustinfo/DELETE_ITXCUSTINFO',
  RESET: 'itxcustinfo/RESET',
};

const initialState = {
  loading: false,
  errorMessage: null,
  entities: [] as ReadonlyArray<IItxcustinfo>,
  entity: defaultValue,
  updating: false,
  updateSuccess: false,
};

export type ItxcustinfoState = Readonly<typeof initialState>;

// Reducer

export default (state: ItxcustinfoState = initialState, action): ItxcustinfoState => {
  switch (action.type) {
    case REQUEST(ACTION_TYPES.FETCH_ITXCUSTINFO_LIST):
    case REQUEST(ACTION_TYPES.FETCH_ITXCUSTINFO):
      return {
        ...state,
        errorMessage: null,
        updateSuccess: false,
        loading: true,
      };
    case REQUEST(ACTION_TYPES.CREATE_ITXCUSTINFO):
    case REQUEST(ACTION_TYPES.UPDATE_ITXCUSTINFO):
    case REQUEST(ACTION_TYPES.DELETE_ITXCUSTINFO):
      return {
        ...state,
        errorMessage: null,
        updateSuccess: false,
        updating: true,
      };
    case FAILURE(ACTION_TYPES.FETCH_ITXCUSTINFO_LIST):
    case FAILURE(ACTION_TYPES.FETCH_ITXCUSTINFO):
    case FAILURE(ACTION_TYPES.CREATE_ITXCUSTINFO):
    case FAILURE(ACTION_TYPES.UPDATE_ITXCUSTINFO):
    case FAILURE(ACTION_TYPES.DELETE_ITXCUSTINFO):
      return {
        ...state,
        loading: false,
        updating: false,
        updateSuccess: false,
        errorMessage: action.payload,
      };
    case SUCCESS(ACTION_TYPES.FETCH_ITXCUSTINFO_LIST):
      return {
        ...state,
        loading: false,
        entities: action.payload.data,
      };
    case SUCCESS(ACTION_TYPES.FETCH_ITXCUSTINFO):
      return {
        ...state,
        loading: false,
        entity: action.payload.data,
      };
    case SUCCESS(ACTION_TYPES.CREATE_ITXCUSTINFO):
    case SUCCESS(ACTION_TYPES.UPDATE_ITXCUSTINFO):
      return {
        ...state,
        updating: false,
        updateSuccess: true,
        entity: action.payload.data,
      };
    case SUCCESS(ACTION_TYPES.DELETE_ITXCUSTINFO):
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

const apiUrl = 'api/itxcustinfos';

// Actions

export const getEntities: ICrudGetAllAction<IItxcustinfo> = (page, size, sort) => ({
  type: ACTION_TYPES.FETCH_ITXCUSTINFO_LIST,
  payload: axios.get<IItxcustinfo>(`${apiUrl}?cacheBuster=${new Date().getTime()}`),
});

export const getEntity: ICrudGetAction<IItxcustinfo> = id => {
  const requestUrl = `${apiUrl}/${id}`;
  return {
    type: ACTION_TYPES.FETCH_ITXCUSTINFO,
    payload: axios.get<IItxcustinfo>(requestUrl),
  };
};

export const createEntity: ICrudPutAction<IItxcustinfo> = entity => async dispatch => {
  const result = await dispatch({
    type: ACTION_TYPES.CREATE_ITXCUSTINFO,
    payload: axios.post(apiUrl, cleanEntity(entity)),
  });
  dispatch(getEntities());
  return result;
};

export const updateEntity: ICrudPutAction<IItxcustinfo> = entity => async dispatch => {
  const result = await dispatch({
    type: ACTION_TYPES.UPDATE_ITXCUSTINFO,
    payload: axios.put(apiUrl, cleanEntity(entity)),
  });
  return result;
};

export const deleteEntity: ICrudDeleteAction<IItxcustinfo> = id => async dispatch => {
  const requestUrl = `${apiUrl}/${id}`;
  const result = await dispatch({
    type: ACTION_TYPES.DELETE_ITXCUSTINFO,
    payload: axios.delete(requestUrl),
  });
  dispatch(getEntities());
  return result;
};

export const reset = () => ({
  type: ACTION_TYPES.RESET,
});
