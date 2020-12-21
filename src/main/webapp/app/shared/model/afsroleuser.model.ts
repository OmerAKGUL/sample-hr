import { IJhiuser } from 'app/shared/model/jhiuser.model';
import { IAfsrole } from 'app/shared/model/afsrole.model';

export interface IAfsroleuser {
  id?: number;
  usrid?: IJhiuser;
  rolecode?: IAfsrole;
}

export const defaultValue: Readonly<IAfsroleuser> = {};
