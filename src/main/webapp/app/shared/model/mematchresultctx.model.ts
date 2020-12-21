import { Moment } from 'moment';
import { IMematchresult } from 'app/shared/model/mematchresult.model';
import { IMematchmethod } from 'app/shared/model/mematchmethod.model';

export interface IMematchresultctx {
  id?: number;
  memid?: number;
  matchtime?: string;
  matchmtdmsg?: string;
  matchctxdata?: string;
  matchid?: IMematchresult;
  matchmtdcode?: IMematchmethod;
}

export const defaultValue: Readonly<IMematchresultctx> = {};
