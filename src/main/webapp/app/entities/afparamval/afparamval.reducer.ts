import axios from 'axios';
import { ICrudGetAction, ICrudGetAllAction, ICrudPutAction, ICrudDeleteAction } from 'react-jhipster';

import { cleanEntity } from 'app/shared/util/entity-utils';
import { REQUEST, SUCCESS, FAILURE } from 'app/shared/reducers/action-type.util';

import { IAfparamval, defaultValue } from 'app/shared/model/afparamval.model';

export const ACTION_TYPES = {
  FETCH_AFPARAMVAL_LIST: 'afparamval/FETCH_AFPARAMVAL_LIST',
  FETCH_AFPARAMVAL: 'afparamval/FETCH_AFPARAMVAL',
  CREATE_AFPARAMVAL: 'afparamval/CREATE_AFPARAMVAL',
  UPDATE_AFPARAMVAL: 'afparamval/UPDATE_AFPARAMVAL',
  DELETE_AFPARAMVAL: 'afparamval/DELETE_AFPARAMVAL',
  RESET: 'afparamval/RESET',
};

const initialState = {
  loading: false,
  errorMessage: null,
  entities: [] as ReadonlyArray<IAfparamval>,
  entity: defaultValue,
  updating: false,
  updateSuccess: false,
};

export type AfparamvalState = Readonly<typeof initialState>;

// Reducer

export default (state: AfparamvalState = initialState, action): AfparamvalState => {
  switch (action.type) {
    case REQUEST(ACTION_TYPES.FETCH_AFPARAMVAL_LIST):
    case REQUEST(ACTION_TYPES.FETCH_AFPARAMVAL):
      return {
        ...state,
        errorMessage: null,
        updateSuccess: false,
        loading: true,
      };
    case REQUEST(ACTION_TYPES.CREATE_AFPARAMVAL):
    case REQUEST(ACTION_TYPES.UPDATE_AFPARAMVAL):
    case REQUEST(ACTION_TYPES.DELETE_AFPARAMVAL):
      return {
        ...state,
        errorMessage: null,
        updateSuccess: false,
        updating: true,
      };
    case FAILURE(ACTION_TYPES.FETCH_AFPARAMVAL_LIST):
    case FAILURE(ACTION_TYPES.FETCH_AFPARAMVAL):
    case FAILURE(ACTION_TYPES.CREATE_AFPARAMVAL):
    case FAILURE(ACTION_TYPES.UPDATE_AFPARAMVAL):
    case FAILURE(ACTION_TYPES.DELETE_AFPARAMVAL):
      return {
        ...state,
        loading: false,
        updating: false,
        updateSuccess: false,
        errorMessage: action.payload,
      };
    case SUCCESS(ACTION_TYPES.FETCH_AFPARAMVAL_LIST):
      return {
        ...state,
        loading: false,
        entities: action.payload.data,
      };
    case SUCCESS(ACTION_TYPES.FETCH_AFPARAMVAL):
      return {
        ...state,
        loading: false,
        entity: action.payload.data,
      };
    case SUCCESS(ACTION_TYPES.CREATE_AFPARAMVAL):
    case SUCCESS(ACTION_TYPES.UPDATE_AFPARAMVAL):
      return {
        ...state,
        updating: false,
        updateSuccess: true,
        entity: action.payload.data,
      };
    case SUCCESS(ACTION_TYPES.DELETE_AFPARAMVAL):
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

const apiUrl = 'api/afparamvals';

// Actions

export const getEntities: ICrudGetAllAction<IAfparamval> = (page, size, sort) => ({
  type: ACTION_TYPES.FETCH_AFPARAMVAL_LIST,
  payload: axios.get<IAfparamval>(`${apiUrl}?cacheBuster=${new Date().getTime()}`),
});

export const getEntity: ICrudGetAction<IAfparamval> = id => {
  const requestUrl = `${apiUrl}/${id}`;
  return {
    type: ACTION_TYPES.FETCH_AFPARAMVAL,
    payload: axios.get<IAfparamval>(requestUrl),
  };
};

export const createEntity: ICrudPutAction<IAfparamval> = entity => async dispatch => {
  const result = await dispatch({
    type: ACTION_TYPES.CREATE_AFPARAMVAL,
    payload: axios.post(apiUrl, cleanEntity(entity)),
  });
  dispatch(getEntities());
  return result;
};

export const updateEntity: ICrudPutAction<IAfparamval> = entity => async dispatch => {
  const result = await dispatch({
    type: ACTION_TYPES.UPDATE_AFPARAMVAL,
    payload: axios.put(apiUrl, cleanEntity(entity)),
  });
  return result;
};

export const deleteEntity: ICrudDeleteAction<IAfparamval> = id => async dispatch => {
  const requestUrl = `${apiUrl}/${id}`;
  const result = await dispatch({
    type: ACTION_TYPES.DELETE_AFPARAMVAL,
    payload: axios.delete(requestUrl),
  });
  dispatch(getEntities());
  return result;
};

export const reset = () => ({
  type: ACTION_TYPES.RESET,
});
