import axios from 'axios';
import { ICrudGetAction, ICrudGetAllAction, ICrudPutAction, ICrudDeleteAction } from 'react-jhipster';

import { cleanEntity } from 'app/shared/util/entity-utils';
import { REQUEST, SUCCESS, FAILURE } from 'app/shared/reducers/action-type.util';

import { IItxtxnqueue, defaultValue } from 'app/shared/model/itxtxnqueue.model';

export const ACTION_TYPES = {
  FETCH_ITXTXNQUEUE_LIST: 'itxtxnqueue/FETCH_ITXTXNQUEUE_LIST',
  FETCH_ITXTXNQUEUE: 'itxtxnqueue/FETCH_ITXTXNQUEUE',
  CREATE_ITXTXNQUEUE: 'itxtxnqueue/CREATE_ITXTXNQUEUE',
  UPDATE_ITXTXNQUEUE: 'itxtxnqueue/UPDATE_ITXTXNQUEUE',
  DELETE_ITXTXNQUEUE: 'itxtxnqueue/DELETE_ITXTXNQUEUE',
  RESET: 'itxtxnqueue/RESET',
};

const initialState = {
  loading: false,
  errorMessage: null,
  entities: [] as ReadonlyArray<IItxtxnqueue>,
  entity: defaultValue,
  updating: false,
  updateSuccess: false,
};

export type ItxtxnqueueState = Readonly<typeof initialState>;

// Reducer

export default (state: ItxtxnqueueState = initialState, action): ItxtxnqueueState => {
  switch (action.type) {
    case REQUEST(ACTION_TYPES.FETCH_ITXTXNQUEUE_LIST):
    case REQUEST(ACTION_TYPES.FETCH_ITXTXNQUEUE):
      return {
        ...state,
        errorMessage: null,
        updateSuccess: false,
        loading: true,
      };
    case REQUEST(ACTION_TYPES.CREATE_ITXTXNQUEUE):
    case REQUEST(ACTION_TYPES.UPDATE_ITXTXNQUEUE):
    case REQUEST(ACTION_TYPES.DELETE_ITXTXNQUEUE):
      return {
        ...state,
        errorMessage: null,
        updateSuccess: false,
        updating: true,
      };
    case FAILURE(ACTION_TYPES.FETCH_ITXTXNQUEUE_LIST):
    case FAILURE(ACTION_TYPES.FETCH_ITXTXNQUEUE):
    case FAILURE(ACTION_TYPES.CREATE_ITXTXNQUEUE):
    case FAILURE(ACTION_TYPES.UPDATE_ITXTXNQUEUE):
    case FAILURE(ACTION_TYPES.DELETE_ITXTXNQUEUE):
      return {
        ...state,
        loading: false,
        updating: false,
        updateSuccess: false,
        errorMessage: action.payload,
      };
    case SUCCESS(ACTION_TYPES.FETCH_ITXTXNQUEUE_LIST):
      return {
        ...state,
        loading: false,
        entities: action.payload.data,
      };
    case SUCCESS(ACTION_TYPES.FETCH_ITXTXNQUEUE):
      return {
        ...state,
        loading: false,
        entity: action.payload.data,
      };
    case SUCCESS(ACTION_TYPES.CREATE_ITXTXNQUEUE):
    case SUCCESS(ACTION_TYPES.UPDATE_ITXTXNQUEUE):
      return {
        ...state,
        updating: false,
        updateSuccess: true,
        entity: action.payload.data,
      };
    case SUCCESS(ACTION_TYPES.DELETE_ITXTXNQUEUE):
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

const apiUrl = 'api/itxtxnqueues';

// Actions

export const getEntities: ICrudGetAllAction<IItxtxnqueue> = (page, size, sort) => ({
  type: ACTION_TYPES.FETCH_ITXTXNQUEUE_LIST,
  payload: axios.get<IItxtxnqueue>(`${apiUrl}?cacheBuster=${new Date().getTime()}`),
});

export const getEntity: ICrudGetAction<IItxtxnqueue> = id => {
  const requestUrl = `${apiUrl}/${id}`;
  return {
    type: ACTION_TYPES.FETCH_ITXTXNQUEUE,
    payload: axios.get<IItxtxnqueue>(requestUrl),
  };
};

export const createEntity: ICrudPutAction<IItxtxnqueue> = entity => async dispatch => {
  const result = await dispatch({
    type: ACTION_TYPES.CREATE_ITXTXNQUEUE,
    payload: axios.post(apiUrl, cleanEntity(entity)),
  });
  dispatch(getEntities());
  return result;
};

export const updateEntity: ICrudPutAction<IItxtxnqueue> = entity => async dispatch => {
  const result = await dispatch({
    type: ACTION_TYPES.UPDATE_ITXTXNQUEUE,
    payload: axios.put(apiUrl, cleanEntity(entity)),
  });
  return result;
};

export const deleteEntity: ICrudDeleteAction<IItxtxnqueue> = id => async dispatch => {
  const requestUrl = `${apiUrl}/${id}`;
  const result = await dispatch({
    type: ACTION_TYPES.DELETE_ITXTXNQUEUE,
    payload: axios.delete(requestUrl),
  });
  dispatch(getEntities());
  return result;
};

export const reset = () => ({
  type: ACTION_TYPES.RESET,
});
