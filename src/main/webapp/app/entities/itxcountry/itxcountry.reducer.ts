import axios from 'axios';
import { ICrudGetAction, ICrudGetAllAction, ICrudPutAction, ICrudDeleteAction } from 'react-jhipster';

import { cleanEntity } from 'app/shared/util/entity-utils';
import { REQUEST, SUCCESS, FAILURE } from 'app/shared/reducers/action-type.util';

import { IItxcountry, defaultValue } from 'app/shared/model/itxcountry.model';

export const ACTION_TYPES = {
  FETCH_ITXCOUNTRY_LIST: 'itxcountry/FETCH_ITXCOUNTRY_LIST',
  FETCH_ITXCOUNTRY: 'itxcountry/FETCH_ITXCOUNTRY',
  CREATE_ITXCOUNTRY: 'itxcountry/CREATE_ITXCOUNTRY',
  UPDATE_ITXCOUNTRY: 'itxcountry/UPDATE_ITXCOUNTRY',
  DELETE_ITXCOUNTRY: 'itxcountry/DELETE_ITXCOUNTRY',
  RESET: 'itxcountry/RESET',
};

const initialState = {
  loading: false,
  errorMessage: null,
  entities: [] as ReadonlyArray<IItxcountry>,
  entity: defaultValue,
  updating: false,
  updateSuccess: false,
};

export type ItxcountryState = Readonly<typeof initialState>;

// Reducer

export default (state: ItxcountryState = initialState, action): ItxcountryState => {
  switch (action.type) {
    case REQUEST(ACTION_TYPES.FETCH_ITXCOUNTRY_LIST):
    case REQUEST(ACTION_TYPES.FETCH_ITXCOUNTRY):
      return {
        ...state,
        errorMessage: null,
        updateSuccess: false,
        loading: true,
      };
    case REQUEST(ACTION_TYPES.CREATE_ITXCOUNTRY):
    case REQUEST(ACTION_TYPES.UPDATE_ITXCOUNTRY):
    case REQUEST(ACTION_TYPES.DELETE_ITXCOUNTRY):
      return {
        ...state,
        errorMessage: null,
        updateSuccess: false,
        updating: true,
      };
    case FAILURE(ACTION_TYPES.FETCH_ITXCOUNTRY_LIST):
    case FAILURE(ACTION_TYPES.FETCH_ITXCOUNTRY):
    case FAILURE(ACTION_TYPES.CREATE_ITXCOUNTRY):
    case FAILURE(ACTION_TYPES.UPDATE_ITXCOUNTRY):
    case FAILURE(ACTION_TYPES.DELETE_ITXCOUNTRY):
      return {
        ...state,
        loading: false,
        updating: false,
        updateSuccess: false,
        errorMessage: action.payload,
      };
    case SUCCESS(ACTION_TYPES.FETCH_ITXCOUNTRY_LIST):
      return {
        ...state,
        loading: false,
        entities: action.payload.data,
      };
    case SUCCESS(ACTION_TYPES.FETCH_ITXCOUNTRY):
      return {
        ...state,
        loading: false,
        entity: action.payload.data,
      };
    case SUCCESS(ACTION_TYPES.CREATE_ITXCOUNTRY):
    case SUCCESS(ACTION_TYPES.UPDATE_ITXCOUNTRY):
      return {
        ...state,
        updating: false,
        updateSuccess: true,
        entity: action.payload.data,
      };
    case SUCCESS(ACTION_TYPES.DELETE_ITXCOUNTRY):
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

const apiUrl = 'api/itxcountries';

// Actions

export const getEntities: ICrudGetAllAction<IItxcountry> = (page, size, sort) => ({
  type: ACTION_TYPES.FETCH_ITXCOUNTRY_LIST,
  payload: axios.get<IItxcountry>(`${apiUrl}?cacheBuster=${new Date().getTime()}`),
});

export const getEntity: ICrudGetAction<IItxcountry> = id => {
  const requestUrl = `${apiUrl}/${id}`;
  return {
    type: ACTION_TYPES.FETCH_ITXCOUNTRY,
    payload: axios.get<IItxcountry>(requestUrl),
  };
};

export const createEntity: ICrudPutAction<IItxcountry> = entity => async dispatch => {
  const result = await dispatch({
    type: ACTION_TYPES.CREATE_ITXCOUNTRY,
    payload: axios.post(apiUrl, cleanEntity(entity)),
  });
  dispatch(getEntities());
  return result;
};

export const updateEntity: ICrudPutAction<IItxcountry> = entity => async dispatch => {
  const result = await dispatch({
    type: ACTION_TYPES.UPDATE_ITXCOUNTRY,
    payload: axios.put(apiUrl, cleanEntity(entity)),
  });
  return result;
};

export const deleteEntity: ICrudDeleteAction<IItxcountry> = id => async dispatch => {
  const requestUrl = `${apiUrl}/${id}`;
  const result = await dispatch({
    type: ACTION_TYPES.DELETE_ITXCOUNTRY,
    payload: axios.delete(requestUrl),
  });
  dispatch(getEntities());
  return result;
};

export const reset = () => ({
  type: ACTION_TYPES.RESET,
});
