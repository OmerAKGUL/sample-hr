import axios from 'axios';
import { ICrudGetAction, ICrudGetAllAction, ICrudPutAction, ICrudDeleteAction } from 'react-jhipster';

import { cleanEntity } from 'app/shared/util/entity-utils';
import { REQUEST, SUCCESS, FAILURE } from 'app/shared/reducers/action-type.util';

import { IItxorganization, defaultValue } from 'app/shared/model/itxorganization.model';

export const ACTION_TYPES = {
  FETCH_ITXORGANIZATION_LIST: 'itxorganization/FETCH_ITXORGANIZATION_LIST',
  FETCH_ITXORGANIZATION: 'itxorganization/FETCH_ITXORGANIZATION',
  CREATE_ITXORGANIZATION: 'itxorganization/CREATE_ITXORGANIZATION',
  UPDATE_ITXORGANIZATION: 'itxorganization/UPDATE_ITXORGANIZATION',
  DELETE_ITXORGANIZATION: 'itxorganization/DELETE_ITXORGANIZATION',
  RESET: 'itxorganization/RESET',
};

const initialState = {
  loading: false,
  errorMessage: null,
  entities: [] as ReadonlyArray<IItxorganization>,
  entity: defaultValue,
  updating: false,
  updateSuccess: false,
};

export type ItxorganizationState = Readonly<typeof initialState>;

// Reducer

export default (state: ItxorganizationState = initialState, action): ItxorganizationState => {
  switch (action.type) {
    case REQUEST(ACTION_TYPES.FETCH_ITXORGANIZATION_LIST):
    case REQUEST(ACTION_TYPES.FETCH_ITXORGANIZATION):
      return {
        ...state,
        errorMessage: null,
        updateSuccess: false,
        loading: true,
      };
    case REQUEST(ACTION_TYPES.CREATE_ITXORGANIZATION):
    case REQUEST(ACTION_TYPES.UPDATE_ITXORGANIZATION):
    case REQUEST(ACTION_TYPES.DELETE_ITXORGANIZATION):
      return {
        ...state,
        errorMessage: null,
        updateSuccess: false,
        updating: true,
      };
    case FAILURE(ACTION_TYPES.FETCH_ITXORGANIZATION_LIST):
    case FAILURE(ACTION_TYPES.FETCH_ITXORGANIZATION):
    case FAILURE(ACTION_TYPES.CREATE_ITXORGANIZATION):
    case FAILURE(ACTION_TYPES.UPDATE_ITXORGANIZATION):
    case FAILURE(ACTION_TYPES.DELETE_ITXORGANIZATION):
      return {
        ...state,
        loading: false,
        updating: false,
        updateSuccess: false,
        errorMessage: action.payload,
      };
    case SUCCESS(ACTION_TYPES.FETCH_ITXORGANIZATION_LIST):
      return {
        ...state,
        loading: false,
        entities: action.payload.data,
      };
    case SUCCESS(ACTION_TYPES.FETCH_ITXORGANIZATION):
      return {
        ...state,
        loading: false,
        entity: action.payload.data,
      };
    case SUCCESS(ACTION_TYPES.CREATE_ITXORGANIZATION):
    case SUCCESS(ACTION_TYPES.UPDATE_ITXORGANIZATION):
      return {
        ...state,
        updating: false,
        updateSuccess: true,
        entity: action.payload.data,
      };
    case SUCCESS(ACTION_TYPES.DELETE_ITXORGANIZATION):
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

const apiUrl = 'api/itxorganizations';

// Actions

export const getEntities: ICrudGetAllAction<IItxorganization> = (page, size, sort) => ({
  type: ACTION_TYPES.FETCH_ITXORGANIZATION_LIST,
  payload: axios.get<IItxorganization>(`${apiUrl}?cacheBuster=${new Date().getTime()}`),
});

export const getEntity: ICrudGetAction<IItxorganization> = id => {
  const requestUrl = `${apiUrl}/${id}`;
  return {
    type: ACTION_TYPES.FETCH_ITXORGANIZATION,
    payload: axios.get<IItxorganization>(requestUrl),
  };
};

export const createEntity: ICrudPutAction<IItxorganization> = entity => async dispatch => {
  const result = await dispatch({
    type: ACTION_TYPES.CREATE_ITXORGANIZATION,
    payload: axios.post(apiUrl, cleanEntity(entity)),
  });
  dispatch(getEntities());
  return result;
};

export const updateEntity: ICrudPutAction<IItxorganization> = entity => async dispatch => {
  const result = await dispatch({
    type: ACTION_TYPES.UPDATE_ITXORGANIZATION,
    payload: axios.put(apiUrl, cleanEntity(entity)),
  });
  return result;
};

export const deleteEntity: ICrudDeleteAction<IItxorganization> = id => async dispatch => {
  const requestUrl = `${apiUrl}/${id}`;
  const result = await dispatch({
    type: ACTION_TYPES.DELETE_ITXORGANIZATION,
    payload: axios.delete(requestUrl),
  });
  dispatch(getEntities());
  return result;
};

export const reset = () => ({
  type: ACTION_TYPES.RESET,
});
