import axios from 'axios';
import { ICrudGetAction, ICrudGetAllAction, ICrudPutAction, ICrudDeleteAction } from 'react-jhipster';

import { cleanEntity } from 'app/shared/util/entity-utils';
import { REQUEST, SUCCESS, FAILURE } from 'app/shared/reducers/action-type.util';

import { IItxcurrency, defaultValue } from 'app/shared/model/itxcurrency.model';

export const ACTION_TYPES = {
  FETCH_ITXCURRENCY_LIST: 'itxcurrency/FETCH_ITXCURRENCY_LIST',
  FETCH_ITXCURRENCY: 'itxcurrency/FETCH_ITXCURRENCY',
  CREATE_ITXCURRENCY: 'itxcurrency/CREATE_ITXCURRENCY',
  UPDATE_ITXCURRENCY: 'itxcurrency/UPDATE_ITXCURRENCY',
  DELETE_ITXCURRENCY: 'itxcurrency/DELETE_ITXCURRENCY',
  RESET: 'itxcurrency/RESET',
};

const initialState = {
  loading: false,
  errorMessage: null,
  entities: [] as ReadonlyArray<IItxcurrency>,
  entity: defaultValue,
  updating: false,
  updateSuccess: false,
};

export type ItxcurrencyState = Readonly<typeof initialState>;

// Reducer

export default (state: ItxcurrencyState = initialState, action): ItxcurrencyState => {
  switch (action.type) {
    case REQUEST(ACTION_TYPES.FETCH_ITXCURRENCY_LIST):
    case REQUEST(ACTION_TYPES.FETCH_ITXCURRENCY):
      return {
        ...state,
        errorMessage: null,
        updateSuccess: false,
        loading: true,
      };
    case REQUEST(ACTION_TYPES.CREATE_ITXCURRENCY):
    case REQUEST(ACTION_TYPES.UPDATE_ITXCURRENCY):
    case REQUEST(ACTION_TYPES.DELETE_ITXCURRENCY):
      return {
        ...state,
        errorMessage: null,
        updateSuccess: false,
        updating: true,
      };
    case FAILURE(ACTION_TYPES.FETCH_ITXCURRENCY_LIST):
    case FAILURE(ACTION_TYPES.FETCH_ITXCURRENCY):
    case FAILURE(ACTION_TYPES.CREATE_ITXCURRENCY):
    case FAILURE(ACTION_TYPES.UPDATE_ITXCURRENCY):
    case FAILURE(ACTION_TYPES.DELETE_ITXCURRENCY):
      return {
        ...state,
        loading: false,
        updating: false,
        updateSuccess: false,
        errorMessage: action.payload,
      };
    case SUCCESS(ACTION_TYPES.FETCH_ITXCURRENCY_LIST):
      return {
        ...state,
        loading: false,
        entities: action.payload.data,
      };
    case SUCCESS(ACTION_TYPES.FETCH_ITXCURRENCY):
      return {
        ...state,
        loading: false,
        entity: action.payload.data,
      };
    case SUCCESS(ACTION_TYPES.CREATE_ITXCURRENCY):
    case SUCCESS(ACTION_TYPES.UPDATE_ITXCURRENCY):
      return {
        ...state,
        updating: false,
        updateSuccess: true,
        entity: action.payload.data,
      };
    case SUCCESS(ACTION_TYPES.DELETE_ITXCURRENCY):
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

const apiUrl = 'api/itxcurrencies';

// Actions

export const getEntities: ICrudGetAllAction<IItxcurrency> = (page, size, sort) => ({
  type: ACTION_TYPES.FETCH_ITXCURRENCY_LIST,
  payload: axios.get<IItxcurrency>(`${apiUrl}?cacheBuster=${new Date().getTime()}`),
});

export const getEntity: ICrudGetAction<IItxcurrency> = id => {
  const requestUrl = `${apiUrl}/${id}`;
  return {
    type: ACTION_TYPES.FETCH_ITXCURRENCY,
    payload: axios.get<IItxcurrency>(requestUrl),
  };
};

export const createEntity: ICrudPutAction<IItxcurrency> = entity => async dispatch => {
  const result = await dispatch({
    type: ACTION_TYPES.CREATE_ITXCURRENCY,
    payload: axios.post(apiUrl, cleanEntity(entity)),
  });
  dispatch(getEntities());
  return result;
};

export const updateEntity: ICrudPutAction<IItxcurrency> = entity => async dispatch => {
  const result = await dispatch({
    type: ACTION_TYPES.UPDATE_ITXCURRENCY,
    payload: axios.put(apiUrl, cleanEntity(entity)),
  });
  return result;
};

export const deleteEntity: ICrudDeleteAction<IItxcurrency> = id => async dispatch => {
  const requestUrl = `${apiUrl}/${id}`;
  const result = await dispatch({
    type: ACTION_TYPES.DELETE_ITXCURRENCY,
    payload: axios.delete(requestUrl),
  });
  dispatch(getEntities());
  return result;
};

export const reset = () => ({
  type: ACTION_TYPES.RESET,
});
