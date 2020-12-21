import axios from 'axios';
import { ICrudGetAction, ICrudGetAllAction, ICrudPutAction, ICrudDeleteAction } from 'react-jhipster';

import { cleanEntity } from 'app/shared/util/entity-utils';
import { REQUEST, SUCCESS, FAILURE } from 'app/shared/reducers/action-type.util';

import { IAfetljobtype, defaultValue } from 'app/shared/model/afetljobtype.model';

export const ACTION_TYPES = {
  FETCH_AFETLJOBTYPE_LIST: 'afetljobtype/FETCH_AFETLJOBTYPE_LIST',
  FETCH_AFETLJOBTYPE: 'afetljobtype/FETCH_AFETLJOBTYPE',
  CREATE_AFETLJOBTYPE: 'afetljobtype/CREATE_AFETLJOBTYPE',
  UPDATE_AFETLJOBTYPE: 'afetljobtype/UPDATE_AFETLJOBTYPE',
  DELETE_AFETLJOBTYPE: 'afetljobtype/DELETE_AFETLJOBTYPE',
  RESET: 'afetljobtype/RESET',
};

const initialState = {
  loading: false,
  errorMessage: null,
  entities: [] as ReadonlyArray<IAfetljobtype>,
  entity: defaultValue,
  updating: false,
  updateSuccess: false,
};

export type AfetljobtypeState = Readonly<typeof initialState>;

// Reducer

export default (state: AfetljobtypeState = initialState, action): AfetljobtypeState => {
  switch (action.type) {
    case REQUEST(ACTION_TYPES.FETCH_AFETLJOBTYPE_LIST):
    case REQUEST(ACTION_TYPES.FETCH_AFETLJOBTYPE):
      return {
        ...state,
        errorMessage: null,
        updateSuccess: false,
        loading: true,
      };
    case REQUEST(ACTION_TYPES.CREATE_AFETLJOBTYPE):
    case REQUEST(ACTION_TYPES.UPDATE_AFETLJOBTYPE):
    case REQUEST(ACTION_TYPES.DELETE_AFETLJOBTYPE):
      return {
        ...state,
        errorMessage: null,
        updateSuccess: false,
        updating: true,
      };
    case FAILURE(ACTION_TYPES.FETCH_AFETLJOBTYPE_LIST):
    case FAILURE(ACTION_TYPES.FETCH_AFETLJOBTYPE):
    case FAILURE(ACTION_TYPES.CREATE_AFETLJOBTYPE):
    case FAILURE(ACTION_TYPES.UPDATE_AFETLJOBTYPE):
    case FAILURE(ACTION_TYPES.DELETE_AFETLJOBTYPE):
      return {
        ...state,
        loading: false,
        updating: false,
        updateSuccess: false,
        errorMessage: action.payload,
      };
    case SUCCESS(ACTION_TYPES.FETCH_AFETLJOBTYPE_LIST):
      return {
        ...state,
        loading: false,
        entities: action.payload.data,
      };
    case SUCCESS(ACTION_TYPES.FETCH_AFETLJOBTYPE):
      return {
        ...state,
        loading: false,
        entity: action.payload.data,
      };
    case SUCCESS(ACTION_TYPES.CREATE_AFETLJOBTYPE):
    case SUCCESS(ACTION_TYPES.UPDATE_AFETLJOBTYPE):
      return {
        ...state,
        updating: false,
        updateSuccess: true,
        entity: action.payload.data,
      };
    case SUCCESS(ACTION_TYPES.DELETE_AFETLJOBTYPE):
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

const apiUrl = 'api/afetljobtypes';

// Actions

export const getEntities: ICrudGetAllAction<IAfetljobtype> = (page, size, sort) => ({
  type: ACTION_TYPES.FETCH_AFETLJOBTYPE_LIST,
  payload: axios.get<IAfetljobtype>(`${apiUrl}?cacheBuster=${new Date().getTime()}`),
});

export const getEntity: ICrudGetAction<IAfetljobtype> = id => {
  const requestUrl = `${apiUrl}/${id}`;
  return {
    type: ACTION_TYPES.FETCH_AFETLJOBTYPE,
    payload: axios.get<IAfetljobtype>(requestUrl),
  };
};

export const createEntity: ICrudPutAction<IAfetljobtype> = entity => async dispatch => {
  const result = await dispatch({
    type: ACTION_TYPES.CREATE_AFETLJOBTYPE,
    payload: axios.post(apiUrl, cleanEntity(entity)),
  });
  dispatch(getEntities());
  return result;
};

export const updateEntity: ICrudPutAction<IAfetljobtype> = entity => async dispatch => {
  const result = await dispatch({
    type: ACTION_TYPES.UPDATE_AFETLJOBTYPE,
    payload: axios.put(apiUrl, cleanEntity(entity)),
  });
  return result;
};

export const deleteEntity: ICrudDeleteAction<IAfetljobtype> = id => async dispatch => {
  const requestUrl = `${apiUrl}/${id}`;
  const result = await dispatch({
    type: ACTION_TYPES.DELETE_AFETLJOBTYPE,
    payload: axios.delete(requestUrl),
  });
  dispatch(getEntities());
  return result;
};

export const reset = () => ({
  type: ACTION_TYPES.RESET,
});
