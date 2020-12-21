import axios from 'axios';
import { ICrudGetAction, ICrudGetAllAction, ICrudPutAction, ICrudDeleteAction } from 'react-jhipster';

import { cleanEntity } from 'app/shared/util/entity-utils';
import { REQUEST, SUCCESS, FAILURE } from 'app/shared/reducers/action-type.util';

import { IAfsysmodule, defaultValue } from 'app/shared/model/afsysmodule.model';

export const ACTION_TYPES = {
  FETCH_AFSYSMODULE_LIST: 'afsysmodule/FETCH_AFSYSMODULE_LIST',
  FETCH_AFSYSMODULE: 'afsysmodule/FETCH_AFSYSMODULE',
  CREATE_AFSYSMODULE: 'afsysmodule/CREATE_AFSYSMODULE',
  UPDATE_AFSYSMODULE: 'afsysmodule/UPDATE_AFSYSMODULE',
  DELETE_AFSYSMODULE: 'afsysmodule/DELETE_AFSYSMODULE',
  RESET: 'afsysmodule/RESET',
};

const initialState = {
  loading: false,
  errorMessage: null,
  entities: [] as ReadonlyArray<IAfsysmodule>,
  entity: defaultValue,
  updating: false,
  updateSuccess: false,
};

export type AfsysmoduleState = Readonly<typeof initialState>;

// Reducer

export default (state: AfsysmoduleState = initialState, action): AfsysmoduleState => {
  switch (action.type) {
    case REQUEST(ACTION_TYPES.FETCH_AFSYSMODULE_LIST):
    case REQUEST(ACTION_TYPES.FETCH_AFSYSMODULE):
      return {
        ...state,
        errorMessage: null,
        updateSuccess: false,
        loading: true,
      };
    case REQUEST(ACTION_TYPES.CREATE_AFSYSMODULE):
    case REQUEST(ACTION_TYPES.UPDATE_AFSYSMODULE):
    case REQUEST(ACTION_TYPES.DELETE_AFSYSMODULE):
      return {
        ...state,
        errorMessage: null,
        updateSuccess: false,
        updating: true,
      };
    case FAILURE(ACTION_TYPES.FETCH_AFSYSMODULE_LIST):
    case FAILURE(ACTION_TYPES.FETCH_AFSYSMODULE):
    case FAILURE(ACTION_TYPES.CREATE_AFSYSMODULE):
    case FAILURE(ACTION_TYPES.UPDATE_AFSYSMODULE):
    case FAILURE(ACTION_TYPES.DELETE_AFSYSMODULE):
      return {
        ...state,
        loading: false,
        updating: false,
        updateSuccess: false,
        errorMessage: action.payload,
      };
    case SUCCESS(ACTION_TYPES.FETCH_AFSYSMODULE_LIST):
      return {
        ...state,
        loading: false,
        entities: action.payload.data,
      };
    case SUCCESS(ACTION_TYPES.FETCH_AFSYSMODULE):
      return {
        ...state,
        loading: false,
        entity: action.payload.data,
      };
    case SUCCESS(ACTION_TYPES.CREATE_AFSYSMODULE):
    case SUCCESS(ACTION_TYPES.UPDATE_AFSYSMODULE):
      return {
        ...state,
        updating: false,
        updateSuccess: true,
        entity: action.payload.data,
      };
    case SUCCESS(ACTION_TYPES.DELETE_AFSYSMODULE):
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

const apiUrl = 'api/afsysmodules';

// Actions

export const getEntities: ICrudGetAllAction<IAfsysmodule> = (page, size, sort) => ({
  type: ACTION_TYPES.FETCH_AFSYSMODULE_LIST,
  payload: axios.get<IAfsysmodule>(`${apiUrl}?cacheBuster=${new Date().getTime()}`),
});

export const getEntity: ICrudGetAction<IAfsysmodule> = id => {
  const requestUrl = `${apiUrl}/${id}`;
  return {
    type: ACTION_TYPES.FETCH_AFSYSMODULE,
    payload: axios.get<IAfsysmodule>(requestUrl),
  };
};

export const createEntity: ICrudPutAction<IAfsysmodule> = entity => async dispatch => {
  const result = await dispatch({
    type: ACTION_TYPES.CREATE_AFSYSMODULE,
    payload: axios.post(apiUrl, cleanEntity(entity)),
  });
  dispatch(getEntities());
  return result;
};

export const updateEntity: ICrudPutAction<IAfsysmodule> = entity => async dispatch => {
  const result = await dispatch({
    type: ACTION_TYPES.UPDATE_AFSYSMODULE,
    payload: axios.put(apiUrl, cleanEntity(entity)),
  });
  return result;
};

export const deleteEntity: ICrudDeleteAction<IAfsysmodule> = id => async dispatch => {
  const requestUrl = `${apiUrl}/${id}`;
  const result = await dispatch({
    type: ACTION_TYPES.DELETE_AFSYSMODULE,
    payload: axios.delete(requestUrl),
  });
  dispatch(getEntities());
  return result;
};

export const reset = () => ({
  type: ACTION_TYPES.RESET,
});
