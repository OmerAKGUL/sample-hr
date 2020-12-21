import axios from 'axios';
import { ICrudGetAction, ICrudGetAllAction, ICrudPutAction, ICrudDeleteAction } from 'react-jhipster';

import { cleanEntity } from 'app/shared/util/entity-utils';
import { REQUEST, SUCCESS, FAILURE } from 'app/shared/reducers/action-type.util';

import { IAfformdatafilter, defaultValue } from 'app/shared/model/afformdatafilter.model';

export const ACTION_TYPES = {
  FETCH_AFFORMDATAFILTER_LIST: 'afformdatafilter/FETCH_AFFORMDATAFILTER_LIST',
  FETCH_AFFORMDATAFILTER: 'afformdatafilter/FETCH_AFFORMDATAFILTER',
  CREATE_AFFORMDATAFILTER: 'afformdatafilter/CREATE_AFFORMDATAFILTER',
  UPDATE_AFFORMDATAFILTER: 'afformdatafilter/UPDATE_AFFORMDATAFILTER',
  DELETE_AFFORMDATAFILTER: 'afformdatafilter/DELETE_AFFORMDATAFILTER',
  RESET: 'afformdatafilter/RESET',
};

const initialState = {
  loading: false,
  errorMessage: null,
  entities: [] as ReadonlyArray<IAfformdatafilter>,
  entity: defaultValue,
  updating: false,
  updateSuccess: false,
};

export type AfformdatafilterState = Readonly<typeof initialState>;

// Reducer

export default (state: AfformdatafilterState = initialState, action): AfformdatafilterState => {
  switch (action.type) {
    case REQUEST(ACTION_TYPES.FETCH_AFFORMDATAFILTER_LIST):
    case REQUEST(ACTION_TYPES.FETCH_AFFORMDATAFILTER):
      return {
        ...state,
        errorMessage: null,
        updateSuccess: false,
        loading: true,
      };
    case REQUEST(ACTION_TYPES.CREATE_AFFORMDATAFILTER):
    case REQUEST(ACTION_TYPES.UPDATE_AFFORMDATAFILTER):
    case REQUEST(ACTION_TYPES.DELETE_AFFORMDATAFILTER):
      return {
        ...state,
        errorMessage: null,
        updateSuccess: false,
        updating: true,
      };
    case FAILURE(ACTION_TYPES.FETCH_AFFORMDATAFILTER_LIST):
    case FAILURE(ACTION_TYPES.FETCH_AFFORMDATAFILTER):
    case FAILURE(ACTION_TYPES.CREATE_AFFORMDATAFILTER):
    case FAILURE(ACTION_TYPES.UPDATE_AFFORMDATAFILTER):
    case FAILURE(ACTION_TYPES.DELETE_AFFORMDATAFILTER):
      return {
        ...state,
        loading: false,
        updating: false,
        updateSuccess: false,
        errorMessage: action.payload,
      };
    case SUCCESS(ACTION_TYPES.FETCH_AFFORMDATAFILTER_LIST):
      return {
        ...state,
        loading: false,
        entities: action.payload.data,
      };
    case SUCCESS(ACTION_TYPES.FETCH_AFFORMDATAFILTER):
      return {
        ...state,
        loading: false,
        entity: action.payload.data,
      };
    case SUCCESS(ACTION_TYPES.CREATE_AFFORMDATAFILTER):
    case SUCCESS(ACTION_TYPES.UPDATE_AFFORMDATAFILTER):
      return {
        ...state,
        updating: false,
        updateSuccess: true,
        entity: action.payload.data,
      };
    case SUCCESS(ACTION_TYPES.DELETE_AFFORMDATAFILTER):
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

const apiUrl = 'api/afformdatafilters';

// Actions

export const getEntities: ICrudGetAllAction<IAfformdatafilter> = (page, size, sort) => ({
  type: ACTION_TYPES.FETCH_AFFORMDATAFILTER_LIST,
  payload: axios.get<IAfformdatafilter>(`${apiUrl}?cacheBuster=${new Date().getTime()}`),
});

export const getEntity: ICrudGetAction<IAfformdatafilter> = id => {
  const requestUrl = `${apiUrl}/${id}`;
  return {
    type: ACTION_TYPES.FETCH_AFFORMDATAFILTER,
    payload: axios.get<IAfformdatafilter>(requestUrl),
  };
};

export const createEntity: ICrudPutAction<IAfformdatafilter> = entity => async dispatch => {
  const result = await dispatch({
    type: ACTION_TYPES.CREATE_AFFORMDATAFILTER,
    payload: axios.post(apiUrl, cleanEntity(entity)),
  });
  dispatch(getEntities());
  return result;
};

export const updateEntity: ICrudPutAction<IAfformdatafilter> = entity => async dispatch => {
  const result = await dispatch({
    type: ACTION_TYPES.UPDATE_AFFORMDATAFILTER,
    payload: axios.put(apiUrl, cleanEntity(entity)),
  });
  return result;
};

export const deleteEntity: ICrudDeleteAction<IAfformdatafilter> = id => async dispatch => {
  const requestUrl = `${apiUrl}/${id}`;
  const result = await dispatch({
    type: ACTION_TYPES.DELETE_AFFORMDATAFILTER,
    payload: axios.delete(requestUrl),
  });
  dispatch(getEntities());
  return result;
};

export const reset = () => ({
  type: ACTION_TYPES.RESET,
});
