import axios from 'axios';
import { ICrudGetAction, ICrudGetAllAction, ICrudPutAction, ICrudDeleteAction } from 'react-jhipster';

import { cleanEntity } from 'app/shared/util/entity-utils';
import { REQUEST, SUCCESS, FAILURE } from 'app/shared/reducers/action-type.util';

import { IAfwprocaction, defaultValue } from 'app/shared/model/afwprocaction.model';

export const ACTION_TYPES = {
  FETCH_AFWPROCACTION_LIST: 'afwprocaction/FETCH_AFWPROCACTION_LIST',
  FETCH_AFWPROCACTION: 'afwprocaction/FETCH_AFWPROCACTION',
  CREATE_AFWPROCACTION: 'afwprocaction/CREATE_AFWPROCACTION',
  UPDATE_AFWPROCACTION: 'afwprocaction/UPDATE_AFWPROCACTION',
  DELETE_AFWPROCACTION: 'afwprocaction/DELETE_AFWPROCACTION',
  RESET: 'afwprocaction/RESET',
};

const initialState = {
  loading: false,
  errorMessage: null,
  entities: [] as ReadonlyArray<IAfwprocaction>,
  entity: defaultValue,
  updating: false,
  updateSuccess: false,
};

export type AfwprocactionState = Readonly<typeof initialState>;

// Reducer

export default (state: AfwprocactionState = initialState, action): AfwprocactionState => {
  switch (action.type) {
    case REQUEST(ACTION_TYPES.FETCH_AFWPROCACTION_LIST):
    case REQUEST(ACTION_TYPES.FETCH_AFWPROCACTION):
      return {
        ...state,
        errorMessage: null,
        updateSuccess: false,
        loading: true,
      };
    case REQUEST(ACTION_TYPES.CREATE_AFWPROCACTION):
    case REQUEST(ACTION_TYPES.UPDATE_AFWPROCACTION):
    case REQUEST(ACTION_TYPES.DELETE_AFWPROCACTION):
      return {
        ...state,
        errorMessage: null,
        updateSuccess: false,
        updating: true,
      };
    case FAILURE(ACTION_TYPES.FETCH_AFWPROCACTION_LIST):
    case FAILURE(ACTION_TYPES.FETCH_AFWPROCACTION):
    case FAILURE(ACTION_TYPES.CREATE_AFWPROCACTION):
    case FAILURE(ACTION_TYPES.UPDATE_AFWPROCACTION):
    case FAILURE(ACTION_TYPES.DELETE_AFWPROCACTION):
      return {
        ...state,
        loading: false,
        updating: false,
        updateSuccess: false,
        errorMessage: action.payload,
      };
    case SUCCESS(ACTION_TYPES.FETCH_AFWPROCACTION_LIST):
      return {
        ...state,
        loading: false,
        entities: action.payload.data,
      };
    case SUCCESS(ACTION_TYPES.FETCH_AFWPROCACTION):
      return {
        ...state,
        loading: false,
        entity: action.payload.data,
      };
    case SUCCESS(ACTION_TYPES.CREATE_AFWPROCACTION):
    case SUCCESS(ACTION_TYPES.UPDATE_AFWPROCACTION):
      return {
        ...state,
        updating: false,
        updateSuccess: true,
        entity: action.payload.data,
      };
    case SUCCESS(ACTION_TYPES.DELETE_AFWPROCACTION):
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

const apiUrl = 'api/afwprocactions';

// Actions

export const getEntities: ICrudGetAllAction<IAfwprocaction> = (page, size, sort) => ({
  type: ACTION_TYPES.FETCH_AFWPROCACTION_LIST,
  payload: axios.get<IAfwprocaction>(`${apiUrl}?cacheBuster=${new Date().getTime()}`),
});

export const getEntity: ICrudGetAction<IAfwprocaction> = id => {
  const requestUrl = `${apiUrl}/${id}`;
  return {
    type: ACTION_TYPES.FETCH_AFWPROCACTION,
    payload: axios.get<IAfwprocaction>(requestUrl),
  };
};

export const createEntity: ICrudPutAction<IAfwprocaction> = entity => async dispatch => {
  const result = await dispatch({
    type: ACTION_TYPES.CREATE_AFWPROCACTION,
    payload: axios.post(apiUrl, cleanEntity(entity)),
  });
  dispatch(getEntities());
  return result;
};

export const updateEntity: ICrudPutAction<IAfwprocaction> = entity => async dispatch => {
  const result = await dispatch({
    type: ACTION_TYPES.UPDATE_AFWPROCACTION,
    payload: axios.put(apiUrl, cleanEntity(entity)),
  });
  return result;
};

export const deleteEntity: ICrudDeleteAction<IAfwprocaction> = id => async dispatch => {
  const requestUrl = `${apiUrl}/${id}`;
  const result = await dispatch({
    type: ACTION_TYPES.DELETE_AFWPROCACTION,
    payload: axios.delete(requestUrl),
  });
  dispatch(getEntities());
  return result;
};

export const reset = () => ({
  type: ACTION_TYPES.RESET,
});
