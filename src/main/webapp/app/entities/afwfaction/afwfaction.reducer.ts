import axios from 'axios';
import { ICrudGetAction, ICrudGetAllAction, ICrudPutAction, ICrudDeleteAction } from 'react-jhipster';

import { cleanEntity } from 'app/shared/util/entity-utils';
import { REQUEST, SUCCESS, FAILURE } from 'app/shared/reducers/action-type.util';

import { IAfwfaction, defaultValue } from 'app/shared/model/afwfaction.model';

export const ACTION_TYPES = {
  FETCH_AFWFACTION_LIST: 'afwfaction/FETCH_AFWFACTION_LIST',
  FETCH_AFWFACTION: 'afwfaction/FETCH_AFWFACTION',
  CREATE_AFWFACTION: 'afwfaction/CREATE_AFWFACTION',
  UPDATE_AFWFACTION: 'afwfaction/UPDATE_AFWFACTION',
  DELETE_AFWFACTION: 'afwfaction/DELETE_AFWFACTION',
  RESET: 'afwfaction/RESET',
};

const initialState = {
  loading: false,
  errorMessage: null,
  entities: [] as ReadonlyArray<IAfwfaction>,
  entity: defaultValue,
  updating: false,
  updateSuccess: false,
};

export type AfwfactionState = Readonly<typeof initialState>;

// Reducer

export default (state: AfwfactionState = initialState, action): AfwfactionState => {
  switch (action.type) {
    case REQUEST(ACTION_TYPES.FETCH_AFWFACTION_LIST):
    case REQUEST(ACTION_TYPES.FETCH_AFWFACTION):
      return {
        ...state,
        errorMessage: null,
        updateSuccess: false,
        loading: true,
      };
    case REQUEST(ACTION_TYPES.CREATE_AFWFACTION):
    case REQUEST(ACTION_TYPES.UPDATE_AFWFACTION):
    case REQUEST(ACTION_TYPES.DELETE_AFWFACTION):
      return {
        ...state,
        errorMessage: null,
        updateSuccess: false,
        updating: true,
      };
    case FAILURE(ACTION_TYPES.FETCH_AFWFACTION_LIST):
    case FAILURE(ACTION_TYPES.FETCH_AFWFACTION):
    case FAILURE(ACTION_TYPES.CREATE_AFWFACTION):
    case FAILURE(ACTION_TYPES.UPDATE_AFWFACTION):
    case FAILURE(ACTION_TYPES.DELETE_AFWFACTION):
      return {
        ...state,
        loading: false,
        updating: false,
        updateSuccess: false,
        errorMessage: action.payload,
      };
    case SUCCESS(ACTION_TYPES.FETCH_AFWFACTION_LIST):
      return {
        ...state,
        loading: false,
        entities: action.payload.data,
      };
    case SUCCESS(ACTION_TYPES.FETCH_AFWFACTION):
      return {
        ...state,
        loading: false,
        entity: action.payload.data,
      };
    case SUCCESS(ACTION_TYPES.CREATE_AFWFACTION):
    case SUCCESS(ACTION_TYPES.UPDATE_AFWFACTION):
      return {
        ...state,
        updating: false,
        updateSuccess: true,
        entity: action.payload.data,
      };
    case SUCCESS(ACTION_TYPES.DELETE_AFWFACTION):
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

const apiUrl = 'api/afwfactions';

// Actions

export const getEntities: ICrudGetAllAction<IAfwfaction> = (page, size, sort) => ({
  type: ACTION_TYPES.FETCH_AFWFACTION_LIST,
  payload: axios.get<IAfwfaction>(`${apiUrl}?cacheBuster=${new Date().getTime()}`),
});

export const getEntity: ICrudGetAction<IAfwfaction> = id => {
  const requestUrl = `${apiUrl}/${id}`;
  return {
    type: ACTION_TYPES.FETCH_AFWFACTION,
    payload: axios.get<IAfwfaction>(requestUrl),
  };
};

export const createEntity: ICrudPutAction<IAfwfaction> = entity => async dispatch => {
  const result = await dispatch({
    type: ACTION_TYPES.CREATE_AFWFACTION,
    payload: axios.post(apiUrl, cleanEntity(entity)),
  });
  dispatch(getEntities());
  return result;
};

export const updateEntity: ICrudPutAction<IAfwfaction> = entity => async dispatch => {
  const result = await dispatch({
    type: ACTION_TYPES.UPDATE_AFWFACTION,
    payload: axios.put(apiUrl, cleanEntity(entity)),
  });
  return result;
};

export const deleteEntity: ICrudDeleteAction<IAfwfaction> = id => async dispatch => {
  const requestUrl = `${apiUrl}/${id}`;
  const result = await dispatch({
    type: ACTION_TYPES.DELETE_AFWFACTION,
    payload: axios.delete(requestUrl),
  });
  dispatch(getEntities());
  return result;
};

export const reset = () => ({
  type: ACTION_TYPES.RESET,
});
