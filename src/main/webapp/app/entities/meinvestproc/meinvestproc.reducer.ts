import axios from 'axios';
import { ICrudGetAction, ICrudGetAllAction, ICrudPutAction, ICrudDeleteAction } from 'react-jhipster';

import { cleanEntity } from 'app/shared/util/entity-utils';
import { REQUEST, SUCCESS, FAILURE } from 'app/shared/reducers/action-type.util';

import { IMeinvestproc, defaultValue } from 'app/shared/model/meinvestproc.model';

export const ACTION_TYPES = {
  FETCH_MEINVESTPROC_LIST: 'meinvestproc/FETCH_MEINVESTPROC_LIST',
  FETCH_MEINVESTPROC: 'meinvestproc/FETCH_MEINVESTPROC',
  CREATE_MEINVESTPROC: 'meinvestproc/CREATE_MEINVESTPROC',
  UPDATE_MEINVESTPROC: 'meinvestproc/UPDATE_MEINVESTPROC',
  DELETE_MEINVESTPROC: 'meinvestproc/DELETE_MEINVESTPROC',
  RESET: 'meinvestproc/RESET',
};

const initialState = {
  loading: false,
  errorMessage: null,
  entities: [] as ReadonlyArray<IMeinvestproc>,
  entity: defaultValue,
  updating: false,
  updateSuccess: false,
};

export type MeinvestprocState = Readonly<typeof initialState>;

// Reducer

export default (state: MeinvestprocState = initialState, action): MeinvestprocState => {
  switch (action.type) {
    case REQUEST(ACTION_TYPES.FETCH_MEINVESTPROC_LIST):
    case REQUEST(ACTION_TYPES.FETCH_MEINVESTPROC):
      return {
        ...state,
        errorMessage: null,
        updateSuccess: false,
        loading: true,
      };
    case REQUEST(ACTION_TYPES.CREATE_MEINVESTPROC):
    case REQUEST(ACTION_TYPES.UPDATE_MEINVESTPROC):
    case REQUEST(ACTION_TYPES.DELETE_MEINVESTPROC):
      return {
        ...state,
        errorMessage: null,
        updateSuccess: false,
        updating: true,
      };
    case FAILURE(ACTION_TYPES.FETCH_MEINVESTPROC_LIST):
    case FAILURE(ACTION_TYPES.FETCH_MEINVESTPROC):
    case FAILURE(ACTION_TYPES.CREATE_MEINVESTPROC):
    case FAILURE(ACTION_TYPES.UPDATE_MEINVESTPROC):
    case FAILURE(ACTION_TYPES.DELETE_MEINVESTPROC):
      return {
        ...state,
        loading: false,
        updating: false,
        updateSuccess: false,
        errorMessage: action.payload,
      };
    case SUCCESS(ACTION_TYPES.FETCH_MEINVESTPROC_LIST):
      return {
        ...state,
        loading: false,
        entities: action.payload.data,
      };
    case SUCCESS(ACTION_TYPES.FETCH_MEINVESTPROC):
      return {
        ...state,
        loading: false,
        entity: action.payload.data,
      };
    case SUCCESS(ACTION_TYPES.CREATE_MEINVESTPROC):
    case SUCCESS(ACTION_TYPES.UPDATE_MEINVESTPROC):
      return {
        ...state,
        updating: false,
        updateSuccess: true,
        entity: action.payload.data,
      };
    case SUCCESS(ACTION_TYPES.DELETE_MEINVESTPROC):
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

const apiUrl = 'api/meinvestprocs';

// Actions

export const getEntities: ICrudGetAllAction<IMeinvestproc> = (page, size, sort) => ({
  type: ACTION_TYPES.FETCH_MEINVESTPROC_LIST,
  payload: axios.get<IMeinvestproc>(`${apiUrl}?cacheBuster=${new Date().getTime()}`),
});

export const getEntity: ICrudGetAction<IMeinvestproc> = id => {
  const requestUrl = `${apiUrl}/${id}`;
  return {
    type: ACTION_TYPES.FETCH_MEINVESTPROC,
    payload: axios.get<IMeinvestproc>(requestUrl),
  };
};

export const createEntity: ICrudPutAction<IMeinvestproc> = entity => async dispatch => {
  const result = await dispatch({
    type: ACTION_TYPES.CREATE_MEINVESTPROC,
    payload: axios.post(apiUrl, cleanEntity(entity)),
  });
  dispatch(getEntities());
  return result;
};

export const updateEntity: ICrudPutAction<IMeinvestproc> = entity => async dispatch => {
  const result = await dispatch({
    type: ACTION_TYPES.UPDATE_MEINVESTPROC,
    payload: axios.put(apiUrl, cleanEntity(entity)),
  });
  return result;
};

export const deleteEntity: ICrudDeleteAction<IMeinvestproc> = id => async dispatch => {
  const requestUrl = `${apiUrl}/${id}`;
  const result = await dispatch({
    type: ACTION_TYPES.DELETE_MEINVESTPROC,
    payload: axios.delete(requestUrl),
  });
  dispatch(getEntities());
  return result;
};

export const reset = () => ({
  type: ACTION_TYPES.RESET,
});
