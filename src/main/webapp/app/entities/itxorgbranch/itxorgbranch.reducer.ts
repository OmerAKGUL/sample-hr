import axios from 'axios';
import { ICrudGetAction, ICrudGetAllAction, ICrudPutAction, ICrudDeleteAction } from 'react-jhipster';

import { cleanEntity } from 'app/shared/util/entity-utils';
import { REQUEST, SUCCESS, FAILURE } from 'app/shared/reducers/action-type.util';

import { IItxorgbranch, defaultValue } from 'app/shared/model/itxorgbranch.model';

export const ACTION_TYPES = {
  FETCH_ITXORGBRANCH_LIST: 'itxorgbranch/FETCH_ITXORGBRANCH_LIST',
  FETCH_ITXORGBRANCH: 'itxorgbranch/FETCH_ITXORGBRANCH',
  CREATE_ITXORGBRANCH: 'itxorgbranch/CREATE_ITXORGBRANCH',
  UPDATE_ITXORGBRANCH: 'itxorgbranch/UPDATE_ITXORGBRANCH',
  DELETE_ITXORGBRANCH: 'itxorgbranch/DELETE_ITXORGBRANCH',
  RESET: 'itxorgbranch/RESET',
};

const initialState = {
  loading: false,
  errorMessage: null,
  entities: [] as ReadonlyArray<IItxorgbranch>,
  entity: defaultValue,
  updating: false,
  updateSuccess: false,
};

export type ItxorgbranchState = Readonly<typeof initialState>;

// Reducer

export default (state: ItxorgbranchState = initialState, action): ItxorgbranchState => {
  switch (action.type) {
    case REQUEST(ACTION_TYPES.FETCH_ITXORGBRANCH_LIST):
    case REQUEST(ACTION_TYPES.FETCH_ITXORGBRANCH):
      return {
        ...state,
        errorMessage: null,
        updateSuccess: false,
        loading: true,
      };
    case REQUEST(ACTION_TYPES.CREATE_ITXORGBRANCH):
    case REQUEST(ACTION_TYPES.UPDATE_ITXORGBRANCH):
    case REQUEST(ACTION_TYPES.DELETE_ITXORGBRANCH):
      return {
        ...state,
        errorMessage: null,
        updateSuccess: false,
        updating: true,
      };
    case FAILURE(ACTION_TYPES.FETCH_ITXORGBRANCH_LIST):
    case FAILURE(ACTION_TYPES.FETCH_ITXORGBRANCH):
    case FAILURE(ACTION_TYPES.CREATE_ITXORGBRANCH):
    case FAILURE(ACTION_TYPES.UPDATE_ITXORGBRANCH):
    case FAILURE(ACTION_TYPES.DELETE_ITXORGBRANCH):
      return {
        ...state,
        loading: false,
        updating: false,
        updateSuccess: false,
        errorMessage: action.payload,
      };
    case SUCCESS(ACTION_TYPES.FETCH_ITXORGBRANCH_LIST):
      return {
        ...state,
        loading: false,
        entities: action.payload.data,
      };
    case SUCCESS(ACTION_TYPES.FETCH_ITXORGBRANCH):
      return {
        ...state,
        loading: false,
        entity: action.payload.data,
      };
    case SUCCESS(ACTION_TYPES.CREATE_ITXORGBRANCH):
    case SUCCESS(ACTION_TYPES.UPDATE_ITXORGBRANCH):
      return {
        ...state,
        updating: false,
        updateSuccess: true,
        entity: action.payload.data,
      };
    case SUCCESS(ACTION_TYPES.DELETE_ITXORGBRANCH):
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

const apiUrl = 'api/itxorgbranches';

// Actions

export const getEntities: ICrudGetAllAction<IItxorgbranch> = (page, size, sort) => ({
  type: ACTION_TYPES.FETCH_ITXORGBRANCH_LIST,
  payload: axios.get<IItxorgbranch>(`${apiUrl}?cacheBuster=${new Date().getTime()}`),
});

export const getEntity: ICrudGetAction<IItxorgbranch> = id => {
  const requestUrl = `${apiUrl}/${id}`;
  return {
    type: ACTION_TYPES.FETCH_ITXORGBRANCH,
    payload: axios.get<IItxorgbranch>(requestUrl),
  };
};

export const createEntity: ICrudPutAction<IItxorgbranch> = entity => async dispatch => {
  const result = await dispatch({
    type: ACTION_TYPES.CREATE_ITXORGBRANCH,
    payload: axios.post(apiUrl, cleanEntity(entity)),
  });
  dispatch(getEntities());
  return result;
};

export const updateEntity: ICrudPutAction<IItxorgbranch> = entity => async dispatch => {
  const result = await dispatch({
    type: ACTION_TYPES.UPDATE_ITXORGBRANCH,
    payload: axios.put(apiUrl, cleanEntity(entity)),
  });
  return result;
};

export const deleteEntity: ICrudDeleteAction<IItxorgbranch> = id => async dispatch => {
  const requestUrl = `${apiUrl}/${id}`;
  const result = await dispatch({
    type: ACTION_TYPES.DELETE_ITXORGBRANCH,
    payload: axios.delete(requestUrl),
  });
  dispatch(getEntities());
  return result;
};

export const reset = () => ({
  type: ACTION_TYPES.RESET,
});
