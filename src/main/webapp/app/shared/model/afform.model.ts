import { IAfsysmodule } from 'app/shared/model/afsysmodule.model';

export interface IAfform {
  id?: number;
  title?: string;
  descr?: string;
  apprefclsid?: string;
  apprefformid?: string;
  appreflinkurl?: string;
  code?: IAfsysmodule;
}

export const defaultValue: Readonly<IAfform> = {};
