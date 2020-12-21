import axios from 'axios';
import { ICrudGetAction, ICrudGetAllAction, ICrudPutAction, ICrudDeleteAction } from 'react-jhipster';

import { cleanEntity } from 'app/shared/util/entity-utils';
import { REQUEST, SUCCESS, FAILURE } from 'app/shared/reducers/action-type.util';

import { IItxaccounttype, defaultValue } from 'app/shared/model/itxaccounttype.model';

export const ACTION_TYPES = {
  FETCH_ITXACCOUNTTYPE_LIST: 'itxaccounttype/FETCH_ITXACCOUNTTYPE_LIST',
  FETCH_ITXACCOUNTTYPE: 'itxaccounttype/FETCH_ITXACCOUNTTYPE',
  CREATE_ITXACCOUNTTYPE: 'itxaccounttype/CREATE_ITXACCOUNTTYPE',
  UPDATE_ITXACCOUNTTYPE: 'itxaccounttype/UPDATE_ITXACCOUNTTYPE',
  DELETE_ITXACCOUNTTYPE: 'itxaccounttype/DELETE_ITXACCOUNTTYPE',
  RESET: 'itxaccounttype/RESET',
};

const initialState = {
  loading: false,
  errorMessage: null,
  entities: [] as ReadonlyArray<IItxaccounttype>,
  entity: defaultValue,
  updating: false,
  updateSuccess: false,
};

export type ItxaccounttypeState = Readonly<typeof initialState>;

// Reducer

export default (state: ItxaccounttypeState = initialState, action): ItxaccounttypeState => {
  switch (action.type) {
    case REQUEST(ACTION_TYPES.FETCH_ITXACCOUNTTYPE_LIST):
    case REQUEST(ACTION_TYPES.FETCH_ITXACCOUNTTYPE):
      return {
        ...state,
        errorMessage: null,
        updateSuccess: false,
        loading: true,
      };
    case REQUEST(ACTION_TYPES.CREATE_ITXACCOUNTTYPE):
    case REQUEST(ACTION_TYPES.UPDATE_ITXACCOUNTTYPE):
    case REQUEST(ACTION_TYPES.DELETE_ITXACCOUNTTYPE):
      return {
        ...state,
        errorMessage: null,
        updateSuccess: false,
        updating: true,
      };
    case FAILURE(ACTION_TYPES.FETCH_ITXACCOUNTTYPE_LIST):
    case FAILURE(ACTION_TYPES.FETCH_ITXACCOUNTTYPE):
    case FAILURE(ACTION_TYPES.CREATE_ITXACCOUNTTYPE):
    case FAILURE(ACTION_TYPES.UPDATE_ITXACCOUNTTYPE):
    case FAILURE(ACTION_TYPES.DELETE_ITXACCOUNTTYPE):
      return {
        ...state,
        loading: false,
        updating: false,
        updateSuccess: false,
        errorMessage: action.payload,
      };
    case SUCCESS(ACTION_TYPES.FETCH_ITXACCOUNTTYPE_LIST):
      return {
        ...state,
        loading: false,
        entities: action.payload.data,
      };
    case SUCCESS(ACTION_TYPES.FETCH_ITXACCOUNTTYPE):
      return {
        ...state,
        loading: false,
        entity: action.payload.data,
      };
    case SUCCESS(ACTION_TYPES.CREATE_ITXACCOUNTTYPE):
    case SUCCESS(ACTION_TYPES.UPDATE_ITXACCOUNTTYPE):
      return {
        ...state,
        updating: false,
        updateSuccess: true,
        entity: action.payload.data,
      };
    case SUCCESS(ACTION_TYPES.DELETE_ITXACCOUNTTYPE):
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

const apiUrl = 'api/itxaccounttypes';

// Actions

export const getEntities: ICrudGetAllAction<IItxaccounttype> = (page, size, sort) => ({
  type: ACTION_TYPES.FETCH_ITXACCOUNTTYPE_LIST,
  payload: axios.get<IItxaccounttype>(`${apiUrl}?cacheBuster=${new Date().getTime()}`),
});

export const getEntity: ICrudGetAction<IItxaccounttype> = id => {
  const requestUrl = `${apiUrl}/${id}`;
  return {
    type: ACTION_TYPES.FETCH_ITXACCOUNTTYPE,
    payload: axios.get<IItxaccounttype>(requestUrl),
  };
};

export const createEntity: ICrudPutAction<IItxaccounttype> = entity => async dispatch => {
  const result = await dispatch({
    type: ACTION_TYPES.CREATE_ITXACCOUNTTYPE,
    payload: axios.post(apiUrl, cleanEntity(entity)),
  });
  dispatch(getEntities());
  return result;
};

export const updateEntity: ICrudPutAction<IItxaccounttype> = entity => async dispatch => {
  const result = await dispatch({
    type: ACTION_TYPES.UPDATE_ITXACCOUNTTYPE,
    payload: axios.put(apiUrl, cleanEntity(entity)),
  });
  return result;
};

export const deleteEntity: ICrudDeleteAction<IItxaccounttype> = id => async dispatch => {
  const requestUrl = `${apiUrl}/${id}`;
  const result = await dispatch({
    type: ACTION_TYPES.DELETE_ITXACCOUNTTYPE,
    payload: axios.delete(requestUrl),
  });
  dispatch(getEntities());
  return result;
};

export const reset = () => ({
  type: ACTION_TYPES.RESET,
});
