import { Moment } from 'moment';
import { IAfsystem } from 'app/shared/model/afsystem.model';
import { IAfschedule } from 'app/shared/model/afschedule.model';

export interface IAfetljobtype {
  id?: number;
  jobname?: string;
  apprefid?: string;
  srcdataprofile?: string;
  tgtdataprofile?: string;
  afsid?: number;
  srclocurl?: string;
  tgtlocurl?: string;
  srcconntype?: string;
  tgtconntype?: string;
  createdt?: string;
  updatedt?: string;
  createusr?: number;
  updateusr?: number;
  wfstate?: string;
  wfprocid?: number;
  srcsyscode?: IAfsystem;
  tgtsyscode?: IAfsystem;
  scheduleid?: IAfschedule;
}

export const defaultValue: Readonly<IAfetljobtype> = {};
