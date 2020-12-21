import { Systype } from 'app/shared/model/enumerations/systype.model';

export interface IAfsystem {
  id?: number;
  code?: string;
  name?: string;
  descr?: string;
  apprefcode?: string;
  systype?: Systype;
  appdomaincode?: string;
  connecttype?: string;
  connectstr?: string;
}

export const defaultValue: Readonly<IAfsystem> = {};
