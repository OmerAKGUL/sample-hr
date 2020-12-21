import axios from 'axios';
import { ICrudGetAction, ICrudGetAllAction, ICrudPutAction, ICrudDeleteAction } from 'react-jhipster';

import { cleanEntity } from 'app/shared/util/entity-utils';
import { REQUEST, SUCCESS, FAILURE } from 'app/shared/reducers/action-type.util';

import { IItxcusttype, defaultValue } from 'app/shared/model/itxcusttype.model';

export const ACTION_TYPES = {
  FETCH_ITXCUSTTYPE_LIST: 'itxcusttype/FETCH_ITXCUSTTYPE_LIST',
  FETCH_ITXCUSTTYPE: 'itxcusttype/FETCH_ITXCUSTTYPE',
  CREATE_ITXCUSTTYPE: 'itxcusttype/CREATE_ITXCUSTTYPE',
  UPDATE_ITXCUSTTYPE: 'itxcusttype/UPDATE_ITXCUSTTYPE',
  DELETE_ITXCUSTTYPE: 'itxcusttype/DELETE_ITXCUSTTYPE',
  RESET: 'itxcusttype/RESET',
};

const initialState = {
  loading: false,
  errorMessage: null,
  entities: [] as ReadonlyArray<IItxcusttype>,
  entity: defaultValue,
  updating: false,
  updateSuccess: false,
};

export type ItxcusttypeState = Readonly<typeof initialState>;

// Reducer

export default (state: ItxcusttypeState = initialState, action): ItxcusttypeState => {
  switch (action.type) {
    case REQUEST(ACTION_TYPES.FETCH_ITXCUSTTYPE_LIST):
    case REQUEST(ACTION_TYPES.FETCH_ITXCUSTTYPE):
      return {
        ...state,
        errorMessage: null,
        updateSuccess: false,
        loading: true,
      };
    case REQUEST(ACTION_TYPES.CREATE_ITXCUSTTYPE):
    case REQUEST(ACTION_TYPES.UPDATE_ITXCUSTTYPE):
    case REQUEST(ACTION_TYPES.DELETE_ITXCUSTTYPE):
      return {
        ...state,
        errorMessage: null,
        updateSuccess: false,
        updating: true,
      };
    case FAILURE(ACTION_TYPES.FETCH_ITXCUSTTYPE_LIST):
    case FAILURE(ACTION_TYPES.FETCH_ITXCUSTTYPE):
    case FAILURE(ACTION_TYPES.CREATE_ITXCUSTTYPE):
    case FAILURE(ACTION_TYPES.UPDATE_ITXCUSTTYPE):
    case FAILURE(ACTION_TYPES.DELETE_ITXCUSTTYPE):
      return {
        ...state,
        loading: false,
        updating: false,
        updateSuccess: false,
        errorMessage: action.payload,
      };
    case SUCCESS(ACTION_TYPES.FETCH_ITXCUSTTYPE_LIST):
      return {
        ...state,
        loading: false,
        entities: action.payload.data,
      };
    case SUCCESS(ACTION_TYPES.FETCH_ITXCUSTTYPE):
      return {
        ...state,
        loading: false,
        entity: action.payload.data,
      };
    case SUCCESS(ACTION_TYPES.CREATE_ITXCUSTTYPE):
    case SUCCESS(ACTION_TYPES.UPDATE_ITXCUSTTYPE):
      return {
        ...state,
        updating: false,
        updateSuccess: true,
        entity: action.payload.data,
      };
    case SUCCESS(ACTION_TYPES.DELETE_ITXCUSTTYPE):
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

const apiUrl = 'api/itxcusttypes';

// Actions

export const getEntities: ICrudGetAllAction<IItxcusttype> = (page, size, sort) => ({
  type: ACTION_TYPES.FETCH_ITXCUSTTYPE_LIST,
  payload: axios.get<IItxcusttype>(`${apiUrl}?cacheBuster=${new Date().getTime()}`),
});

export const getEntity: ICrudGetAction<IItxcusttype> = id => {
  const requestUrl = `${apiUrl}/${id}`;
  return {
    type: ACTION_TYPES.FETCH_ITXCUSTTYPE,
    payload: axios.get<IItxcusttype>(requestUrl),
  };
};

export const createEntity: ICrudPutAction<IItxcusttype> = entity => async dispatch => {
  const result = await dispatch({
    type: ACTION_TYPES.CREATE_ITXCUSTTYPE,
    payload: axios.post(apiUrl, cleanEntity(entity)),
  });
  dispatch(getEntities());
  return result;
};

export const updateEntity: ICrudPutAction<IItxcusttype> = entity => async dispatch => {
  const result = await dispatch({
    type: ACTION_TYPES.UPDATE_ITXCUSTTYPE,
    payload: axios.put(apiUrl, cleanEntity(entity)),
  });
  return result;
};

export const deleteEntity: ICrudDeleteAction<IItxcusttype> = id => async dispatch => {
  const requestUrl = `${apiUrl}/${id}`;
  const result = await dispatch({
    type: ACTION_TYPES.DELETE_ITXCUSTTYPE,
    payload: axios.delete(requestUrl),
  });
  dispatch(getEntities());
  return result;
};

export const reset = () => ({
  type: ACTION_TYPES.RESET,
});
