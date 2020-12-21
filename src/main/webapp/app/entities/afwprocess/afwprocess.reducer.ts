import axios from 'axios';
import { ICrudGetAction, ICrudGetAllAction, ICrudPutAction, ICrudDeleteAction } from 'react-jhipster';

import { cleanEntity } from 'app/shared/util/entity-utils';
import { REQUEST, SUCCESS, FAILURE } from 'app/shared/reducers/action-type.util';

import { IAfwprocess, defaultValue } from 'app/shared/model/afwprocess.model';

export const ACTION_TYPES = {
  FETCH_AFWPROCESS_LIST: 'afwprocess/FETCH_AFWPROCESS_LIST',
  FETCH_AFWPROCESS: 'afwprocess/FETCH_AFWPROCESS',
  CREATE_AFWPROCESS: 'afwprocess/CREATE_AFWPROCESS',
  UPDATE_AFWPROCESS: 'afwprocess/UPDATE_AFWPROCESS',
  DELETE_AFWPROCESS: 'afwprocess/DELETE_AFWPROCESS',
  RESET: 'afwprocess/RESET',
};

const initialState = {
  loading: false,
  errorMessage: null,
  entities: [] as ReadonlyArray<IAfwprocess>,
  entity: defaultValue,
  updating: false,
  updateSuccess: false,
};

export type AfwprocessState = Readonly<typeof initialState>;

// Reducer

export default (state: AfwprocessState = initialState, action): AfwprocessState => {
  switch (action.type) {
    case REQUEST(ACTION_TYPES.FETCH_AFWPROCESS_LIST):
    case REQUEST(ACTION_TYPES.FETCH_AFWPROCESS):
      return {
        ...state,
        errorMessage: null,
        updateSuccess: false,
        loading: true,
      };
    case REQUEST(ACTION_TYPES.CREATE_AFWPROCESS):
    case REQUEST(ACTION_TYPES.UPDATE_AFWPROCESS):
    case REQUEST(ACTION_TYPES.DELETE_AFWPROCESS):
      return {
        ...state,
        errorMessage: null,
        updateSuccess: false,
        updating: true,
      };
    case FAILURE(ACTION_TYPES.FETCH_AFWPROCESS_LIST):
    case FAILURE(ACTION_TYPES.FETCH_AFWPROCESS):
    case FAILURE(ACTION_TYPES.CREATE_AFWPROCESS):
    case FAILURE(ACTION_TYPES.UPDATE_AFWPROCESS):
    case FAILURE(ACTION_TYPES.DELETE_AFWPROCESS):
      return {
        ...state,
        loading: false,
        updating: false,
        updateSuccess: false,
        errorMessage: action.payload,
      };
    case SUCCESS(ACTION_TYPES.FETCH_AFWPROCESS_LIST):
      return {
        ...state,
        loading: false,
        entities: action.payload.data,
      };
    case SUCCESS(ACTION_TYPES.FETCH_AFWPROCESS):
      return {
        ...state,
        loading: false,
        entity: action.payload.data,
      };
    case SUCCESS(ACTION_TYPES.CREATE_AFWPROCESS):
    case SUCCESS(ACTION_TYPES.UPDATE_AFWPROCESS):
      return {
        ...state,
        updating: false,
        updateSuccess: true,
        entity: action.payload.data,
      };
    case SUCCESS(ACTION_TYPES.DELETE_AFWPROCESS):
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

const apiUrl = 'api/afwprocesses';

// Actions

export const getEntities: ICrudGetAllAction<IAfwprocess> = (page, size, sort) => ({
  type: ACTION_TYPES.FETCH_AFWPROCESS_LIST,
  payload: axios.get<IAfwprocess>(`${apiUrl}?cacheBuster=${new Date().getTime()}`),
});

export const getEntity: ICrudGetAction<IAfwprocess> = id => {
  const requestUrl = `${apiUrl}/${id}`;
  return {
    type: ACTION_TYPES.FETCH_AFWPROCESS,
    payload: axios.get<IAfwprocess>(requestUrl),
  };
};

export const createEntity: ICrudPutAction<IAfwprocess> = entity => async dispatch => {
  const result = await dispatch({
    type: ACTION_TYPES.CREATE_AFWPROCESS,
    payload: axios.post(apiUrl, cleanEntity(entity)),
  });
  dispatch(getEntities());
  return result;
};

export const updateEntity: ICrudPutAction<IAfwprocess> = entity => async dispatch => {
  const result = await dispatch({
    type: ACTION_TYPES.UPDATE_AFWPROCESS,
    payload: axios.put(apiUrl, cleanEntity(entity)),
  });
  return result;
};

export const deleteEntity: ICrudDeleteAction<IAfwprocess> = id => async dispatch => {
  const requestUrl = `${apiUrl}/${id}`;
  const result = await dispatch({
    type: ACTION_TYPES.DELETE_AFWPROCESS,
    payload: axios.delete(requestUrl),
  });
  dispatch(getEntities());
  return result;
};

export const reset = () => ({
  type: ACTION_TYPES.RESET,
});
