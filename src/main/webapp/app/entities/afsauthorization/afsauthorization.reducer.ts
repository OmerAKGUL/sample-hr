import axios from 'axios';
import { ICrudGetAction, ICrudGetAllAction, ICrudPutAction, ICrudDeleteAction } from 'react-jhipster';

import { cleanEntity } from 'app/shared/util/entity-utils';
import { REQUEST, SUCCESS, FAILURE } from 'app/shared/reducers/action-type.util';

import { IAfsauthorization, defaultValue } from 'app/shared/model/afsauthorization.model';

export const ACTION_TYPES = {
  FETCH_AFSAUTHORIZATION_LIST: 'afsauthorization/FETCH_AFSAUTHORIZATION_LIST',
  FETCH_AFSAUTHORIZATION: 'afsauthorization/FETCH_AFSAUTHORIZATION',
  CREATE_AFSAUTHORIZATION: 'afsauthorization/CREATE_AFSAUTHORIZATION',
  UPDATE_AFSAUTHORIZATION: 'afsauthorization/UPDATE_AFSAUTHORIZATION',
  DELETE_AFSAUTHORIZATION: 'afsauthorization/DELETE_AFSAUTHORIZATION',
  RESET: 'afsauthorization/RESET',
};

const initialState = {
  loading: false,
  errorMessage: null,
  entities: [] as ReadonlyArray<IAfsauthorization>,
  entity: defaultValue,
  updating: false,
  updateSuccess: false,
};

export type AfsauthorizationState = Readonly<typeof initialState>;

// Reducer

export default (state: AfsauthorizationState = initialState, action): AfsauthorizationState => {
  switch (action.type) {
    case REQUEST(ACTION_TYPES.FETCH_AFSAUTHORIZATION_LIST):
    case REQUEST(ACTION_TYPES.FETCH_AFSAUTHORIZATION):
      return {
        ...state,
        errorMessage: null,
        updateSuccess: false,
        loading: true,
      };
    case REQUEST(ACTION_TYPES.CREATE_AFSAUTHORIZATION):
    case REQUEST(ACTION_TYPES.UPDATE_AFSAUTHORIZATION):
    case REQUEST(ACTION_TYPES.DELETE_AFSAUTHORIZATION):
      return {
        ...state,
        errorMessage: null,
        updateSuccess: false,
        updating: true,
      };
    case FAILURE(ACTION_TYPES.FETCH_AFSAUTHORIZATION_LIST):
    case FAILURE(ACTION_TYPES.FETCH_AFSAUTHORIZATION):
    case FAILURE(ACTION_TYPES.CREATE_AFSAUTHORIZATION):
    case FAILURE(ACTION_TYPES.UPDATE_AFSAUTHORIZATION):
    case FAILURE(ACTION_TYPES.DELETE_AFSAUTHORIZATION):
      return {
        ...state,
        loading: false,
        updating: false,
        updateSuccess: false,
        errorMessage: action.payload,
      };
    case SUCCESS(ACTION_TYPES.FETCH_AFSAUTHORIZATION_LIST):
      return {
        ...state,
        loading: false,
        entities: action.payload.data,
      };
    case SUCCESS(ACTION_TYPES.FETCH_AFSAUTHORIZATION):
      return {
        ...state,
        loading: false,
        entity: action.payload.data,
      };
    case SUCCESS(ACTION_TYPES.CREATE_AFSAUTHORIZATION):
    case SUCCESS(ACTION_TYPES.UPDATE_AFSAUTHORIZATION):
      return {
        ...state,
        updating: false,
        updateSuccess: true,
        entity: action.payload.data,
      };
    case SUCCESS(ACTION_TYPES.DELETE_AFSAUTHORIZATION):
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

const apiUrl = 'api/afsauthorizations';

// Actions

export const getEntities: ICrudGetAllAction<IAfsauthorization> = (page, size, sort) => ({
  type: ACTION_TYPES.FETCH_AFSAUTHORIZATION_LIST,
  payload: axios.get<IAfsauthorization>(`${apiUrl}?cacheBuster=${new Date().getTime()}`),
});

export const getEntity: ICrudGetAction<IAfsauthorization> = id => {
  const requestUrl = `${apiUrl}/${id}`;
  return {
    type: ACTION_TYPES.FETCH_AFSAUTHORIZATION,
    payload: axios.get<IAfsauthorization>(requestUrl),
  };
};

export const createEntity: ICrudPutAction<IAfsauthorization> = entity => async dispatch => {
  const result = await dispatch({
    type: ACTION_TYPES.CREATE_AFSAUTHORIZATION,
    payload: axios.post(apiUrl, cleanEntity(entity)),
  });
  dispatch(getEntities());
  return result;
};

export const updateEntity: ICrudPutAction<IAfsauthorization> = entity => async dispatch => {
  const result = await dispatch({
    type: ACTION_TYPES.UPDATE_AFSAUTHORIZATION,
    payload: axios.put(apiUrl, cleanEntity(entity)),
  });
  return result;
};

export const deleteEntity: ICrudDeleteAction<IAfsauthorization> = id => async dispatch => {
  const requestUrl = `${apiUrl}/${id}`;
  const result = await dispatch({
    type: ACTION_TYPES.DELETE_AFSAUTHORIZATION,
    payload: axios.delete(requestUrl),
  });
  dispatch(getEntities());
  return result;
};

export const reset = () => ({
  type: ACTION_TYPES.RESET,
});
