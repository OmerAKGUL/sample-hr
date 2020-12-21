import { Moment } from 'moment';
import { Periodunit } from 'app/shared/model/enumerations/periodunit.model';

export interface IAfschedule {
  id?: number;
  name?: string;
  descr?: string;
  dtvalidfrom?: string;
  dtvaliduntil?: string;
  periodunit?: Periodunit;
  period?: number;
  createdt?: string;
  updatedt?: string;
  createusr?: number;
  updateusr?: number;
  wfstate?: string;
  wfprocid?: number;
}

export const defaultValue: Readonly<IAfschedule> = {};
