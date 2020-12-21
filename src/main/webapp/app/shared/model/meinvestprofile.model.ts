import { IWlmwltype } from 'app/shared/model/wlmwltype.model';
import { IItxtxntype } from 'app/shared/model/itxtxntype.model';
import { IItxcusttype } from 'app/shared/model/itxcusttype.model';
import { IItxaccounttype } from 'app/shared/model/itxaccounttype.model';
import { IAfsystem } from 'app/shared/model/afsystem.model';
import { IJhiuser } from 'app/shared/model/jhiuser.model';
import { IAfsrole } from 'app/shared/model/afsrole.model';
import { Invtype } from 'app/shared/model/enumerations/invtype.model';

export interface IMeinvestprofile {
  id?: number;
  name?: string;
  wlmid?: number;
  afsid?: number;
  invtype?: Invtype;
  processdescr?: string;
  notifgrp1emailaddr?: string;
  notifgrp2emailaddr?: string;
  notifmsgtempl?: string;
  matchwltype?: IWlmwltype;
  matchtxntype?: IItxtxntype;
  matchtxncusttype?: IItxcusttype;
  matchtxnacctype?: IItxaccounttype;
  matchsystemcode?: IAfsystem;
  invrespuserid?: IJhiuser;
  invresprole?: IAfsrole;
}

export const defaultValue: Readonly<IMeinvestprofile> = {};
