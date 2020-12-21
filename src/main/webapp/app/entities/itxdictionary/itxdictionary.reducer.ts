import axios from 'axios';
import { ICrudGetAction, ICrudGetAllAction, ICrudPutAction, ICrudDeleteAction } from 'react-jhipster';

import { cleanEntity } from 'app/shared/util/entity-utils';
import { REQUEST, SUCCESS, FAILURE } from 'app/shared/reducers/action-type.util';

import { IItxdictionary, defaultValue } from 'app/shared/model/itxdictionary.model';

export const ACTION_TYPES = {
  FETCH_ITXDICTIONARY_LIST: 'itxdictionary/FETCH_ITXDICTIONARY_LIST',
  FETCH_ITXDICTIONARY: 'itxdictionary/FETCH_ITXDICTIONARY',
  CREATE_ITXDICTIONARY: 'itxdictionary/CREATE_ITXDICTIONARY',
  UPDATE_ITXDICTIONARY: 'itxdictionary/UPDATE_ITXDICTIONARY',
  DELETE_ITXDICTIONARY: 'itxdictionary/DELETE_ITXDICTIONARY',
  RESET: 'itxdictionary/RESET',
};

const initialState = {
  loading: false,
  errorMessage: null,
  entities: [] as ReadonlyArray<IItxdictionary>,
  entity: defaultValue,
  updating: false,
  updateSuccess: false,
};

export type ItxdictionaryState = Readonly<typeof initialState>;

// Reducer

export default (state: ItxdictionaryState = initialState, action): ItxdictionaryState => {
  switch (action.type) {
    case REQUEST(ACTION_TYPES.FETCH_ITXDICTIONARY_LIST):
    case REQUEST(ACTION_TYPES.FETCH_ITXDICTIONARY):
      return {
        ...state,
        errorMessage: null,
        updateSuccess: false,
        loading: true,
      };
    case REQUEST(ACTION_TYPES.CREATE_ITXDICTIONARY):
    case REQUEST(ACTION_TYPES.UPDATE_ITXDICTIONARY):
    case REQUEST(ACTION_TYPES.DELETE_ITXDICTIONARY):
      return {
        ...state,
        errorMessage: null,
        updateSuccess: false,
        updating: true,
      };
    case FAILURE(ACTION_TYPES.FETCH_ITXDICTIONARY_LIST):
    case FAILURE(ACTION_TYPES.FETCH_ITXDICTIONARY):
    case FAILURE(ACTION_TYPES.CREATE_ITXDICTIONARY):
    case FAILURE(ACTION_TYPES.UPDATE_ITXDICTIONARY):
    case FAILURE(ACTION_TYPES.DELETE_ITXDICTIONARY):
      return {
        ...state,
        loading: false,
        updating: false,
        updateSuccess: false,
        errorMessage: action.payload,
      };
    case SUCCESS(ACTION_TYPES.FETCH_ITXDICTIONARY_LIST):
      return {
        ...state,
        loading: false,
        entities: action.payload.data,
      };
    case SUCCESS(ACTION_TYPES.FETCH_ITXDICTIONARY):
      return {
        ...state,
        loading: false,
        entity: action.payload.data,
      };
    case SUCCESS(ACTION_TYPES.CREATE_ITXDICTIONARY):
    case SUCCESS(ACTION_TYPES.UPDATE_ITXDICTIONARY):
      return {
        ...state,
        updating: false,
        updateSuccess: true,
        entity: action.payload.data,
      };
    case SUCCESS(ACTION_TYPES.DELETE_ITXDICTIONARY):
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

const apiUrl = 'api/itxdictionaries';

// Actions

export const getEntities: ICrudGetAllAction<IItxdictionary> = (page, size, sort) => ({
  type: ACTION_TYPES.FETCH_ITXDICTIONARY_LIST,
  payload: axios.get<IItxdictionary>(`${apiUrl}?cacheBuster=${new Date().getTime()}`),
});

export const getEntity: ICrudGetAction<IItxdictionary> = id => {
  const requestUrl = `${apiUrl}/${id}`;
  return {
    type: ACTION_TYPES.FETCH_ITXDICTIONARY,
    payload: axios.get<IItxdictionary>(requestUrl),
  };
};

export const createEntity: ICrudPutAction<IItxdictionary> = entity => async dispatch => {
  const result = await dispatch({
    type: ACTION_TYPES.CREATE_ITXDICTIONARY,
    payload: axios.post(apiUrl, cleanEntity(entity)),
  });
  dispatch(getEntities());
  return result;
};

export const updateEntity: ICrudPutAction<IItxdictionary> = entity => async dispatch => {
  const result = await dispatch({
    type: ACTION_TYPES.UPDATE_ITXDICTIONARY,
    payload: axios.put(apiUrl, cleanEntity(entity)),
  });
  return result;
};

export const deleteEntity: ICrudDeleteAction<IItxdictionary> = id => async dispatch => {
  const requestUrl = `${apiUrl}/${id}`;
  const result = await dispatch({
    type: ACTION_TYPES.DELETE_ITXDICTIONARY,
    payload: axios.delete(requestUrl),
  });
  dispatch(getEntities());
  return result;
};

export const reset = () => ({
  type: ACTION_TYPES.RESET,
});
