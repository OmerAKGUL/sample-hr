import axios from 'axios';
import { ICrudGetAction, ICrudGetAllAction, ICrudPutAction, ICrudDeleteAction } from 'react-jhipster';

import { cleanEntity } from 'app/shared/util/entity-utils';
import { REQUEST, SUCCESS, FAILURE } from 'app/shared/reducers/action-type.util';

import { IAfwfstate, defaultValue } from 'app/shared/model/afwfstate.model';

export const ACTION_TYPES = {
  FETCH_AFWFSTATE_LIST: 'afwfstate/FETCH_AFWFSTATE_LIST',
  FETCH_AFWFSTATE: 'afwfstate/FETCH_AFWFSTATE',
  CREATE_AFWFSTATE: 'afwfstate/CREATE_AFWFSTATE',
  UPDATE_AFWFSTATE: 'afwfstate/UPDATE_AFWFSTATE',
  DELETE_AFWFSTATE: 'afwfstate/DELETE_AFWFSTATE',
  RESET: 'afwfstate/RESET',
};

const initialState = {
  loading: false,
  errorMessage: null,
  entities: [] as ReadonlyArray<IAfwfstate>,
  entity: defaultValue,
  updating: false,
  updateSuccess: false,
};

export type AfwfstateState = Readonly<typeof initialState>;

// Reducer

export default (state: AfwfstateState = initialState, action): AfwfstateState => {
  switch (action.type) {
    case REQUEST(ACTION_TYPES.FETCH_AFWFSTATE_LIST):
    case REQUEST(ACTION_TYPES.FETCH_AFWFSTATE):
      return {
        ...state,
        errorMessage: null,
        updateSuccess: false,
        loading: true,
      };
    case REQUEST(ACTION_TYPES.CREATE_AFWFSTATE):
    case REQUEST(ACTION_TYPES.UPDATE_AFWFSTATE):
    case REQUEST(ACTION_TYPES.DELETE_AFWFSTATE):
      return {
        ...state,
        errorMessage: null,
        updateSuccess: false,
        updating: true,
      };
    case FAILURE(ACTION_TYPES.FETCH_AFWFSTATE_LIST):
    case FAILURE(ACTION_TYPES.FETCH_AFWFSTATE):
    case FAILURE(ACTION_TYPES.CREATE_AFWFSTATE):
    case FAILURE(ACTION_TYPES.UPDATE_AFWFSTATE):
    case FAILURE(ACTION_TYPES.DELETE_AFWFSTATE):
      return {
        ...state,
        loading: false,
        updating: false,
        updateSuccess: false,
        errorMessage: action.payload,
      };
    case SUCCESS(ACTION_TYPES.FETCH_AFWFSTATE_LIST):
      return {
        ...state,
        loading: false,
        entities: action.payload.data,
      };
    case SUCCESS(ACTION_TYPES.FETCH_AFWFSTATE):
      return {
        ...state,
        loading: false,
        entity: action.payload.data,
      };
    case SUCCESS(ACTION_TYPES.CREATE_AFWFSTATE):
    case SUCCESS(ACTION_TYPES.UPDATE_AFWFSTATE):
      return {
        ...state,
        updating: false,
        updateSuccess: true,
        entity: action.payload.data,
      };
    case SUCCESS(ACTION_TYPES.DELETE_AFWFSTATE):
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

const apiUrl = 'api/afwfstates';

// Actions

export const getEntities: ICrudGetAllAction<IAfwfstate> = (page, size, sort) => ({
  type: ACTION_TYPES.FETCH_AFWFSTATE_LIST,
  payload: axios.get<IAfwfstate>(`${apiUrl}?cacheBuster=${new Date().getTime()}`),
});

export const getEntity: ICrudGetAction<IAfwfstate> = id => {
  const requestUrl = `${apiUrl}/${id}`;
  return {
    type: ACTION_TYPES.FETCH_AFWFSTATE,
    payload: axios.get<IAfwfstate>(requestUrl),
  };
};

export const createEntity: ICrudPutAction<IAfwfstate> = entity => async dispatch => {
  const result = await dispatch({
    type: ACTION_TYPES.CREATE_AFWFSTATE,
    payload: axios.post(apiUrl, cleanEntity(entity)),
  });
  dispatch(getEntities());
  return result;
};

export const updateEntity: ICrudPutAction<IAfwfstate> = entity => async dispatch => {
  const result = await dispatch({
    type: ACTION_TYPES.UPDATE_AFWFSTATE,
    payload: axios.put(apiUrl, cleanEntity(entity)),
  });
  return result;
};

export const deleteEntity: ICrudDeleteAction<IAfwfstate> = id => async dispatch => {
  const requestUrl = `${apiUrl}/${id}`;
  const result = await dispatch({
    type: ACTION_TYPES.DELETE_AFWFSTATE,
    payload: axios.delete(requestUrl),
  });
  dispatch(getEntities());
  return result;
};

export const reset = () => ({
  type: ACTION_TYPES.RESET,
});
