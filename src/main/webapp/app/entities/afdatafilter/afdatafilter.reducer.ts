import axios from 'axios';
import { ICrudGetAction, ICrudGetAllAction, ICrudPutAction, ICrudDeleteAction } from 'react-jhipster';

import { cleanEntity } from 'app/shared/util/entity-utils';
import { REQUEST, SUCCESS, FAILURE } from 'app/shared/reducers/action-type.util';

import { IAfdatafilter, defaultValue } from 'app/shared/model/afdatafilter.model';

export const ACTION_TYPES = {
  FETCH_AFDATAFILTER_LIST: 'afdatafilter/FETCH_AFDATAFILTER_LIST',
  FETCH_AFDATAFILTER: 'afdatafilter/FETCH_AFDATAFILTER',
  CREATE_AFDATAFILTER: 'afdatafilter/CREATE_AFDATAFILTER',
  UPDATE_AFDATAFILTER: 'afdatafilter/UPDATE_AFDATAFILTER',
  DELETE_AFDATAFILTER: 'afdatafilter/DELETE_AFDATAFILTER',
  RESET: 'afdatafilter/RESET',
};

const initialState = {
  loading: false,
  errorMessage: null,
  entities: [] as ReadonlyArray<IAfdatafilter>,
  entity: defaultValue,
  updating: false,
  updateSuccess: false,
};

export type AfdatafilterState = Readonly<typeof initialState>;

// Reducer

export default (state: AfdatafilterState = initialState, action): AfdatafilterState => {
  switch (action.type) {
    case REQUEST(ACTION_TYPES.FETCH_AFDATAFILTER_LIST):
    case REQUEST(ACTION_TYPES.FETCH_AFDATAFILTER):
      return {
        ...state,
        errorMessage: null,
        updateSuccess: false,
        loading: true,
      };
    case REQUEST(ACTION_TYPES.CREATE_AFDATAFILTER):
    case REQUEST(ACTION_TYPES.UPDATE_AFDATAFILTER):
    case REQUEST(ACTION_TYPES.DELETE_AFDATAFILTER):
      return {
        ...state,
        errorMessage: null,
        updateSuccess: false,
        updating: true,
      };
    case FAILURE(ACTION_TYPES.FETCH_AFDATAFILTER_LIST):
    case FAILURE(ACTION_TYPES.FETCH_AFDATAFILTER):
    case FAILURE(ACTION_TYPES.CREATE_AFDATAFILTER):
    case FAILURE(ACTION_TYPES.UPDATE_AFDATAFILTER):
    case FAILURE(ACTION_TYPES.DELETE_AFDATAFILTER):
      return {
        ...state,
        loading: false,
        updating: false,
        updateSuccess: false,
        errorMessage: action.payload,
      };
    case SUCCESS(ACTION_TYPES.FETCH_AFDATAFILTER_LIST):
      return {
        ...state,
        loading: false,
        entities: action.payload.data,
      };
    case SUCCESS(ACTION_TYPES.FETCH_AFDATAFILTER):
      return {
        ...state,
        loading: false,
        entity: action.payload.data,
      };
    case SUCCESS(ACTION_TYPES.CREATE_AFDATAFILTER):
    case SUCCESS(ACTION_TYPES.UPDATE_AFDATAFILTER):
      return {
        ...state,
        updating: false,
        updateSuccess: true,
        entity: action.payload.data,
      };
    case SUCCESS(ACTION_TYPES.DELETE_AFDATAFILTER):
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

const apiUrl = 'api/afdatafilters';

// Actions

export const getEntities: ICrudGetAllAction<IAfdatafilter> = (page, size, sort) => ({
  type: ACTION_TYPES.FETCH_AFDATAFILTER_LIST,
  payload: axios.get<IAfdatafilter>(`${apiUrl}?cacheBuster=${new Date().getTime()}`),
});

export const getEntity: ICrudGetAction<IAfdatafilter> = id => {
  const requestUrl = `${apiUrl}/${id}`;
  return {
    type: ACTION_TYPES.FETCH_AFDATAFILTER,
    payload: axios.get<IAfdatafilter>(requestUrl),
  };
};

export const createEntity: ICrudPutAction<IAfdatafilter> = entity => async dispatch => {
  const result = await dispatch({
    type: ACTION_TYPES.CREATE_AFDATAFILTER,
    payload: axios.post(apiUrl, cleanEntity(entity)),
  });
  dispatch(getEntities());
  return result;
};

export const updateEntity: ICrudPutAction<IAfdatafilter> = entity => async dispatch => {
  const result = await dispatch({
    type: ACTION_TYPES.UPDATE_AFDATAFILTER,
    payload: axios.put(apiUrl, cleanEntity(entity)),
  });
  return result;
};

export const deleteEntity: ICrudDeleteAction<IAfdatafilter> = id => async dispatch => {
  const requestUrl = `${apiUrl}/${id}`;
  const result = await dispatch({
    type: ACTION_TYPES.DELETE_AFDATAFILTER,
    payload: axios.delete(requestUrl),
  });
  dispatch(getEntities());
  return result;
};

export const reset = () => ({
  type: ACTION_TYPES.RESET,
});
