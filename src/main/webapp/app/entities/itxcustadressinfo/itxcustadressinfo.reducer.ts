import axios from 'axios';
import { ICrudGetAction, ICrudGetAllAction, ICrudPutAction, ICrudDeleteAction } from 'react-jhipster';

import { cleanEntity } from 'app/shared/util/entity-utils';
import { REQUEST, SUCCESS, FAILURE } from 'app/shared/reducers/action-type.util';

import { IItxcustadressinfo, defaultValue } from 'app/shared/model/itxcustadressinfo.model';

export const ACTION_TYPES = {
  FETCH_ITXCUSTADRESSINFO_LIST: 'itxcustadressinfo/FETCH_ITXCUSTADRESSINFO_LIST',
  FETCH_ITXCUSTADRESSINFO: 'itxcustadressinfo/FETCH_ITXCUSTADRESSINFO',
  CREATE_ITXCUSTADRESSINFO: 'itxcustadressinfo/CREATE_ITXCUSTADRESSINFO',
  UPDATE_ITXCUSTADRESSINFO: 'itxcustadressinfo/UPDATE_ITXCUSTADRESSINFO',
  DELETE_ITXCUSTADRESSINFO: 'itxcustadressinfo/DELETE_ITXCUSTADRESSINFO',
  RESET: 'itxcustadressinfo/RESET',
};

const initialState = {
  loading: false,
  errorMessage: null,
  entities: [] as ReadonlyArray<IItxcustadressinfo>,
  entity: defaultValue,
  updating: false,
  updateSuccess: false,
};

export type ItxcustadressinfoState = Readonly<typeof initialState>;

// Reducer

export default (state: ItxcustadressinfoState = initialState, action): ItxcustadressinfoState => {
  switch (action.type) {
    case REQUEST(ACTION_TYPES.FETCH_ITXCUSTADRESSINFO_LIST):
    case REQUEST(ACTION_TYPES.FETCH_ITXCUSTADRESSINFO):
      return {
        ...state,
        errorMessage: null,
        updateSuccess: false,
        loading: true,
      };
    case REQUEST(ACTION_TYPES.CREATE_ITXCUSTADRESSINFO):
    case REQUEST(ACTION_TYPES.UPDATE_ITXCUSTADRESSINFO):
    case REQUEST(ACTION_TYPES.DELETE_ITXCUSTADRESSINFO):
      return {
        ...state,
        errorMessage: null,
        updateSuccess: false,
        updating: true,
      };
    case FAILURE(ACTION_TYPES.FETCH_ITXCUSTADRESSINFO_LIST):
    case FAILURE(ACTION_TYPES.FETCH_ITXCUSTADRESSINFO):
    case FAILURE(ACTION_TYPES.CREATE_ITXCUSTADRESSINFO):
    case FAILURE(ACTION_TYPES.UPDATE_ITXCUSTADRESSINFO):
    case FAILURE(ACTION_TYPES.DELETE_ITXCUSTADRESSINFO):
      return {
        ...state,
        loading: false,
        updating: false,
        updateSuccess: false,
        errorMessage: action.payload,
      };
    case SUCCESS(ACTION_TYPES.FETCH_ITXCUSTADRESSINFO_LIST):
      return {
        ...state,
        loading: false,
        entities: action.payload.data,
      };
    case SUCCESS(ACTION_TYPES.FETCH_ITXCUSTADRESSINFO):
      return {
        ...state,
        loading: false,
        entity: action.payload.data,
      };
    case SUCCESS(ACTION_TYPES.CREATE_ITXCUSTADRESSINFO):
    case SUCCESS(ACTION_TYPES.UPDATE_ITXCUSTADRESSINFO):
      return {
        ...state,
        updating: false,
        updateSuccess: true,
        entity: action.payload.data,
      };
    case SUCCESS(ACTION_TYPES.DELETE_ITXCUSTADRESSINFO):
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

const apiUrl = 'api/itxcustadressinfos';

// Actions

export const getEntities: ICrudGetAllAction<IItxcustadressinfo> = (page, size, sort) => ({
  type: ACTION_TYPES.FETCH_ITXCUSTADRESSINFO_LIST,
  payload: axios.get<IItxcustadressinfo>(`${apiUrl}?cacheBuster=${new Date().getTime()}`),
});

export const getEntity: ICrudGetAction<IItxcustadressinfo> = id => {
  const requestUrl = `${apiUrl}/${id}`;
  return {
    type: ACTION_TYPES.FETCH_ITXCUSTADRESSINFO,
    payload: axios.get<IItxcustadressinfo>(requestUrl),
  };
};

export const createEntity: ICrudPutAction<IItxcustadressinfo> = entity => async dispatch => {
  const result = await dispatch({
    type: ACTION_TYPES.CREATE_ITXCUSTADRESSINFO,
    payload: axios.post(apiUrl, cleanEntity(entity)),
  });
  dispatch(getEntities());
  return result;
};

export const updateEntity: ICrudPutAction<IItxcustadressinfo> = entity => async dispatch => {
  const result = await dispatch({
    type: ACTION_TYPES.UPDATE_ITXCUSTADRESSINFO,
    payload: axios.put(apiUrl, cleanEntity(entity)),
  });
  return result;
};

export const deleteEntity: ICrudDeleteAction<IItxcustadressinfo> = id => async dispatch => {
  const requestUrl = `${apiUrl}/${id}`;
  const result = await dispatch({
    type: ACTION_TYPES.DELETE_ITXCUSTADRESSINFO,
    payload: axios.delete(requestUrl),
  });
  dispatch(getEntities());
  return result;
};

export const reset = () => ({
  type: ACTION_TYPES.RESET,
});
