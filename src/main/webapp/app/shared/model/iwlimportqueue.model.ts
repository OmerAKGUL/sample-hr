import { Moment } from 'moment';
import { IAfetljobtype } from 'app/shared/model/afetljobtype.model';

export interface IIwlimportqueue {
  id?: number;
  etljobstart?: string;
  etljobsessiond?: string;
  srcfileurl?: string;
  tgtfileurl?: string;
  createdt?: string;
  updatedt?: string;
  createusr?: number;
  updateusr?: number;
  wfstate?: string;
  wfprocid?: number;
  etljobtype?: IAfetljobtype;
}

export const defaultValue: Readonly<IIwlimportqueue> = {};
