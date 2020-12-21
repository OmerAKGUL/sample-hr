import { IAfsrole } from 'app/shared/model/afsrole.model';
import { IAfsysmodule } from 'app/shared/model/afsysmodule.model';

export interface IAfsauthentication {
  id?: number;
  afsid?: number;
  authtype?: string;
  pwdhash?: string;
  secprotocol?: string;
  appauthlink?: string;
  rolecode?: IAfsrole;
  modulecode?: IAfsysmodule;
}

export const defaultValue: Readonly<IAfsauthentication> = {};
