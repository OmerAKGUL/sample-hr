import axios from 'axios';
import { ICrudGetAction, ICrudGetAllAction, ICrudPutAction, ICrudDeleteAction } from 'react-jhipster';

import { cleanEntity } from 'app/shared/util/entity-utils';
import { REQUEST, SUCCESS, FAILURE } from 'app/shared/reducers/action-type.util';

import { IAfworkflow, defaultValue } from 'app/shared/model/afworkflow.model';

export const ACTION_TYPES = {
  FETCH_AFWORKFLOW_LIST: 'afworkflow/FETCH_AFWORKFLOW_LIST',
  FETCH_AFWORKFLOW: 'afworkflow/FETCH_AFWORKFLOW',
  CREATE_AFWORKFLOW: 'afworkflow/CREATE_AFWORKFLOW',
  UPDATE_AFWORKFLOW: 'afworkflow/UPDATE_AFWORKFLOW',
  DELETE_AFWORKFLOW: 'afworkflow/DELETE_AFWORKFLOW',
  RESET: 'afworkflow/RESET',
};

const initialState = {
  loading: false,
  errorMessage: null,
  entities: [] as ReadonlyArray<IAfworkflow>,
  entity: defaultValue,
  updating: false,
  updateSuccess: false,
};

export type AfworkflowState = Readonly<typeof initialState>;

// Reducer

export default (state: AfworkflowState = initialState, action): AfworkflowState => {
  switch (action.type) {
    case REQUEST(ACTION_TYPES.FETCH_AFWORKFLOW_LIST):
    case REQUEST(ACTION_TYPES.FETCH_AFWORKFLOW):
      return {
        ...state,
        errorMessage: null,
        updateSuccess: false,
        loading: true,
      };
    case REQUEST(ACTION_TYPES.CREATE_AFWORKFLOW):
    case REQUEST(ACTION_TYPES.UPDATE_AFWORKFLOW):
    case REQUEST(ACTION_TYPES.DELETE_AFWORKFLOW):
      return {
        ...state,
        errorMessage: null,
        updateSuccess: false,
        updating: true,
      };
    case FAILURE(ACTION_TYPES.FETCH_AFWORKFLOW_LIST):
    case FAILURE(ACTION_TYPES.FETCH_AFWORKFLOW):
    case FAILURE(ACTION_TYPES.CREATE_AFWORKFLOW):
    case FAILURE(ACTION_TYPES.UPDATE_AFWORKFLOW):
    case FAILURE(ACTION_TYPES.DELETE_AFWORKFLOW):
      return {
        ...state,
        loading: false,
        updating: false,
        updateSuccess: false,
        errorMessage: action.payload,
      };
    case SUCCESS(ACTION_TYPES.FETCH_AFWORKFLOW_LIST):
      return {
        ...state,
        loading: false,
        entities: action.payload.data,
      };
    case SUCCESS(ACTION_TYPES.FETCH_AFWORKFLOW):
      return {
        ...state,
        loading: false,
        entity: action.payload.data,
      };
    case SUCCESS(ACTION_TYPES.CREATE_AFWORKFLOW):
    case SUCCESS(ACTION_TYPES.UPDATE_AFWORKFLOW):
      return {
        ...state,
        updating: false,
        updateSuccess: true,
        entity: action.payload.data,
      };
    case SUCCESS(ACTION_TYPES.DELETE_AFWORKFLOW):
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

const apiUrl = 'api/afworkflows';

// Actions

export const getEntities: ICrudGetAllAction<IAfworkflow> = (page, size, sort) => ({
  type: ACTION_TYPES.FETCH_AFWORKFLOW_LIST,
  payload: axios.get<IAfworkflow>(`${apiUrl}?cacheBuster=${new Date().getTime()}`),
});

export const getEntity: ICrudGetAction<IAfworkflow> = id => {
  const requestUrl = `${apiUrl}/${id}`;
  return {
    type: ACTION_TYPES.FETCH_AFWORKFLOW,
    payload: axios.get<IAfworkflow>(requestUrl),
  };
};

export const createEntity: ICrudPutAction<IAfworkflow> = entity => async dispatch => {
  const result = await dispatch({
    type: ACTION_TYPES.CREATE_AFWORKFLOW,
    payload: axios.post(apiUrl, cleanEntity(entity)),
  });
  dispatch(getEntities());
  return result;
};

export const updateEntity: ICrudPutAction<IAfworkflow> = entity => async dispatch => {
  const result = await dispatch({
    type: ACTION_TYPES.UPDATE_AFWORKFLOW,
    payload: axios.put(apiUrl, cleanEntity(entity)),
  });
  return result;
};

export const deleteEntity: ICrudDeleteAction<IAfworkflow> = id => async dispatch => {
  const requestUrl = `${apiUrl}/${id}`;
  const result = await dispatch({
    type: ACTION_TYPES.DELETE_AFWORKFLOW,
    payload: axios.delete(requestUrl),
  });
  dispatch(getEntities());
  return result;
};

export const reset = () => ({
  type: ACTION_TYPES.RESET,
});
