import { Datafiltertype } from 'app/shared/model/enumerations/datafiltertype.model';

export interface IAfdatafilter {
  id?: number;
  code?: string;
  name?: string;
  descr?: string;
  appscript?: string;
  type?: Datafiltertype;
}

export const defaultValue: Readonly<IAfdatafilter> = {};
