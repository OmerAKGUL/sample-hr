import { Moment } from 'moment';
import { Paramtype } from 'app/shared/model/enumerations/paramtype.model';
import { Valtype } from 'app/shared/model/enumerations/valtype.model';

export interface IAfparamval {
  id?: number;
  code?: string;
  idxno?: number;
  paramtype?: Paramtype;
  paramgrpname?: string;
  valuetype?: Valtype;
  valueformat?: string;
  valueunit?: string;
  value?: string;
  descr?: string;
  ownersys?: string;
  createdt?: string;
  updatedt?: string;
  createusr?: number;
  updateusr?: number;
  wfstate?: string;
  wfprocid?: number;
}

export const defaultValue: Readonly<IAfparamval> = {};
