import axios from 'axios';
import { ICrudGetAction, ICrudGetAllAction, ICrudPutAction, ICrudDeleteAction } from 'react-jhipster';

import { cleanEntity } from 'app/shared/util/entity-utils';
import { REQUEST, SUCCESS, FAILURE } from 'app/shared/reducers/action-type.util';

import { IItxcustaddress, defaultValue } from 'app/shared/model/itxcustaddress.model';

export const ACTION_TYPES = {
  FETCH_ITXCUSTADDRESS_LIST: 'itxcustaddress/FETCH_ITXCUSTADDRESS_LIST',
  FETCH_ITXCUSTADDRESS: 'itxcustaddress/FETCH_ITXCUSTADDRESS',
  CREATE_ITXCUSTADDRESS: 'itxcustaddress/CREATE_ITXCUSTADDRESS',
  UPDATE_ITXCUSTADDRESS: 'itxcustaddress/UPDATE_ITXCUSTADDRESS',
  DELETE_ITXCUSTADDRESS: 'itxcustaddress/DELETE_ITXCUSTADDRESS',
  RESET: 'itxcustaddress/RESET',
};

const initialState = {
  loading: false,
  errorMessage: null,
  entities: [] as ReadonlyArray<IItxcustaddress>,
  entity: defaultValue,
  updating: false,
  updateSuccess: false,
};

export type ItxcustaddressState = Readonly<typeof initialState>;

// Reducer

export default (state: ItxcustaddressState = initialState, action): ItxcustaddressState => {
  switch (action.type) {
    case REQUEST(ACTION_TYPES.FETCH_ITXCUSTADDRESS_LIST):
    case REQUEST(ACTION_TYPES.FETCH_ITXCUSTADDRESS):
      return {
        ...state,
        errorMessage: null,
        updateSuccess: false,
        loading: true,
      };
    case REQUEST(ACTION_TYPES.CREATE_ITXCUSTADDRESS):
    case REQUEST(ACTION_TYPES.UPDATE_ITXCUSTADDRESS):
    case REQUEST(ACTION_TYPES.DELETE_ITXCUSTADDRESS):
      return {
        ...state,
        errorMessage: null,
        updateSuccess: false,
        updating: true,
      };
    case FAILURE(ACTION_TYPES.FETCH_ITXCUSTADDRESS_LIST):
    case FAILURE(ACTION_TYPES.FETCH_ITXCUSTADDRESS):
    case FAILURE(ACTION_TYPES.CREATE_ITXCUSTADDRESS):
    case FAILURE(ACTION_TYPES.UPDATE_ITXCUSTADDRESS):
    case FAILURE(ACTION_TYPES.DELETE_ITXCUSTADDRESS):
      return {
        ...state,
        loading: false,
        updating: false,
        updateSuccess: false,
        errorMessage: action.payload,
      };
    case SUCCESS(ACTION_TYPES.FETCH_ITXCUSTADDRESS_LIST):
      return {
        ...state,
        loading: false,
        entities: action.payload.data,
      };
    case SUCCESS(ACTION_TYPES.FETCH_ITXCUSTADDRESS):
      return {
        ...state,
        loading: false,
        entity: action.payload.data,
      };
    case SUCCESS(ACTION_TYPES.CREATE_ITXCUSTADDRESS):
    case SUCCESS(ACTION_TYPES.UPDATE_ITXCUSTADDRESS):
      return {
        ...state,
        updating: false,
        updateSuccess: true,
        entity: action.payload.data,
      };
    case SUCCESS(ACTION_TYPES.DELETE_ITXCUSTADDRESS):
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

const apiUrl = 'api/itxcustaddresses';

// Actions

export const getEntities: ICrudGetAllAction<IItxcustaddress> = (page, size, sort) => ({
  type: ACTION_TYPES.FETCH_ITXCUSTADDRESS_LIST,
  payload: axios.get<IItxcustaddress>(`${apiUrl}?cacheBuster=${new Date().getTime()}`),
});

export const getEntity: ICrudGetAction<IItxcustaddress> = id => {
  const requestUrl = `${apiUrl}/${id}`;
  return {
    type: ACTION_TYPES.FETCH_ITXCUSTADDRESS,
    payload: axios.get<IItxcustaddress>(requestUrl),
  };
};

export const createEntity: ICrudPutAction<IItxcustaddress> = entity => async dispatch => {
  const result = await dispatch({
    type: ACTION_TYPES.CREATE_ITXCUSTADDRESS,
    payload: axios.post(apiUrl, cleanEntity(entity)),
  });
  dispatch(getEntities());
  return result;
};

export const updateEntity: ICrudPutAction<IItxcustaddress> = entity => async dispatch => {
  const result = await dispatch({
    type: ACTION_TYPES.UPDATE_ITXCUSTADDRESS,
    payload: axios.put(apiUrl, cleanEntity(entity)),
  });
  return result;
};

export const deleteEntity: ICrudDeleteAction<IItxcustaddress> = id => async dispatch => {
  const requestUrl = `${apiUrl}/${id}`;
  const result = await dispatch({
    type: ACTION_TYPES.DELETE_ITXCUSTADDRESS,
    payload: axios.delete(requestUrl),
  });
  dispatch(getEntities());
  return result;
};

export const reset = () => ({
  type: ACTION_TYPES.RESET,
});
