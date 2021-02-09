import { IUser } from 'app/shared/model/user.model';
import { IAfsrole } from 'app/shared/model/afsrole.model';

export interface IAfsroleuser {
  id?: number;
  usrid?: IUser;
  rolecode?: IAfsrole;
}

export const defaultValue: Readonly<IAfsroleuser> = {};
