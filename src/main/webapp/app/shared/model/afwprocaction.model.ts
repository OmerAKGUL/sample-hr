import { Moment } from 'moment';
import { IAfwprocess } from 'app/shared/model/afwprocess.model';
import { IAfwfaction } from 'app/shared/model/afwfaction.model';

export interface IAfwprocaction {
  id?: number;
  actionnote?: string;
  scheduleddt?: string;
  starteddt?: string;
  finisheddt?: string;
  refdoc1url?: string;
  refdoc2url?: string;
  createdt?: string;
  updatedt?: string;
  createusr?: number;
  updateusr?: number;
  wfstate?: string;
  wfprocid?: number;
  procid?: IAfwprocess;
  actioncode?: IAfwfaction;
}

export const defaultValue: Readonly<IAfwprocaction> = {};
