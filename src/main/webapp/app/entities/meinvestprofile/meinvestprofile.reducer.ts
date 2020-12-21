import axios from 'axios';
import { ICrudGetAction, ICrudGetAllAction, ICrudPutAction, ICrudDeleteAction } from 'react-jhipster';

import { cleanEntity } from 'app/shared/util/entity-utils';
import { REQUEST, SUCCESS, FAILURE } from 'app/shared/reducers/action-type.util';

import { IMeinvestprofile, defaultValue } from 'app/shared/model/meinvestprofile.model';

export const ACTION_TYPES = {
  FETCH_MEINVESTPROFILE_LIST: 'meinvestprofile/FETCH_MEINVESTPROFILE_LIST',
  FETCH_MEINVESTPROFILE: 'meinvestprofile/FETCH_MEINVESTPROFILE',
  CREATE_MEINVESTPROFILE: 'meinvestprofile/CREATE_MEINVESTPROFILE',
  UPDATE_MEINVESTPROFILE: 'meinvestprofile/UPDATE_MEINVESTPROFILE',
  DELETE_MEINVESTPROFILE: 'meinvestprofile/DELETE_MEINVESTPROFILE',
  RESET: 'meinvestprofile/RESET',
};

const initialState = {
  loading: false,
  errorMessage: null,
  entities: [] as ReadonlyArray<IMeinvestprofile>,
  entity: defaultValue,
  updating: false,
  updateSuccess: false,
};

export type MeinvestprofileState = Readonly<typeof initialState>;

// Reducer

export default (state: MeinvestprofileState = initialState, action): MeinvestprofileState => {
  switch (action.type) {
    case REQUEST(ACTION_TYPES.FETCH_MEINVESTPROFILE_LIST):
    case REQUEST(ACTION_TYPES.FETCH_MEINVESTPROFILE):
      return {
        ...state,
        errorMessage: null,
        updateSuccess: false,
        loading: true,
      };
    case REQUEST(ACTION_TYPES.CREATE_MEINVESTPROFILE):
    case REQUEST(ACTION_TYPES.UPDATE_MEINVESTPROFILE):
    case REQUEST(ACTION_TYPES.DELETE_MEINVESTPROFILE):
      return {
        ...state,
        errorMessage: null,
        updateSuccess: false,
        updating: true,
      };
    case FAILURE(ACTION_TYPES.FETCH_MEINVESTPROFILE_LIST):
    case FAILURE(ACTION_TYPES.FETCH_MEINVESTPROFILE):
    case FAILURE(ACTION_TYPES.CREATE_MEINVESTPROFILE):
    case FAILURE(ACTION_TYPES.UPDATE_MEINVESTPROFILE):
    case FAILURE(ACTION_TYPES.DELETE_MEINVESTPROFILE):
      return {
        ...state,
        loading: false,
        updating: false,
        updateSuccess: false,
        errorMessage: action.payload,
      };
    case SUCCESS(ACTION_TYPES.FETCH_MEINVESTPROFILE_LIST):
      return {
        ...state,
        loading: false,
        entities: action.payload.data,
      };
    case SUCCESS(ACTION_TYPES.FETCH_MEINVESTPROFILE):
      return {
        ...state,
        loading: false,
        entity: action.payload.data,
      };
    case SUCCESS(ACTION_TYPES.CREATE_MEINVESTPROFILE):
    case SUCCESS(ACTION_TYPES.UPDATE_MEINVESTPROFILE):
      return {
        ...state,
        updating: false,
        updateSuccess: true,
        entity: action.payload.data,
      };
    case SUCCESS(ACTION_TYPES.DELETE_MEINVESTPROFILE):
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

const apiUrl = 'api/meinvestprofiles';

// Actions

export const getEntities: ICrudGetAllAction<IMeinvestprofile> = (page, size, sort) => ({
  type: ACTION_TYPES.FETCH_MEINVESTPROFILE_LIST,
  payload: axios.get<IMeinvestprofile>(`${apiUrl}?cacheBuster=${new Date().getTime()}`),
});

export const getEntity: ICrudGetAction<IMeinvestprofile> = id => {
  const requestUrl = `${apiUrl}/${id}`;
  return {
    type: ACTION_TYPES.FETCH_MEINVESTPROFILE,
    payload: axios.get<IMeinvestprofile>(requestUrl),
  };
};

export const createEntity: ICrudPutAction<IMeinvestprofile> = entity => async dispatch => {
  const result = await dispatch({
    type: ACTION_TYPES.CREATE_MEINVESTPROFILE,
    payload: axios.post(apiUrl, cleanEntity(entity)),
  });
  dispatch(getEntities());
  return result;
};

export const updateEntity: ICrudPutAction<IMeinvestprofile> = entity => async dispatch => {
  const result = await dispatch({
    type: ACTION_TYPES.UPDATE_MEINVESTPROFILE,
    payload: axios.put(apiUrl, cleanEntity(entity)),
  });
  return result;
};

export const deleteEntity: ICrudDeleteAction<IMeinvestprofile> = id => async dispatch => {
  const requestUrl = `${apiUrl}/${id}`;
  const result = await dispatch({
    type: ACTION_TYPES.DELETE_MEINVESTPROFILE,
    payload: axios.delete(requestUrl),
  });
  dispatch(getEntities());
  return result;
};

export const reset = () => ({
  type: ACTION_TYPES.RESET,
});
