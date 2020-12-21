import axios from 'axios';
import { ICrudGetAction, ICrudGetAllAction, ICrudPutAction, ICrudDeleteAction } from 'react-jhipster';

import { cleanEntity } from 'app/shared/util/entity-utils';
import { REQUEST, SUCCESS, FAILURE } from 'app/shared/reducers/action-type.util';

import { IAfsystem, defaultValue } from 'app/shared/model/afsystem.model';

export const ACTION_TYPES = {
  FETCH_AFSYSTEM_LIST: 'afsystem/FETCH_AFSYSTEM_LIST',
  FETCH_AFSYSTEM: 'afsystem/FETCH_AFSYSTEM',
  CREATE_AFSYSTEM: 'afsystem/CREATE_AFSYSTEM',
  UPDATE_AFSYSTEM: 'afsystem/UPDATE_AFSYSTEM',
  DELETE_AFSYSTEM: 'afsystem/DELETE_AFSYSTEM',
  RESET: 'afsystem/RESET',
};

const initialState = {
  loading: false,
  errorMessage: null,
  entities: [] as ReadonlyArray<IAfsystem>,
  entity: defaultValue,
  updating: false,
  updateSuccess: false,
};

export type AfsystemState = Readonly<typeof initialState>;

// Reducer

export default (state: AfsystemState = initialState, action): AfsystemState => {
  switch (action.type) {
    case REQUEST(ACTION_TYPES.FETCH_AFSYSTEM_LIST):
    case REQUEST(ACTION_TYPES.FETCH_AFSYSTEM):
      return {
        ...state,
        errorMessage: null,
        updateSuccess: false,
        loading: true,
      };
    case REQUEST(ACTION_TYPES.CREATE_AFSYSTEM):
    case REQUEST(ACTION_TYPES.UPDATE_AFSYSTEM):
    case REQUEST(ACTION_TYPES.DELETE_AFSYSTEM):
      return {
        ...state,
        errorMessage: null,
        updateSuccess: false,
        updating: true,
      };
    case FAILURE(ACTION_TYPES.FETCH_AFSYSTEM_LIST):
    case FAILURE(ACTION_TYPES.FETCH_AFSYSTEM):
    case FAILURE(ACTION_TYPES.CREATE_AFSYSTEM):
    case FAILURE(ACTION_TYPES.UPDATE_AFSYSTEM):
    case FAILURE(ACTION_TYPES.DELETE_AFSYSTEM):
      return {
        ...state,
        loading: false,
        updating: false,
        updateSuccess: false,
        errorMessage: action.payload,
      };
    case SUCCESS(ACTION_TYPES.FETCH_AFSYSTEM_LIST):
      return {
        ...state,
        loading: false,
        entities: action.payload.data,
      };
    case SUCCESS(ACTION_TYPES.FETCH_AFSYSTEM):
      return {
        ...state,
        loading: false,
        entity: action.payload.data,
      };
    case SUCCESS(ACTION_TYPES.CREATE_AFSYSTEM):
    case SUCCESS(ACTION_TYPES.UPDATE_AFSYSTEM):
      return {
        ...state,
        updating: false,
        updateSuccess: true,
        entity: action.payload.data,
      };
    case SUCCESS(ACTION_TYPES.DELETE_AFSYSTEM):
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

const apiUrl = 'api/afsystems';

// Actions

export const getEntities: ICrudGetAllAction<IAfsystem> = (page, size, sort) => ({
  type: ACTION_TYPES.FETCH_AFSYSTEM_LIST,
  payload: axios.get<IAfsystem>(`${apiUrl}?cacheBuster=${new Date().getTime()}`),
});

export const getEntity: ICrudGetAction<IAfsystem> = id => {
  const requestUrl = `${apiUrl}/${id}`;
  return {
    type: ACTION_TYPES.FETCH_AFSYSTEM,
    payload: axios.get<IAfsystem>(requestUrl),
  };
};

export const createEntity: ICrudPutAction<IAfsystem> = entity => async dispatch => {
  const result = await dispatch({
    type: ACTION_TYPES.CREATE_AFSYSTEM,
    payload: axios.post(apiUrl, cleanEntity(entity)),
  });
  dispatch(getEntities());
  return result;
};

export const updateEntity: ICrudPutAction<IAfsystem> = entity => async dispatch => {
  const result = await dispatch({
    type: ACTION_TYPES.UPDATE_AFSYSTEM,
    payload: axios.put(apiUrl, cleanEntity(entity)),
  });
  return result;
};

export const deleteEntity: ICrudDeleteAction<IAfsystem> = id => async dispatch => {
  const requestUrl = `${apiUrl}/${id}`;
  const result = await dispatch({
    type: ACTION_TYPES.DELETE_AFSYSTEM,
    payload: axios.delete(requestUrl),
  });
  dispatch(getEntities());
  return result;
};

export const reset = () => ({
  type: ACTION_TYPES.RESET,
});
