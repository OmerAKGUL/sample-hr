import axios from 'axios';
import { ICrudGetAction, ICrudGetAllAction, ICrudPutAction, ICrudDeleteAction } from 'react-jhipster';

import { cleanEntity } from 'app/shared/util/entity-utils';
import { REQUEST, SUCCESS, FAILURE } from 'app/shared/reducers/action-type.util';

import { IAfmenuchild, defaultValue } from 'app/shared/model/afmenuchild.model';

export const ACTION_TYPES = {
  FETCH_AFMENUCHILD_LIST: 'afmenuchild/FETCH_AFMENUCHILD_LIST',
  FETCH_AFMENUCHILD: 'afmenuchild/FETCH_AFMENUCHILD',
  CREATE_AFMENUCHILD: 'afmenuchild/CREATE_AFMENUCHILD',
  UPDATE_AFMENUCHILD: 'afmenuchild/UPDATE_AFMENUCHILD',
  DELETE_AFMENUCHILD: 'afmenuchild/DELETE_AFMENUCHILD',
  RESET: 'afmenuchild/RESET',
};

const initialState = {
  loading: false,
  errorMessage: null,
  entities: [] as ReadonlyArray<IAfmenuchild>,
  entity: defaultValue,
  updating: false,
  updateSuccess: false,
};

export type AfmenuchildState = Readonly<typeof initialState>;

// Reducer

export default (state: AfmenuchildState = initialState, action): AfmenuchildState => {
  switch (action.type) {
    case REQUEST(ACTION_TYPES.FETCH_AFMENUCHILD_LIST):
    case REQUEST(ACTION_TYPES.FETCH_AFMENUCHILD):
      return {
        ...state,
        errorMessage: null,
        updateSuccess: false,
        loading: true,
      };
    case REQUEST(ACTION_TYPES.CREATE_AFMENUCHILD):
    case REQUEST(ACTION_TYPES.UPDATE_AFMENUCHILD):
    case REQUEST(ACTION_TYPES.DELETE_AFMENUCHILD):
      return {
        ...state,
        errorMessage: null,
        updateSuccess: false,
        updating: true,
      };
    case FAILURE(ACTION_TYPES.FETCH_AFMENUCHILD_LIST):
    case FAILURE(ACTION_TYPES.FETCH_AFMENUCHILD):
    case FAILURE(ACTION_TYPES.CREATE_AFMENUCHILD):
    case FAILURE(ACTION_TYPES.UPDATE_AFMENUCHILD):
    case FAILURE(ACTION_TYPES.DELETE_AFMENUCHILD):
      return {
        ...state,
        loading: false,
        updating: false,
        updateSuccess: false,
        errorMessage: action.payload,
      };
    case SUCCESS(ACTION_TYPES.FETCH_AFMENUCHILD_LIST):
      return {
        ...state,
        loading: false,
        entities: action.payload.data,
      };
    case SUCCESS(ACTION_TYPES.FETCH_AFMENUCHILD):
      return {
        ...state,
        loading: false,
        entity: action.payload.data,
      };
    case SUCCESS(ACTION_TYPES.CREATE_AFMENUCHILD):
    case SUCCESS(ACTION_TYPES.UPDATE_AFMENUCHILD):
      return {
        ...state,
        updating: false,
        updateSuccess: true,
        entity: action.payload.data,
      };
    case SUCCESS(ACTION_TYPES.DELETE_AFMENUCHILD):
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

const apiUrl = 'api/afmenuchildren';

// Actions

export const getEntities: ICrudGetAllAction<IAfmenuchild> = (page, size, sort) => ({
  type: ACTION_TYPES.FETCH_AFMENUCHILD_LIST,
  payload: axios.get<IAfmenuchild>(`${apiUrl}?cacheBuster=${new Date().getTime()}`),
});

export const getEntity: ICrudGetAction<IAfmenuchild> = id => {
  const requestUrl = `${apiUrl}/${id}`;
  return {
    type: ACTION_TYPES.FETCH_AFMENUCHILD,
    payload: axios.get<IAfmenuchild>(requestUrl),
  };
};

export const createEntity: ICrudPutAction<IAfmenuchild> = entity => async dispatch => {
  const result = await dispatch({
    type: ACTION_TYPES.CREATE_AFMENUCHILD,
    payload: axios.post(apiUrl, cleanEntity(entity)),
  });
  dispatch(getEntities());
  return result;
};

export const updateEntity: ICrudPutAction<IAfmenuchild> = entity => async dispatch => {
  const result = await dispatch({
    type: ACTION_TYPES.UPDATE_AFMENUCHILD,
    payload: axios.put(apiUrl, cleanEntity(entity)),
  });
  return result;
};

export const deleteEntity: ICrudDeleteAction<IAfmenuchild> = id => async dispatch => {
  const requestUrl = `${apiUrl}/${id}`;
  const result = await dispatch({
    type: ACTION_TYPES.DELETE_AFMENUCHILD,
    payload: axios.delete(requestUrl),
  });
  dispatch(getEntities());
  return result;
};

export const reset = () => ({
  type: ACTION_TYPES.RESET,
});
