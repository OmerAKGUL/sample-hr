import axios from 'axios';
import { ICrudGetAction, ICrudGetAllAction, ICrudPutAction, ICrudDeleteAction } from 'react-jhipster';

import { cleanEntity } from 'app/shared/util/entity-utils';
import { REQUEST, SUCCESS, FAILURE } from 'app/shared/reducers/action-type.util';

import { IAfsroleuser, defaultValue } from 'app/shared/model/afsroleuser.model';

export const ACTION_TYPES = {
  FETCH_AFSROLEUSER_LIST: 'afsroleuser/FETCH_AFSROLEUSER_LIST',
  FETCH_AFSROLEUSER: 'afsroleuser/FETCH_AFSROLEUSER',
  CREATE_AFSROLEUSER: 'afsroleuser/CREATE_AFSROLEUSER',
  UPDATE_AFSROLEUSER: 'afsroleuser/UPDATE_AFSROLEUSER',
  DELETE_AFSROLEUSER: 'afsroleuser/DELETE_AFSROLEUSER',
  RESET: 'afsroleuser/RESET',
};

const initialState = {
  loading: false,
  errorMessage: null,
  entities: [] as ReadonlyArray<IAfsroleuser>,
  entity: defaultValue,
  updating: false,
  updateSuccess: false,
};

export type AfsroleuserState = Readonly<typeof initialState>;

// Reducer

export default (state: AfsroleuserState = initialState, action): AfsroleuserState => {
  switch (action.type) {
    case REQUEST(ACTION_TYPES.FETCH_AFSROLEUSER_LIST):
    case REQUEST(ACTION_TYPES.FETCH_AFSROLEUSER):
      return {
        ...state,
        errorMessage: null,
        updateSuccess: false,
        loading: true,
      };
    case REQUEST(ACTION_TYPES.CREATE_AFSROLEUSER):
    case REQUEST(ACTION_TYPES.UPDATE_AFSROLEUSER):
    case REQUEST(ACTION_TYPES.DELETE_AFSROLEUSER):
      return {
        ...state,
        errorMessage: null,
        updateSuccess: false,
        updating: true,
      };
    case FAILURE(ACTION_TYPES.FETCH_AFSROLEUSER_LIST):
    case FAILURE(ACTION_TYPES.FETCH_AFSROLEUSER):
    case FAILURE(ACTION_TYPES.CREATE_AFSROLEUSER):
    case FAILURE(ACTION_TYPES.UPDATE_AFSROLEUSER):
    case FAILURE(ACTION_TYPES.DELETE_AFSROLEUSER):
      return {
        ...state,
        loading: false,
        updating: false,
        updateSuccess: false,
        errorMessage: action.payload,
      };
    case SUCCESS(ACTION_TYPES.FETCH_AFSROLEUSER_LIST):
      return {
        ...state,
        loading: false,
        entities: action.payload.data,
      };
    case SUCCESS(ACTION_TYPES.FETCH_AFSROLEUSER):
      return {
        ...state,
        loading: false,
        entity: action.payload.data,
      };
    case SUCCESS(ACTION_TYPES.CREATE_AFSROLEUSER):
    case SUCCESS(ACTION_TYPES.UPDATE_AFSROLEUSER):
      return {
        ...state,
        updating: false,
        updateSuccess: true,
        entity: action.payload.data,
      };
    case SUCCESS(ACTION_TYPES.DELETE_AFSROLEUSER):
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

const apiUrl = 'api/afsroleusers';

// Actions

export const getEntities: ICrudGetAllAction<IAfsroleuser> = (page, size, sort) => ({
  type: ACTION_TYPES.FETCH_AFSROLEUSER_LIST,
  payload: axios.get<IAfsroleuser>(`${apiUrl}?cacheBuster=${new Date().getTime()}`),
});

export const getEntity: ICrudGetAction<IAfsroleuser> = id => {
  const requestUrl = `${apiUrl}/${id}`;
  return {
    type: ACTION_TYPES.FETCH_AFSROLEUSER,
    payload: axios.get<IAfsroleuser>(requestUrl),
  };
};

export const createEntity: ICrudPutAction<IAfsroleuser> = entity => async dispatch => {
  const result = await dispatch({
    type: ACTION_TYPES.CREATE_AFSROLEUSER,
    payload: axios.post(apiUrl, cleanEntity(entity)),
  });
  dispatch(getEntities());
  return result;
};

export const updateEntity: ICrudPutAction<IAfsroleuser> = entity => async dispatch => {
  const result = await dispatch({
    type: ACTION_TYPES.UPDATE_AFSROLEUSER,
    payload: axios.put(apiUrl, cleanEntity(entity)),
  });
  return result;
};

export const deleteEntity: ICrudDeleteAction<IAfsroleuser> = id => async dispatch => {
  const requestUrl = `${apiUrl}/${id}`;
  const result = await dispatch({
    type: ACTION_TYPES.DELETE_AFSROLEUSER,
    payload: axios.delete(requestUrl),
  });
  dispatch(getEntities());
  return result;
};

export const reset = () => ({
  type: ACTION_TYPES.RESET,
});
