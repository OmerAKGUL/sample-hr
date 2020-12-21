import { IAfsystem } from 'app/shared/model/afsystem.model';

export interface IAfsysmodule {
  id?: number;
  code?: string;
  name?: string;
  descr?: string;
  appsyscode?: IAfsystem;
}

export const defaultValue: Readonly<IAfsysmodule> = {};
