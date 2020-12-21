import axios from 'axios';
import { ICrudGetAction, ICrudGetAllAction, ICrudPutAction, ICrudDeleteAction } from 'react-jhipster';

import { cleanEntity } from 'app/shared/util/entity-utils';
import { REQUEST, SUCCESS, FAILURE } from 'app/shared/reducers/action-type.util';

import { IItxcity, defaultValue } from 'app/shared/model/itxcity.model';

export const ACTION_TYPES = {
  FETCH_ITXCITY_LIST: 'itxcity/FETCH_ITXCITY_LIST',
  FETCH_ITXCITY: 'itxcity/FETCH_ITXCITY',
  CREATE_ITXCITY: 'itxcity/CREATE_ITXCITY',
  UPDATE_ITXCITY: 'itxcity/UPDATE_ITXCITY',
  DELETE_ITXCITY: 'itxcity/DELETE_ITXCITY',
  RESET: 'itxcity/RESET',
};

const initialState = {
  loading: false,
  errorMessage: null,
  entities: [] as ReadonlyArray<IItxcity>,
  entity: defaultValue,
  updating: false,
  updateSuccess: false,
};

export type ItxcityState = Readonly<typeof initialState>;

// Reducer

export default (state: ItxcityState = initialState, action): ItxcityState => {
  switch (action.type) {
    case REQUEST(ACTION_TYPES.FETCH_ITXCITY_LIST):
    case REQUEST(ACTION_TYPES.FETCH_ITXCITY):
      return {
        ...state,
        errorMessage: null,
        updateSuccess: false,
        loading: true,
      };
    case REQUEST(ACTION_TYPES.CREATE_ITXCITY):
    case REQUEST(ACTION_TYPES.UPDATE_ITXCITY):
    case REQUEST(ACTION_TYPES.DELETE_ITXCITY):
      return {
        ...state,
        errorMessage: null,
        updateSuccess: false,
        updating: true,
      };
    case FAILURE(ACTION_TYPES.FETCH_ITXCITY_LIST):
    case FAILURE(ACTION_TYPES.FETCH_ITXCITY):
    case FAILURE(ACTION_TYPES.CREATE_ITXCITY):
    case FAILURE(ACTION_TYPES.UPDATE_ITXCITY):
    case FAILURE(ACTION_TYPES.DELETE_ITXCITY):
      return {
        ...state,
        loading: false,
        updating: false,
        updateSuccess: false,
        errorMessage: action.payload,
      };
    case SUCCESS(ACTION_TYPES.FETCH_ITXCITY_LIST):
      return {
        ...state,
        loading: false,
        entities: action.payload.data,
      };
    case SUCCESS(ACTION_TYPES.FETCH_ITXCITY):
      return {
        ...state,
        loading: false,
        entity: action.payload.data,
      };
    case SUCCESS(ACTION_TYPES.CREATE_ITXCITY):
    case SUCCESS(ACTION_TYPES.UPDATE_ITXCITY):
      return {
        ...state,
        updating: false,
        updateSuccess: true,
        entity: action.payload.data,
      };
    case SUCCESS(ACTION_TYPES.DELETE_ITXCITY):
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

const apiUrl = 'api/itxcities';

// Actions

export const getEntities: ICrudGetAllAction<IItxcity> = (page, size, sort) => ({
  type: ACTION_TYPES.FETCH_ITXCITY_LIST,
  payload: axios.get<IItxcity>(`${apiUrl}?cacheBuster=${new Date().getTime()}`),
});

export const getEntity: ICrudGetAction<IItxcity> = id => {
  const requestUrl = `${apiUrl}/${id}`;
  return {
    type: ACTION_TYPES.FETCH_ITXCITY,
    payload: axios.get<IItxcity>(requestUrl),
  };
};

export const createEntity: ICrudPutAction<IItxcity> = entity => async dispatch => {
  const result = await dispatch({
    type: ACTION_TYPES.CREATE_ITXCITY,
    payload: axios.post(apiUrl, cleanEntity(entity)),
  });
  dispatch(getEntities());
  return result;
};

export const updateEntity: ICrudPutAction<IItxcity> = entity => async dispatch => {
  const result = await dispatch({
    type: ACTION_TYPES.UPDATE_ITXCITY,
    payload: axios.put(apiUrl, cleanEntity(entity)),
  });
  return result;
};

export const deleteEntity: ICrudDeleteAction<IItxcity> = id => async dispatch => {
  const requestUrl = `${apiUrl}/${id}`;
  const result = await dispatch({
    type: ACTION_TYPES.DELETE_ITXCITY,
    payload: axios.delete(requestUrl),
  });
  dispatch(getEntities());
  return result;
};

export const reset = () => ({
  type: ACTION_TYPES.RESET,
});
