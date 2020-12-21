import axios from 'axios';
import { ICrudGetAction, ICrudGetAllAction, ICrudPutAction, ICrudDeleteAction } from 'react-jhipster';

import { cleanEntity } from 'app/shared/util/entity-utils';
import { REQUEST, SUCCESS, FAILURE } from 'app/shared/reducers/action-type.util';

import { IAfsrole, defaultValue } from 'app/shared/model/afsrole.model';

export const ACTION_TYPES = {
  FETCH_AFSROLE_LIST: 'afsrole/FETCH_AFSROLE_LIST',
  FETCH_AFSROLE: 'afsrole/FETCH_AFSROLE',
  CREATE_AFSROLE: 'afsrole/CREATE_AFSROLE',
  UPDATE_AFSROLE: 'afsrole/UPDATE_AFSROLE',
  DELETE_AFSROLE: 'afsrole/DELETE_AFSROLE',
  RESET: 'afsrole/RESET',
};

const initialState = {
  loading: false,
  errorMessage: null,
  entities: [] as ReadonlyArray<IAfsrole>,
  entity: defaultValue,
  updating: false,
  updateSuccess: false,
};

export type AfsroleState = Readonly<typeof initialState>;

// Reducer

export default (state: AfsroleState = initialState, action): AfsroleState => {
  switch (action.type) {
    case REQUEST(ACTION_TYPES.FETCH_AFSROLE_LIST):
    case REQUEST(ACTION_TYPES.FETCH_AFSROLE):
      return {
        ...state,
        errorMessage: null,
        updateSuccess: false,
        loading: true,
      };
    case REQUEST(ACTION_TYPES.CREATE_AFSROLE):
    case REQUEST(ACTION_TYPES.UPDATE_AFSROLE):
    case REQUEST(ACTION_TYPES.DELETE_AFSROLE):
      return {
        ...state,
        errorMessage: null,
        updateSuccess: false,
        updating: true,
      };
    case FAILURE(ACTION_TYPES.FETCH_AFSROLE_LIST):
    case FAILURE(ACTION_TYPES.FETCH_AFSROLE):
    case FAILURE(ACTION_TYPES.CREATE_AFSROLE):
    case FAILURE(ACTION_TYPES.UPDATE_AFSROLE):
    case FAILURE(ACTION_TYPES.DELETE_AFSROLE):
      return {
        ...state,
        loading: false,
        updating: false,
        updateSuccess: false,
        errorMessage: action.payload,
      };
    case SUCCESS(ACTION_TYPES.FETCH_AFSROLE_LIST):
      return {
        ...state,
        loading: false,
        entities: action.payload.data,
      };
    case SUCCESS(ACTION_TYPES.FETCH_AFSROLE):
      return {
        ...state,
        loading: false,
        entity: action.payload.data,
      };
    case SUCCESS(ACTION_TYPES.CREATE_AFSROLE):
    case SUCCESS(ACTION_TYPES.UPDATE_AFSROLE):
      return {
        ...state,
        updating: false,
        updateSuccess: true,
        entity: action.payload.data,
      };
    case SUCCESS(ACTION_TYPES.DELETE_AFSROLE):
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

const apiUrl = 'api/afsroles';

// Actions

export const getEntities: ICrudGetAllAction<IAfsrole> = (page, size, sort) => ({
  type: ACTION_TYPES.FETCH_AFSROLE_LIST,
  payload: axios.get<IAfsrole>(`${apiUrl}?cacheBuster=${new Date().getTime()}`),
});

export const getEntity: ICrudGetAction<IAfsrole> = id => {
  const requestUrl = `${apiUrl}/${id}`;
  return {
    type: ACTION_TYPES.FETCH_AFSROLE,
    payload: axios.get<IAfsrole>(requestUrl),
  };
};

export const createEntity: ICrudPutAction<IAfsrole> = entity => async dispatch => {
  const result = await dispatch({
    type: ACTION_TYPES.CREATE_AFSROLE,
    payload: axios.post(apiUrl, cleanEntity(entity)),
  });
  dispatch(getEntities());
  return result;
};

export const updateEntity: ICrudPutAction<IAfsrole> = entity => async dispatch => {
  const result = await dispatch({
    type: ACTION_TYPES.UPDATE_AFSROLE,
    payload: axios.put(apiUrl, cleanEntity(entity)),
  });
  return result;
};

export const deleteEntity: ICrudDeleteAction<IAfsrole> = id => async dispatch => {
  const requestUrl = `${apiUrl}/${id}`;
  const result = await dispatch({
    type: ACTION_TYPES.DELETE_AFSROLE,
    payload: axios.delete(requestUrl),
  });
  dispatch(getEntities());
  return result;
};

export const reset = () => ({
  type: ACTION_TYPES.RESET,
});
