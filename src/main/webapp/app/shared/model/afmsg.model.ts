import { IAfsystem } from 'app/shared/model/afsystem.model';

export interface IAfmsg {
  id?: number;
  appmsgtype?: string;
  apprefctxinfo?: string;
  appmsgcode?: string;
  langisocode?: string;
  appmsgtxt?: string;
  msgseverity?: number;
  appsyscode?: IAfsystem;
}

export const defaultValue: Readonly<IAfmsg> = {};
