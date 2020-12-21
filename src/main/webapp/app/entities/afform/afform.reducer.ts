import axios from 'axios';
import { ICrudGetAction, ICrudGetAllAction, ICrudPutAction, ICrudDeleteAction } from 'react-jhipster';

import { cleanEntity } from 'app/shared/util/entity-utils';
import { REQUEST, SUCCESS, FAILURE } from 'app/shared/reducers/action-type.util';

import { IAfform, defaultValue } from 'app/shared/model/afform.model';

export const ACTION_TYPES = {
  FETCH_AFFORM_LIST: 'afform/FETCH_AFFORM_LIST',
  FETCH_AFFORM: 'afform/FETCH_AFFORM',
  CREATE_AFFORM: 'afform/CREATE_AFFORM',
  UPDATE_AFFORM: 'afform/UPDATE_AFFORM',
  DELETE_AFFORM: 'afform/DELETE_AFFORM',
  RESET: 'afform/RESET',
};

const initialState = {
  loading: false,
  errorMessage: null,
  entities: [] as ReadonlyArray<IAfform>,
  entity: defaultValue,
  updating: false,
  updateSuccess: false,
};

export type AfformState = Readonly<typeof initialState>;

// Reducer

export default (state: AfformState = initialState, action): AfformState => {
  switch (action.type) {
    case REQUEST(ACTION_TYPES.FETCH_AFFORM_LIST):
    case REQUEST(ACTION_TYPES.FETCH_AFFORM):
      return {
        ...state,
        errorMessage: null,
        updateSuccess: false,
        loading: true,
      };
    case REQUEST(ACTION_TYPES.CREATE_AFFORM):
    case REQUEST(ACTION_TYPES.UPDATE_AFFORM):
    case REQUEST(ACTION_TYPES.DELETE_AFFORM):
      return {
        ...state,
        errorMessage: null,
        updateSuccess: false,
        updating: true,
      };
    case FAILURE(ACTION_TYPES.FETCH_AFFORM_LIST):
    case FAILURE(ACTION_TYPES.FETCH_AFFORM):
    case FAILURE(ACTION_TYPES.CREATE_AFFORM):
    case FAILURE(ACTION_TYPES.UPDATE_AFFORM):
    case FAILURE(ACTION_TYPES.DELETE_AFFORM):
      return {
        ...state,
        loading: false,
        updating: false,
        updateSuccess: false,
        errorMessage: action.payload,
      };
    case SUCCESS(ACTION_TYPES.FETCH_AFFORM_LIST):
      return {
        ...state,
        loading: false,
        entities: action.payload.data,
      };
    case SUCCESS(ACTION_TYPES.FETCH_AFFORM):
      return {
        ...state,
        loading: false,
        entity: action.payload.data,
      };
    case SUCCESS(ACTION_TYPES.CREATE_AFFORM):
    case SUCCESS(ACTION_TYPES.UPDATE_AFFORM):
      return {
        ...state,
        updating: false,
        updateSuccess: true,
        entity: action.payload.data,
      };
    case SUCCESS(ACTION_TYPES.DELETE_AFFORM):
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

const apiUrl = 'api/afforms';

// Actions

export const getEntities: ICrudGetAllAction<IAfform> = (page, size, sort) => ({
  type: ACTION_TYPES.FETCH_AFFORM_LIST,
  payload: axios.get<IAfform>(`${apiUrl}?cacheBuster=${new Date().getTime()}`),
});

export const getEntity: ICrudGetAction<IAfform> = id => {
  const requestUrl = `${apiUrl}/${id}`;
  return {
    type: ACTION_TYPES.FETCH_AFFORM,
    payload: axios.get<IAfform>(requestUrl),
  };
};

export const createEntity: ICrudPutAction<IAfform> = entity => async dispatch => {
  const result = await dispatch({
    type: ACTION_TYPES.CREATE_AFFORM,
    payload: axios.post(apiUrl, cleanEntity(entity)),
  });
  dispatch(getEntities());
  return result;
};

export const updateEntity: ICrudPutAction<IAfform> = entity => async dispatch => {
  const result = await dispatch({
    type: ACTION_TYPES.UPDATE_AFFORM,
    payload: axios.put(apiUrl, cleanEntity(entity)),
  });
  return result;
};

export const deleteEntity: ICrudDeleteAction<IAfform> = id => async dispatch => {
  const requestUrl = `${apiUrl}/${id}`;
  const result = await dispatch({
    type: ACTION_TYPES.DELETE_AFFORM,
    payload: axios.delete(requestUrl),
  });
  dispatch(getEntities());
  return result;
};

export const reset = () => ({
  type: ACTION_TYPES.RESET,
});
