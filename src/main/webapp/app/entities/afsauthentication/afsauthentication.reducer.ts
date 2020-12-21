import axios from 'axios';
import { ICrudGetAction, ICrudGetAllAction, ICrudPutAction, ICrudDeleteAction } from 'react-jhipster';

import { cleanEntity } from 'app/shared/util/entity-utils';
import { REQUEST, SUCCESS, FAILURE } from 'app/shared/reducers/action-type.util';

import { IAfsauthentication, defaultValue } from 'app/shared/model/afsauthentication.model';

export const ACTION_TYPES = {
  FETCH_AFSAUTHENTICATION_LIST: 'afsauthentication/FETCH_AFSAUTHENTICATION_LIST',
  FETCH_AFSAUTHENTICATION: 'afsauthentication/FETCH_AFSAUTHENTICATION',
  CREATE_AFSAUTHENTICATION: 'afsauthentication/CREATE_AFSAUTHENTICATION',
  UPDATE_AFSAUTHENTICATION: 'afsauthentication/UPDATE_AFSAUTHENTICATION',
  DELETE_AFSAUTHENTICATION: 'afsauthentication/DELETE_AFSAUTHENTICATION',
  RESET: 'afsauthentication/RESET',
};

const initialState = {
  loading: false,
  errorMessage: null,
  entities: [] as ReadonlyArray<IAfsauthentication>,
  entity: defaultValue,
  updating: false,
  updateSuccess: false,
};

export type AfsauthenticationState = Readonly<typeof initialState>;

// Reducer

export default (state: AfsauthenticationState = initialState, action): AfsauthenticationState => {
  switch (action.type) {
    case REQUEST(ACTION_TYPES.FETCH_AFSAUTHENTICATION_LIST):
    case REQUEST(ACTION_TYPES.FETCH_AFSAUTHENTICATION):
      return {
        ...state,
        errorMessage: null,
        updateSuccess: false,
        loading: true,
      };
    case REQUEST(ACTION_TYPES.CREATE_AFSAUTHENTICATION):
    case REQUEST(ACTION_TYPES.UPDATE_AFSAUTHENTICATION):
    case REQUEST(ACTION_TYPES.DELETE_AFSAUTHENTICATION):
      return {
        ...state,
        errorMessage: null,
        updateSuccess: false,
        updating: true,
      };
    case FAILURE(ACTION_TYPES.FETCH_AFSAUTHENTICATION_LIST):
    case FAILURE(ACTION_TYPES.FETCH_AFSAUTHENTICATION):
    case FAILURE(ACTION_TYPES.CREATE_AFSAUTHENTICATION):
    case FAILURE(ACTION_TYPES.UPDATE_AFSAUTHENTICATION):
    case FAILURE(ACTION_TYPES.DELETE_AFSAUTHENTICATION):
      return {
        ...state,
        loading: false,
        updating: false,
        updateSuccess: false,
        errorMessage: action.payload,
      };
    case SUCCESS(ACTION_TYPES.FETCH_AFSAUTHENTICATION_LIST):
      return {
        ...state,
        loading: false,
        entities: action.payload.data,
      };
    case SUCCESS(ACTION_TYPES.FETCH_AFSAUTHENTICATION):
      return {
        ...state,
        loading: false,
        entity: action.payload.data,
      };
    case SUCCESS(ACTION_TYPES.CREATE_AFSAUTHENTICATION):
    case SUCCESS(ACTION_TYPES.UPDATE_AFSAUTHENTICATION):
      return {
        ...state,
        updating: false,
        updateSuccess: true,
        entity: action.payload.data,
      };
    case SUCCESS(ACTION_TYPES.DELETE_AFSAUTHENTICATION):
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

const apiUrl = 'api/afsauthentications';

// Actions

export const getEntities: ICrudGetAllAction<IAfsauthentication> = (page, size, sort) => ({
  type: ACTION_TYPES.FETCH_AFSAUTHENTICATION_LIST,
  payload: axios.get<IAfsauthentication>(`${apiUrl}?cacheBuster=${new Date().getTime()}`),
});

export const getEntity: ICrudGetAction<IAfsauthentication> = id => {
  const requestUrl = `${apiUrl}/${id}`;
  return {
    type: ACTION_TYPES.FETCH_AFSAUTHENTICATION,
    payload: axios.get<IAfsauthentication>(requestUrl),
  };
};

export const createEntity: ICrudPutAction<IAfsauthentication> = entity => async dispatch => {
  const result = await dispatch({
    type: ACTION_TYPES.CREATE_AFSAUTHENTICATION,
    payload: axios.post(apiUrl, cleanEntity(entity)),
  });
  dispatch(getEntities());
  return result;
};

export const updateEntity: ICrudPutAction<IAfsauthentication> = entity => async dispatch => {
  const result = await dispatch({
    type: ACTION_TYPES.UPDATE_AFSAUTHENTICATION,
    payload: axios.put(apiUrl, cleanEntity(entity)),
  });
  return result;
};

export const deleteEntity: ICrudDeleteAction<IAfsauthentication> = id => async dispatch => {
  const requestUrl = `${apiUrl}/${id}`;
  const result = await dispatch({
    type: ACTION_TYPES.DELETE_AFSAUTHENTICATION,
    payload: axios.delete(requestUrl),
  });
  dispatch(getEntities());
  return result;
};

export const reset = () => ({
  type: ACTION_TYPES.RESET,
});
