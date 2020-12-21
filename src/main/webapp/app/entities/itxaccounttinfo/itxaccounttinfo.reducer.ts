import axios from 'axios';
import { ICrudGetAction, ICrudGetAllAction, ICrudPutAction, ICrudDeleteAction } from 'react-jhipster';

import { cleanEntity } from 'app/shared/util/entity-utils';
import { REQUEST, SUCCESS, FAILURE } from 'app/shared/reducers/action-type.util';

import { IItxaccounttinfo, defaultValue } from 'app/shared/model/itxaccounttinfo.model';

export const ACTION_TYPES = {
  FETCH_ITXACCOUNTTINFO_LIST: 'itxaccounttinfo/FETCH_ITXACCOUNTTINFO_LIST',
  FETCH_ITXACCOUNTTINFO: 'itxaccounttinfo/FETCH_ITXACCOUNTTINFO',
  CREATE_ITXACCOUNTTINFO: 'itxaccounttinfo/CREATE_ITXACCOUNTTINFO',
  UPDATE_ITXACCOUNTTINFO: 'itxaccounttinfo/UPDATE_ITXACCOUNTTINFO',
  DELETE_ITXACCOUNTTINFO: 'itxaccounttinfo/DELETE_ITXACCOUNTTINFO',
  RESET: 'itxaccounttinfo/RESET',
};

const initialState = {
  loading: false,
  errorMessage: null,
  entities: [] as ReadonlyArray<IItxaccounttinfo>,
  entity: defaultValue,
  updating: false,
  updateSuccess: false,
};

export type ItxaccounttinfoState = Readonly<typeof initialState>;

// Reducer

export default (state: ItxaccounttinfoState = initialState, action): ItxaccounttinfoState => {
  switch (action.type) {
    case REQUEST(ACTION_TYPES.FETCH_ITXACCOUNTTINFO_LIST):
    case REQUEST(ACTION_TYPES.FETCH_ITXACCOUNTTINFO):
      return {
        ...state,
        errorMessage: null,
        updateSuccess: false,
        loading: true,
      };
    case REQUEST(ACTION_TYPES.CREATE_ITXACCOUNTTINFO):
    case REQUEST(ACTION_TYPES.UPDATE_ITXACCOUNTTINFO):
    case REQUEST(ACTION_TYPES.DELETE_ITXACCOUNTTINFO):
      return {
        ...state,
        errorMessage: null,
        updateSuccess: false,
        updating: true,
      };
    case FAILURE(ACTION_TYPES.FETCH_ITXACCOUNTTINFO_LIST):
    case FAILURE(ACTION_TYPES.FETCH_ITXACCOUNTTINFO):
    case FAILURE(ACTION_TYPES.CREATE_ITXACCOUNTTINFO):
    case FAILURE(ACTION_TYPES.UPDATE_ITXACCOUNTTINFO):
    case FAILURE(ACTION_TYPES.DELETE_ITXACCOUNTTINFO):
      return {
        ...state,
        loading: false,
        updating: false,
        updateSuccess: false,
        errorMessage: action.payload,
      };
    case SUCCESS(ACTION_TYPES.FETCH_ITXACCOUNTTINFO_LIST):
      return {
        ...state,
        loading: false,
        entities: action.payload.data,
      };
    case SUCCESS(ACTION_TYPES.FETCH_ITXACCOUNTTINFO):
      return {
        ...state,
        loading: false,
        entity: action.payload.data,
      };
    case SUCCESS(ACTION_TYPES.CREATE_ITXACCOUNTTINFO):
    case SUCCESS(ACTION_TYPES.UPDATE_ITXACCOUNTTINFO):
      return {
        ...state,
        updating: false,
        updateSuccess: true,
        entity: action.payload.data,
      };
    case SUCCESS(ACTION_TYPES.DELETE_ITXACCOUNTTINFO):
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

const apiUrl = 'api/itxaccounttinfos';

// Actions

export const getEntities: ICrudGetAllAction<IItxaccounttinfo> = (page, size, sort) => ({
  type: ACTION_TYPES.FETCH_ITXACCOUNTTINFO_LIST,
  payload: axios.get<IItxaccounttinfo>(`${apiUrl}?cacheBuster=${new Date().getTime()}`),
});

export const getEntity: ICrudGetAction<IItxaccounttinfo> = id => {
  const requestUrl = `${apiUrl}/${id}`;
  return {
    type: ACTION_TYPES.FETCH_ITXACCOUNTTINFO,
    payload: axios.get<IItxaccounttinfo>(requestUrl),
  };
};

export const createEntity: ICrudPutAction<IItxaccounttinfo> = entity => async dispatch => {
  const result = await dispatch({
    type: ACTION_TYPES.CREATE_ITXACCOUNTTINFO,
    payload: axios.post(apiUrl, cleanEntity(entity)),
  });
  dispatch(getEntities());
  return result;
};

export const updateEntity: ICrudPutAction<IItxaccounttinfo> = entity => async dispatch => {
  const result = await dispatch({
    type: ACTION_TYPES.UPDATE_ITXACCOUNTTINFO,
    payload: axios.put(apiUrl, cleanEntity(entity)),
  });
  return result;
};

export const deleteEntity: ICrudDeleteAction<IItxaccounttinfo> = id => async dispatch => {
  const requestUrl = `${apiUrl}/${id}`;
  const result = await dispatch({
    type: ACTION_TYPES.DELETE_ITXACCOUNTTINFO,
    payload: axios.delete(requestUrl),
  });
  dispatch(getEntities());
  return result;
};

export const reset = () => ({
  type: ACTION_TYPES.RESET,
});
