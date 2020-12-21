import axios from 'axios';
import { ICrudGetAction, ICrudGetAllAction, ICrudPutAction, ICrudDeleteAction } from 'react-jhipster';

import { cleanEntity } from 'app/shared/util/entity-utils';
import { REQUEST, SUCCESS, FAILURE } from 'app/shared/reducers/action-type.util';

import { IMeconfig, defaultValue } from 'app/shared/model/meconfig.model';

export const ACTION_TYPES = {
  FETCH_MECONFIG_LIST: 'meconfig/FETCH_MECONFIG_LIST',
  FETCH_MECONFIG: 'meconfig/FETCH_MECONFIG',
  CREATE_MECONFIG: 'meconfig/CREATE_MECONFIG',
  UPDATE_MECONFIG: 'meconfig/UPDATE_MECONFIG',
  DELETE_MECONFIG: 'meconfig/DELETE_MECONFIG',
  RESET: 'meconfig/RESET',
};

const initialState = {
  loading: false,
  errorMessage: null,
  entities: [] as ReadonlyArray<IMeconfig>,
  entity: defaultValue,
  updating: false,
  updateSuccess: false,
};

export type MeconfigState = Readonly<typeof initialState>;

// Reducer

export default (state: MeconfigState = initialState, action): MeconfigState => {
  switch (action.type) {
    case REQUEST(ACTION_TYPES.FETCH_MECONFIG_LIST):
    case REQUEST(ACTION_TYPES.FETCH_MECONFIG):
      return {
        ...state,
        errorMessage: null,
        updateSuccess: false,
        loading: true,
      };
    case REQUEST(ACTION_TYPES.CREATE_MECONFIG):
    case REQUEST(ACTION_TYPES.UPDATE_MECONFIG):
    case REQUEST(ACTION_TYPES.DELETE_MECONFIG):
      return {
        ...state,
        errorMessage: null,
        updateSuccess: false,
        updating: true,
      };
    case FAILURE(ACTION_TYPES.FETCH_MECONFIG_LIST):
    case FAILURE(ACTION_TYPES.FETCH_MECONFIG):
    case FAILURE(ACTION_TYPES.CREATE_MECONFIG):
    case FAILURE(ACTION_TYPES.UPDATE_MECONFIG):
    case FAILURE(ACTION_TYPES.DELETE_MECONFIG):
      return {
        ...state,
        loading: false,
        updating: false,
        updateSuccess: false,
        errorMessage: action.payload,
      };
    case SUCCESS(ACTION_TYPES.FETCH_MECONFIG_LIST):
      return {
        ...state,
        loading: false,
        entities: action.payload.data,
      };
    case SUCCESS(ACTION_TYPES.FETCH_MECONFIG):
      return {
        ...state,
        loading: false,
        entity: action.payload.data,
      };
    case SUCCESS(ACTION_TYPES.CREATE_MECONFIG):
    case SUCCESS(ACTION_TYPES.UPDATE_MECONFIG):
      return {
        ...state,
        updating: false,
        updateSuccess: true,
        entity: action.payload.data,
      };
    case SUCCESS(ACTION_TYPES.DELETE_MECONFIG):
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

const apiUrl = 'api/meconfigs';

// Actions

export const getEntities: ICrudGetAllAction<IMeconfig> = (page, size, sort) => ({
  type: ACTION_TYPES.FETCH_MECONFIG_LIST,
  payload: axios.get<IMeconfig>(`${apiUrl}?cacheBuster=${new Date().getTime()}`),
});

export const getEntity: ICrudGetAction<IMeconfig> = id => {
  const requestUrl = `${apiUrl}/${id}?cacheBuster=${new Date().getTime()}`;
  return {
    type: ACTION_TYPES.FETCH_MECONFIG,
    payload: axios.get<IMeconfig>(requestUrl),
  };
};

export const createEntity: ICrudPutAction<IMeconfig> = entity => async dispatch => {
  const result = await dispatch({
    type: ACTION_TYPES.CREATE_MECONFIG,
    payload: axios.post(apiUrl, cleanEntity(entity)),
  });
  dispatch(getEntities());
  return result;
};

export const updateEntity: ICrudPutAction<IMeconfig> = entity => async dispatch => {
  const result = await dispatch({
    type: ACTION_TYPES.UPDATE_MECONFIG,
    payload: axios.put(apiUrl, cleanEntity(entity)),
  });
  return result;
};

export const deleteEntity: ICrudDeleteAction<IMeconfig> = id => async dispatch => {
  const requestUrl = `${apiUrl}/${id}`;
  const result = await dispatch({
    type: ACTION_TYPES.DELETE_MECONFIG,
    payload: axios.delete(requestUrl),
  });
  dispatch(getEntities());
  return result;
};

export const reset = () => ({
  type: ACTION_TYPES.RESET,
});
