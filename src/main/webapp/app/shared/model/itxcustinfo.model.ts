import { Moment } from 'moment';
import { IItxorganization } from 'app/shared/model/itxorganization.model';
import { IItxcusttype } from 'app/shared/model/itxcusttype.model';
import { IAfsystem } from 'app/shared/model/afsystem.model';
import { IItxorgbranch } from 'app/shared/model/itxorgbranch.model';
import { Idtype } from 'app/shared/model/enumerations/idtype.model';

export interface IItxcustinfo {
  id?: number;
  srcsyscustid?: string;
  itxid?: number;
  name?: string;
  midname?: string;
  surname?: string;
  birthdate?: string;
  commtitle?: string;
  addresstype?: string;
  address?: string;
  city?: string;
  nationality?: string;
  nationalid?: string;
  gender?: string;
  createdt?: string;
  updatedt?: string;
  createusr?: number;
  updateusr?: number;
  wfstate?: string;
  wfprocid?: number;
  idtype1?: Idtype;
  idno1?: string;
  idtype2?: Idtype;
  idno2?: string;
  idtype3?: Idtype;
  idno3?: string;
  custorgid?: IItxorganization;
  custtype?: IItxcusttype;
  srcsyscode?: IAfsystem;
  custorgbrachid?: IItxorgbranch;
}

export const defaultValue: Readonly<IItxcustinfo> = {};
