import { Moment } from 'moment';
import { IAfworkflow } from 'app/shared/model/afworkflow.model';

export interface IAfwprocess {
  id?: number;
  entity?: string;
  apprefmngfrm?: string;
  apprefmngdomain?: string;
  createdt?: string;
  updatedt?: string;
  createusr?: number;
  updateusr?: number;
  wfstate?: string;
  wfprocid?: number;
  wfcode?: IAfworkflow;
}

export const defaultValue: Readonly<IAfwprocess> = {};
