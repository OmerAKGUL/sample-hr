import axios from 'axios';
import { ICrudGetAction, ICrudGetAllAction, ICrudPutAction, ICrudDeleteAction } from 'react-jhipster';

import { cleanEntity } from 'app/shared/util/entity-utils';
import { REQUEST, SUCCESS, FAILURE } from 'app/shared/reducers/action-type.util';

import { IAfmenuitem, defaultValue } from 'app/shared/model/afmenuitem.model';

export const ACTION_TYPES = {
  FETCH_AFMENUITEM_LIST: 'afmenuitem/FETCH_AFMENUITEM_LIST',
  FETCH_AFMENUITEM: 'afmenuitem/FETCH_AFMENUITEM',
  CREATE_AFMENUITEM: 'afmenuitem/CREATE_AFMENUITEM',
  UPDATE_AFMENUITEM: 'afmenuitem/UPDATE_AFMENUITEM',
  DELETE_AFMENUITEM: 'afmenuitem/DELETE_AFMENUITEM',
  RESET: 'afmenuitem/RESET',
};

const initialState = {
  loading: false,
  errorMessage: null,
  entities: [] as ReadonlyArray<IAfmenuitem>,
  entity: defaultValue,
  updating: false,
  updateSuccess: false,
};

export type AfmenuitemState = Readonly<typeof initialState>;

// Reducer

export default (state: AfmenuitemState = initialState, action): AfmenuitemState => {
  switch (action.type) {
    case REQUEST(ACTION_TYPES.FETCH_AFMENUITEM_LIST):
    case REQUEST(ACTION_TYPES.FETCH_AFMENUITEM):
      return {
        ...state,
        errorMessage: null,
        updateSuccess: false,
        loading: true,
      };
    case REQUEST(ACTION_TYPES.CREATE_AFMENUITEM):
    case REQUEST(ACTION_TYPES.UPDATE_AFMENUITEM):
    case REQUEST(ACTION_TYPES.DELETE_AFMENUITEM):
      return {
        ...state,
        errorMessage: null,
        updateSuccess: false,
        updating: true,
      };
    case FAILURE(ACTION_TYPES.FETCH_AFMENUITEM_LIST):
    case FAILURE(ACTION_TYPES.FETCH_AFMENUITEM):
    case FAILURE(ACTION_TYPES.CREATE_AFMENUITEM):
    case FAILURE(ACTION_TYPES.UPDATE_AFMENUITEM):
    case FAILURE(ACTION_TYPES.DELETE_AFMENUITEM):
      return {
        ...state,
        loading: false,
        updating: false,
        updateSuccess: false,
        errorMessage: action.payload,
      };
    case SUCCESS(ACTION_TYPES.FETCH_AFMENUITEM_LIST):
      return {
        ...state,
        loading: false,
        entities: action.payload.data,
      };
    case SUCCESS(ACTION_TYPES.FETCH_AFMENUITEM):
      return {
        ...state,
        loading: false,
        entity: action.payload.data,
      };
    case SUCCESS(ACTION_TYPES.CREATE_AFMENUITEM):
    case SUCCESS(ACTION_TYPES.UPDATE_AFMENUITEM):
      return {
        ...state,
        updating: false,
        updateSuccess: true,
        entity: action.payload.data,
      };
    case SUCCESS(ACTION_TYPES.DELETE_AFMENUITEM):
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

const apiUrl = 'api/afmenuitems';

// Actions

export const getEntities: ICrudGetAllAction<IAfmenuitem> = (page, size, sort) => ({
  type: ACTION_TYPES.FETCH_AFMENUITEM_LIST,
  payload: axios.get<IAfmenuitem>(`${apiUrl}?cacheBuster=${new Date().getTime()}`),
});

export const getEntity: ICrudGetAction<IAfmenuitem> = id => {
  const requestUrl = `${apiUrl}/${id}`;
  return {
    type: ACTION_TYPES.FETCH_AFMENUITEM,
    payload: axios.get<IAfmenuitem>(requestUrl),
  };
};

export const createEntity: ICrudPutAction<IAfmenuitem> = entity => async dispatch => {
  const result = await dispatch({
    type: ACTION_TYPES.CREATE_AFMENUITEM,
    payload: axios.post(apiUrl, cleanEntity(entity)),
  });
  dispatch(getEntities());
  return result;
};

export const updateEntity: ICrudPutAction<IAfmenuitem> = entity => async dispatch => {
  const result = await dispatch({
    type: ACTION_TYPES.UPDATE_AFMENUITEM,
    payload: axios.put(apiUrl, cleanEntity(entity)),
  });
  return result;
};

export const deleteEntity: ICrudDeleteAction<IAfmenuitem> = id => async dispatch => {
  const requestUrl = `${apiUrl}/${id}`;
  const result = await dispatch({
    type: ACTION_TYPES.DELETE_AFMENUITEM,
    payload: axios.delete(requestUrl),
  });
  dispatch(getEntities());
  return result;
};

export const reset = () => ({
  type: ACTION_TYPES.RESET,
});
