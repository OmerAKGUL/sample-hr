import axios from 'axios';
import { ICrudGetAction, ICrudGetAllAction, ICrudPutAction, ICrudDeleteAction } from 'react-jhipster';

import { cleanEntity } from 'app/shared/util/entity-utils';
import { REQUEST, SUCCESS, FAILURE } from 'app/shared/reducers/action-type.util';

import { IAfmsg, defaultValue } from 'app/shared/model/afmsg.model';

export const ACTION_TYPES = {
  FETCH_AFMSG_LIST: 'afmsg/FETCH_AFMSG_LIST',
  FETCH_AFMSG: 'afmsg/FETCH_AFMSG',
  CREATE_AFMSG: 'afmsg/CREATE_AFMSG',
  UPDATE_AFMSG: 'afmsg/UPDATE_AFMSG',
  DELETE_AFMSG: 'afmsg/DELETE_AFMSG',
  RESET: 'afmsg/RESET',
};

const initialState = {
  loading: false,
  errorMessage: null,
  entities: [] as ReadonlyArray<IAfmsg>,
  entity: defaultValue,
  updating: false,
  updateSuccess: false,
};

export type AfmsgState = Readonly<typeof initialState>;

// Reducer

export default (state: AfmsgState = initialState, action): AfmsgState => {
  switch (action.type) {
    case REQUEST(ACTION_TYPES.FETCH_AFMSG_LIST):
    case REQUEST(ACTION_TYPES.FETCH_AFMSG):
      return {
        ...state,
        errorMessage: null,
        updateSuccess: false,
        loading: true,
      };
    case REQUEST(ACTION_TYPES.CREATE_AFMSG):
    case REQUEST(ACTION_TYPES.UPDATE_AFMSG):
    case REQUEST(ACTION_TYPES.DELETE_AFMSG):
      return {
        ...state,
        errorMessage: null,
        updateSuccess: false,
        updating: true,
      };
    case FAILURE(ACTION_TYPES.FETCH_AFMSG_LIST):
    case FAILURE(ACTION_TYPES.FETCH_AFMSG):
    case FAILURE(ACTION_TYPES.CREATE_AFMSG):
    case FAILURE(ACTION_TYPES.UPDATE_AFMSG):
    case FAILURE(ACTION_TYPES.DELETE_AFMSG):
      return {
        ...state,
        loading: false,
        updating: false,
        updateSuccess: false,
        errorMessage: action.payload,
      };
    case SUCCESS(ACTION_TYPES.FETCH_AFMSG_LIST):
      return {
        ...state,
        loading: false,
        entities: action.payload.data,
      };
    case SUCCESS(ACTION_TYPES.FETCH_AFMSG):
      return {
        ...state,
        loading: false,
        entity: action.payload.data,
      };
    case SUCCESS(ACTION_TYPES.CREATE_AFMSG):
    case SUCCESS(ACTION_TYPES.UPDATE_AFMSG):
      return {
        ...state,
        updating: false,
        updateSuccess: true,
        entity: action.payload.data,
      };
    case SUCCESS(ACTION_TYPES.DELETE_AFMSG):
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

const apiUrl = 'api/afmsgs';

// Actions

export const getEntities: ICrudGetAllAction<IAfmsg> = (page, size, sort) => ({
  type: ACTION_TYPES.FETCH_AFMSG_LIST,
  payload: axios.get<IAfmsg>(`${apiUrl}?cacheBuster=${new Date().getTime()}`),
});

export const getEntity: ICrudGetAction<IAfmsg> = id => {
  const requestUrl = `${apiUrl}/${id}`;
  return {
    type: ACTION_TYPES.FETCH_AFMSG,
    payload: axios.get<IAfmsg>(requestUrl),
  };
};

export const createEntity: ICrudPutAction<IAfmsg> = entity => async dispatch => {
  const result = await dispatch({
    type: ACTION_TYPES.CREATE_AFMSG,
    payload: axios.post(apiUrl, cleanEntity(entity)),
  });
  dispatch(getEntities());
  return result;
};

export const updateEntity: ICrudPutAction<IAfmsg> = entity => async dispatch => {
  const result = await dispatch({
    type: ACTION_TYPES.UPDATE_AFMSG,
    payload: axios.put(apiUrl, cleanEntity(entity)),
  });
  return result;
};

export const deleteEntity: ICrudDeleteAction<IAfmsg> = id => async dispatch => {
  const requestUrl = `${apiUrl}/${id}`;
  const result = await dispatch({
    type: ACTION_TYPES.DELETE_AFMSG,
    payload: axios.delete(requestUrl),
  });
  dispatch(getEntities());
  return result;
};

export const reset = () => ({
  type: ACTION_TYPES.RESET,
});
