import { Moment } from 'moment';
import { IAfworkflow } from 'app/shared/model/afworkflow.model';

export interface IAfwfstate {
  id?: number;
  code?: string;
  name?: string;
  descr?: string;
  apprefhandlerfrm?: string;
  apprefhandlerdom?: string;
  createdt?: string;
  updatedt?: string;
  createusr?: number;
  updateusr?: number;
  wfstate?: string;
  wfprocid?: number;
  wfcode?: IAfworkflow;
}

export const defaultValue: Readonly<IAfwfstate> = {};
