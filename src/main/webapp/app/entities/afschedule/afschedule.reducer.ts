import axios from 'axios';
import { ICrudGetAction, ICrudGetAllAction, ICrudPutAction, ICrudDeleteAction } from 'react-jhipster';

import { cleanEntity } from 'app/shared/util/entity-utils';
import { REQUEST, SUCCESS, FAILURE } from 'app/shared/reducers/action-type.util';

import { IAfschedule, defaultValue } from 'app/shared/model/afschedule.model';

export const ACTION_TYPES = {
  FETCH_AFSCHEDULE_LIST: 'afschedule/FETCH_AFSCHEDULE_LIST',
  FETCH_AFSCHEDULE: 'afschedule/FETCH_AFSCHEDULE',
  CREATE_AFSCHEDULE: 'afschedule/CREATE_AFSCHEDULE',
  UPDATE_AFSCHEDULE: 'afschedule/UPDATE_AFSCHEDULE',
  DELETE_AFSCHEDULE: 'afschedule/DELETE_AFSCHEDULE',
  RESET: 'afschedule/RESET',
};

const initialState = {
  loading: false,
  errorMessage: null,
  entities: [] as ReadonlyArray<IAfschedule>,
  entity: defaultValue,
  updating: false,
  updateSuccess: false,
};

export type AfscheduleState = Readonly<typeof initialState>;

// Reducer

export default (state: AfscheduleState = initialState, action): AfscheduleState => {
  switch (action.type) {
    case REQUEST(ACTION_TYPES.FETCH_AFSCHEDULE_LIST):
    case REQUEST(ACTION_TYPES.FETCH_AFSCHEDULE):
      return {
        ...state,
        errorMessage: null,
        updateSuccess: false,
        loading: true,
      };
    case REQUEST(ACTION_TYPES.CREATE_AFSCHEDULE):
    case REQUEST(ACTION_TYPES.UPDATE_AFSCHEDULE):
    case REQUEST(ACTION_TYPES.DELETE_AFSCHEDULE):
      return {
        ...state,
        errorMessage: null,
        updateSuccess: false,
        updating: true,
      };
    case FAILURE(ACTION_TYPES.FETCH_AFSCHEDULE_LIST):
    case FAILURE(ACTION_TYPES.FETCH_AFSCHEDULE):
    case FAILURE(ACTION_TYPES.CREATE_AFSCHEDULE):
    case FAILURE(ACTION_TYPES.UPDATE_AFSCHEDULE):
    case FAILURE(ACTION_TYPES.DELETE_AFSCHEDULE):
      return {
        ...state,
        loading: false,
        updating: false,
        updateSuccess: false,
        errorMessage: action.payload,
      };
    case SUCCESS(ACTION_TYPES.FETCH_AFSCHEDULE_LIST):
      return {
        ...state,
        loading: false,
        entities: action.payload.data,
      };
    case SUCCESS(ACTION_TYPES.FETCH_AFSCHEDULE):
      return {
        ...state,
        loading: false,
        entity: action.payload.data,
      };
    case SUCCESS(ACTION_TYPES.CREATE_AFSCHEDULE):
    case SUCCESS(ACTION_TYPES.UPDATE_AFSCHEDULE):
      return {
        ...state,
        updating: false,
        updateSuccess: true,
        entity: action.payload.data,
      };
    case SUCCESS(ACTION_TYPES.DELETE_AFSCHEDULE):
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

const apiUrl = 'api/afschedules';

// Actions

export const getEntities: ICrudGetAllAction<IAfschedule> = (page, size, sort) => ({
  type: ACTION_TYPES.FETCH_AFSCHEDULE_LIST,
  payload: axios.get<IAfschedule>(`${apiUrl}?cacheBuster=${new Date().getTime()}`),
});

export const getEntity: ICrudGetAction<IAfschedule> = id => {
  const requestUrl = `${apiUrl}/${id}`;
  return {
    type: ACTION_TYPES.FETCH_AFSCHEDULE,
    payload: axios.get<IAfschedule>(requestUrl),
  };
};

export const createEntity: ICrudPutAction<IAfschedule> = entity => async dispatch => {
  const result = await dispatch({
    type: ACTION_TYPES.CREATE_AFSCHEDULE,
    payload: axios.post(apiUrl, cleanEntity(entity)),
  });
  dispatch(getEntities());
  return result;
};

export const updateEntity: ICrudPutAction<IAfschedule> = entity => async dispatch => {
  const result = await dispatch({
    type: ACTION_TYPES.UPDATE_AFSCHEDULE,
    payload: axios.put(apiUrl, cleanEntity(entity)),
  });
  return result;
};

export const deleteEntity: ICrudDeleteAction<IAfschedule> = id => async dispatch => {
  const requestUrl = `${apiUrl}/${id}`;
  const result = await dispatch({
    type: ACTION_TYPES.DELETE_AFSCHEDULE,
    payload: axios.delete(requestUrl),
  });
  dispatch(getEntities());
  return result;
};

export const reset = () => ({
  type: ACTION_TYPES.RESET,
});
