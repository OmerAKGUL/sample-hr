import axios from 'axios';
import { ICrudGetAction, ICrudGetAllAction, ICrudPutAction, ICrudDeleteAction } from 'react-jhipster';

import { cleanEntity } from 'app/shared/util/entity-utils';
import { REQUEST, SUCCESS, FAILURE } from 'app/shared/reducers/action-type.util';

import { IIwlimportqueue, defaultValue } from 'app/shared/model/iwlimportqueue.model';

export const ACTION_TYPES = {
  FETCH_IWLIMPORTQUEUE_LIST: 'iwlimportqueue/FETCH_IWLIMPORTQUEUE_LIST',
  FETCH_IWLIMPORTQUEUE: 'iwlimportqueue/FETCH_IWLIMPORTQUEUE',
  CREATE_IWLIMPORTQUEUE: 'iwlimportqueue/CREATE_IWLIMPORTQUEUE',
  UPDATE_IWLIMPORTQUEUE: 'iwlimportqueue/UPDATE_IWLIMPORTQUEUE',
  DELETE_IWLIMPORTQUEUE: 'iwlimportqueue/DELETE_IWLIMPORTQUEUE',
  RESET: 'iwlimportqueue/RESET',
};

const initialState = {
  loading: false,
  errorMessage: null,
  entities: [] as ReadonlyArray<IIwlimportqueue>,
  entity: defaultValue,
  updating: false,
  updateSuccess: false,
};

export type IwlimportqueueState = Readonly<typeof initialState>;

// Reducer

export default (state: IwlimportqueueState = initialState, action): IwlimportqueueState => {
  switch (action.type) {
    case REQUEST(ACTION_TYPES.FETCH_IWLIMPORTQUEUE_LIST):
    case REQUEST(ACTION_TYPES.FETCH_IWLIMPORTQUEUE):
      return {
        ...state,
        errorMessage: null,
        updateSuccess: false,
        loading: true,
      };
    case REQUEST(ACTION_TYPES.CREATE_IWLIMPORTQUEUE):
    case REQUEST(ACTION_TYPES.UPDATE_IWLIMPORTQUEUE):
    case REQUEST(ACTION_TYPES.DELETE_IWLIMPORTQUEUE):
      return {
        ...state,
        errorMessage: null,
        updateSuccess: false,
        updating: true,
      };
    case FAILURE(ACTION_TYPES.FETCH_IWLIMPORTQUEUE_LIST):
    case FAILURE(ACTION_TYPES.FETCH_IWLIMPORTQUEUE):
    case FAILURE(ACTION_TYPES.CREATE_IWLIMPORTQUEUE):
    case FAILURE(ACTION_TYPES.UPDATE_IWLIMPORTQUEUE):
    case FAILURE(ACTION_TYPES.DELETE_IWLIMPORTQUEUE):
      return {
        ...state,
        loading: false,
        updating: false,
        updateSuccess: false,
        errorMessage: action.payload,
      };
    case SUCCESS(ACTION_TYPES.FETCH_IWLIMPORTQUEUE_LIST):
      return {
        ...state,
        loading: false,
        entities: action.payload.data,
      };
    case SUCCESS(ACTION_TYPES.FETCH_IWLIMPORTQUEUE):
      return {
        ...state,
        loading: false,
        entity: action.payload.data,
      };
    case SUCCESS(ACTION_TYPES.CREATE_IWLIMPORTQUEUE):
    case SUCCESS(ACTION_TYPES.UPDATE_IWLIMPORTQUEUE):
      return {
        ...state,
        updating: false,
        updateSuccess: true,
        entity: action.payload.data,
      };
    case SUCCESS(ACTION_TYPES.DELETE_IWLIMPORTQUEUE):
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

const apiUrl = 'api/iwlimportqueues';

// Actions

export const getEntities: ICrudGetAllAction<IIwlimportqueue> = (page, size, sort) => ({
  type: ACTION_TYPES.FETCH_IWLIMPORTQUEUE_LIST,
  payload: axios.get<IIwlimportqueue>(`${apiUrl}?cacheBuster=${new Date().getTime()}`),
});

export const getEntity: ICrudGetAction<IIwlimportqueue> = id => {
  const requestUrl = `${apiUrl}/${id}`;
  return {
    type: ACTION_TYPES.FETCH_IWLIMPORTQUEUE,
    payload: axios.get<IIwlimportqueue>(requestUrl),
  };
};

export const createEntity: ICrudPutAction<IIwlimportqueue> = entity => async dispatch => {
  const result = await dispatch({
    type: ACTION_TYPES.CREATE_IWLIMPORTQUEUE,
    payload: axios.post(apiUrl, cleanEntity(entity)),
  });
  dispatch(getEntities());
  return result;
};

export const updateEntity: ICrudPutAction<IIwlimportqueue> = entity => async dispatch => {
  const result = await dispatch({
    type: ACTION_TYPES.UPDATE_IWLIMPORTQUEUE,
    payload: axios.put(apiUrl, cleanEntity(entity)),
  });
  return result;
};

export const deleteEntity: ICrudDeleteAction<IIwlimportqueue> = id => async dispatch => {
  const requestUrl = `${apiUrl}/${id}`;
  const result = await dispatch({
    type: ACTION_TYPES.DELETE_IWLIMPORTQUEUE,
    payload: axios.delete(requestUrl),
  });
  dispatch(getEntities());
  return result;
};

export const reset = () => ({
  type: ACTION_TYPES.RESET,
});
