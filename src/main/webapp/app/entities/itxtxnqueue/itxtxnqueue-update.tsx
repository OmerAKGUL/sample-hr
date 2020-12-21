import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { Link, RouteComponentProps } from 'react-router-dom';
import { Button, Row, Col, Label } from 'reactstrap';
import { AvFeedback, AvForm, AvGroup, AvInput, AvField } from 'availity-reactstrap-validation';
import { Translate, translate, ICrudGetAction, ICrudGetAllAction, ICrudPutAction } from 'react-jhipster';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { IRootState } from 'app/shared/reducers';

import VirtualizedSelect from 'react-virtualized-select'

import '../../../../../../node_modules/react-select/dist/react-select.css'
import '../../../../../../node_modules/react-virtualized/styles.css'
import '../../../../../../node_modules/react-virtualized-select/styles.css'

import { IItxcusttype } from 'app/shared/model/itxcusttype.model';
import { getEntities as getItxcusttypes } from 'app/entities/itxcusttype/itxcusttype.reducer';
import { IItxaccounttype } from 'app/shared/model/itxaccounttype.model';
import { getEntities as getItxaccounttypes } from 'app/entities/itxaccounttype/itxaccounttype.reducer';
import { IItxtxntype } from 'app/shared/model/itxtxntype.model';
import { getEntities as getItxtxntypes } from 'app/entities/itxtxntype/itxtxntype.reducer';
import { IItxcurrency } from 'app/shared/model/itxcurrency.model';
import { getEntities as getItxcurrencies } from 'app/entities/itxcurrency/itxcurrency.reducer';
import { IAfetljobtype } from 'app/shared/model/afetljobtype.model';
import { getEntities as getAfetljobtypes } from 'app/entities/afetljobtype/afetljobtype.reducer';
import { getEntity, updateEntity, createEntity, reset } from './itxtxnqueue.reducer';
import { IItxtxnqueue } from 'app/shared/model/itxtxnqueue.model';
import { convertDateTimeFromServer, convertDateTimeToServer, displayDefaultDateTime } from 'app/shared/util/date-utils';
import { mapIdList } from 'app/shared/util/entity-utils';

export interface IItxtxnqueueUpdateProps extends StateProps, DispatchProps, RouteComponentProps<{ id: string }> {}

export const ItxtxnqueueUpdate = (props: IItxtxnqueueUpdateProps) => {
  const [rctypeId, setRctypeId] = useState('0');
  const [sctypeId, setSctypeId] = useState('0');
  const [ratypeId, setRatypeId] = useState('0');
  const [satypeId, setSatypeId] = useState('0');
  const [txntypeidId, setTxntypeidId] = useState('0');
  const [txncurrencyId, setTxncurrencyId] = useState('0');
  const [etljobtypeId, setEtljobtypeId] = useState('0');
  const [isNew, setIsNew] = useState(!props.match.params || !props.match.params.id);


  const { itxtxnqueueEntity, itxcusttypes, itxaccounttypes, itxtxntypes, itxcurrencies, afetljobtypes, loading, updating } = props;

  const [selectedCurrency, setSelectedCurrency] = useState( '' );


  const optionss = Array.from(new Array(itxcurrencies.length), (_, index) => ({
	  label: itxcurrencies[index].name,
	  value: index }));

  const handleClose = () => {
    props.history.push('/modules/itxtxnqueue');
  };

  useEffect(() => {
    if (isNew) {
      props.reset();
    } else {
      props.getEntity(props.match.params.id);
    }

    props.getItxcusttypes();
    props.getItxaccounttypes();
    props.getItxtxntypes();
    props.getItxcurrencies();
    props.getAfetljobtypes();
  }, []);

  useEffect(() => {
    if (props.updateSuccess) {
      handleClose();
    }
  }, [props.updateSuccess]);

  const saveEntity = (event, errors, values) => {
    values.etljobstart = convertDateTimeToServer(values.etljobstart);
    values.createdt = convertDateTimeToServer(values.createdt);
    values.updatedt = convertDateTimeToServer(values.updatedt);
    values.txnorderdate = convertDateTimeToServer(values.txnorderdate);
    values.txnvaluedate = convertDateTimeToServer(values.txnvaluedate);

    if (errors.length === 0) {
      const entity = {
        ...itxtxnqueueEntity,
        ...values,
      };

      if (isNew) {
        props.createEntity(entity);
      } else {
        props.updateEntity(entity);
      }
    }
  };

  return (
    <div>
      <Row className="justify-content-center">
        <Col md="8">
          <h2 id="sampleHrApp.itxtxnqueue.home.createOrEditLabel">
            <Translate contentKey="sampleHrApp.itxtxnqueue.home.createOrEditLabel">Create or edit a Itxtxnqueue</Translate>
          </h2>
        </Col>
      </Row>
      <Row className="justify-content-center">
        <Col md="8">
          {loading ? (
            <p>Loading...</p>
          ) : (
            <AvForm model={isNew ? {} : itxtxnqueueEntity} onSubmit={saveEntity}>
              {!isNew ? (
                <AvGroup>
                  <Label for="itxtxnqueue-id">
                    <Translate contentKey="global.field.id">ID</Translate>
                  </Label>
                  <AvInput id="itxtxnqueue-id" type="text" className="form-control" name="id" required readOnly />
                </AvGroup>
              ) : null}
              <AvGroup>
                <Label id="etljobstartLabel" for="itxtxnqueue-etljobstart">
                  <Translate contentKey="sampleHrApp.itxtxnqueue.etljobstart">Etljobstart</Translate>
                </Label>
                <AvInput
                  id="itxtxnqueue-etljobstart"
                  type="datetime-local"
                  className="form-control"
                  name="etljobstart"
                  placeholder={'YYYY-MM-DD HH:mm'}
                  value={isNew ? displayDefaultDateTime() : convertDateTimeFromServer(props.itxtxnqueueEntity.etljobstart)}
                />
              </AvGroup>
              <AvGroup>
                <Label id="etljobsessiondLabel" for="itxtxnqueue-etljobsessiond">
                  <Translate contentKey="sampleHrApp.itxtxnqueue.etljobsessiond">Etljobsessiond</Translate>
                </Label>
                <AvField id="itxtxnqueue-etljobsessiond" type="text" name="etljobsessiond" />
              </AvGroup>
              <AvGroup>
                <Label id="createdtLabel" for="itxtxnqueue-createdt">
                  <Translate contentKey="sampleHrApp.itxtxnqueue.createdt">Createdt</Translate>
                </Label>
                <AvInput
                  id="itxtxnqueue-createdt"
                  type="datetime-local"
                  className="form-control"
                  name="createdt"
                  placeholder={'YYYY-MM-DD HH:mm'}
                  value={isNew ? displayDefaultDateTime() : convertDateTimeFromServer(props.itxtxnqueueEntity.createdt)}
                />
              </AvGroup>
              <AvGroup>
                <Label id="updatedtLabel" for="itxtxnqueue-updatedt">
                  <Translate contentKey="sampleHrApp.itxtxnqueue.updatedt">Updatedt</Translate>
                </Label>
                <AvInput
                  id="itxtxnqueue-updatedt"
                  type="datetime-local"
                  className="form-control"
                  name="updatedt"
                  placeholder={'YYYY-MM-DD HH:mm'}
                  value={isNew ? displayDefaultDateTime() : convertDateTimeFromServer(props.itxtxnqueueEntity.updatedt)}
                />
              </AvGroup>
              <AvGroup>
                <Label id="createusrLabel" for="itxtxnqueue-createusr">
                  <Translate contentKey="sampleHrApp.itxtxnqueue.createusr">Createusr</Translate>
                </Label>
                <AvField id="itxtxnqueue-createusr" type="string" className="form-control" name="createusr" />
              </AvGroup>
              <AvGroup>
                <Label id="updateusrLabel" for="itxtxnqueue-updateusr">
                  <Translate contentKey="sampleHrApp.itxtxnqueue.updateusr">Updateusr</Translate>
                </Label>
                <AvField id="itxtxnqueue-updateusr" type="string" className="form-control" name="updateusr" />
              </AvGroup>
              <AvGroup>
                <Label id="wfstateLabel" for="itxtxnqueue-wfstate">
                  <Translate contentKey="sampleHrApp.itxtxnqueue.wfstate">Wfstate</Translate>
                </Label>
                <AvField id="itxtxnqueue-wfstate" type="text" name="wfstate" />
              </AvGroup>
              <AvGroup>
                <Label id="wfprocidLabel" for="itxtxnqueue-wfprocid">
                  <Translate contentKey="sampleHrApp.itxtxnqueue.wfprocid">Wfprocid</Translate>
                </Label>
                <AvField id="itxtxnqueue-wfprocid" type="string" className="form-control" name="wfprocid" />
              </AvGroup>
              <AvGroup>
                <Label id="scsyscustidLabel" for="itxtxnqueue-scsyscustid">
                  <Translate contentKey="sampleHrApp.itxtxnqueue.scsyscustid">Scsyscustid</Translate>
                </Label>
                <AvField id="itxtxnqueue-scsyscustid" type="text" name="scsyscustid" />
              </AvGroup>
              <AvGroup>
                <Label id="scnameLabel" for="itxtxnqueue-scname">
                  <Translate contentKey="sampleHrApp.itxtxnqueue.scname">Scname</Translate>
                </Label>
                <AvField id="itxtxnqueue-scname" type="text" name="scname" />
              </AvGroup>
              <AvGroup>
                <Label id="scmidnameLabel" for="itxtxnqueue-scmidname">
                  <Translate contentKey="sampleHrApp.itxtxnqueue.scmidname">Scmidname</Translate>
                </Label>
                <AvField id="itxtxnqueue-scmidname" type="text" name="scmidname" />
              </AvGroup>
              <AvGroup>
                <Label id="scsurnameLabel" for="itxtxnqueue-scsurname">
                  <Translate contentKey="sampleHrApp.itxtxnqueue.scsurname">Scsurname</Translate>
                </Label>
                <AvField id="itxtxnqueue-scsurname" type="text" name="scsurname" />
              </AvGroup>
              <AvGroup>
                <Label id="scbirthdateLabel" for="itxtxnqueue-scbirthdate">
                  <Translate contentKey="sampleHrApp.itxtxnqueue.scbirthdate">Scbirthdate</Translate>
                </Label>
                <AvField id="itxtxnqueue-scbirthdate" type="date" className="form-control" name="scbirthdate" />
              </AvGroup>
              <AvGroup>
                <Label id="sccommtitleLabel" for="itxtxnqueue-sccommtitle">
                  <Translate contentKey="sampleHrApp.itxtxnqueue.sccommtitle">Sccommtitle</Translate>
                </Label>
                <AvField id="itxtxnqueue-sccommtitle" type="text" name="sccommtitle" />
              </AvGroup>
              <AvGroup>
                <Label id="scaddresstypeLabel" for="itxtxnqueue-scaddresstype">
                  <Translate contentKey="sampleHrApp.itxtxnqueue.scaddresstype">Scaddresstype</Translate>
                </Label>
                <AvInput
                  id="itxtxnqueue-scaddresstype"
                  type="select"
                  className="form-control"
                  name="scaddresstype"
                  value={(!isNew && itxtxnqueueEntity.scaddresstype) || 'IKAMET'}
                >
                  <option value="IKAMET">{translate('sampleHrApp.Addrtype.IKAMET')}</option>
                  <option value="IS">{translate('sampleHrApp.Addrtype.IS')}</option>
                  <option value="SIRKET">{translate('sampleHrApp.Addrtype.SIRKET')}</option>
                  <option value="DIGER">{translate('sampleHrApp.Addrtype.DIGER')}</option>
                </AvInput>
              </AvGroup>
              <AvGroup>
                <Label id="scaddressLabel" for="itxtxnqueue-scaddress">
                  <Translate contentKey="sampleHrApp.itxtxnqueue.scaddress">Scaddress</Translate>
                </Label>
                <AvField id="itxtxnqueue-scaddress" type="text" name="scaddress" />
              </AvGroup>
              <AvGroup>
                <Label id="sccityLabel" for="itxtxnqueue-sccity">
                  <Translate contentKey="sampleHrApp.itxtxnqueue.sccity">Sccity</Translate>
                </Label>
                <AvField id="itxtxnqueue-sccity" type="text" name="sccity" />
              </AvGroup>
              <AvGroup>
                <Label id="scnationalityLabel" for="itxtxnqueue-scnationality">
                  <Translate contentKey="sampleHrApp.itxtxnqueue.scnationality">Scnationality</Translate>
                </Label>
                <AvField id="itxtxnqueue-scnationality" type="text" name="scnationality" />
              </AvGroup>
              <AvGroup>
                <Label id="scnationalidLabel" for="itxtxnqueue-scnationalid">
                  <Translate contentKey="sampleHrApp.itxtxnqueue.scnationalid">Scnationalid</Translate>
                </Label>
                <AvField id="itxtxnqueue-scnationalid" type="text" name="scnationalid" />
              </AvGroup>
              <AvGroup>
                <Label id="scidtypeLabel" for="itxtxnqueue-scidtype">
                  <Translate contentKey="sampleHrApp.itxtxnqueue.scidtype">Scidtype</Translate>
                </Label>
                <AvInput
                  id="itxtxnqueue-scidtype"
                  type="select"
                  className="form-control"
                  name="scidtype"
                  value={(!isNew && itxtxnqueueEntity.scidtype) || 'NUFUSCUZDAN'}
                >
                  <option value="NUFUSCUZDAN">{translate('sampleHrApp.Idtype.NUFUSCUZDAN')}</option>
                  <option value="EHLIYET">{translate('sampleHrApp.Idtype.EHLIYET')}</option>
                  <option value="PASAPORT">{translate('sampleHrApp.Idtype.PASAPORT')}</option>
                  <option value="DOGUMSERT">{translate('sampleHrApp.Idtype.DOGUMSERT')}</option>
                  <option value="GOCMENSERT">{translate('sampleHrApp.Idtype.GOCMENSERT')}</option>
                  <option value="DIGER">{translate('sampleHrApp.Idtype.DIGER')}</option>
                </AvInput>
              </AvGroup>
              <AvGroup>
                <Label id="scidnoLabel" for="itxtxnqueue-scidno">
                  <Translate contentKey="sampleHrApp.itxtxnqueue.scidno">Scidno</Translate>
                </Label>
                <AvField id="itxtxnqueue-scidno" type="text" name="scidno" />
              </AvGroup>
              <AvGroup>
                <Label id="scgenderLabel" for="itxtxnqueue-scgender">
                  <Translate contentKey="sampleHrApp.itxtxnqueue.scgender">Scgender</Translate>
                </Label>
                <AvField id="itxtxnqueue-scgender" type="text" name="scgender" />
              </AvGroup>
              <AvGroup>
                <Label id="saorgidLabel" for="itxtxnqueue-saorgid">
                  <Translate contentKey="sampleHrApp.itxtxnqueue.saorgid">Saorgid</Translate>
                </Label>
                <AvField id="itxtxnqueue-saorgid" type="string" className="form-control" name="saorgid" />
              </AvGroup>
              <AvGroup>
                <Label id="saorgnameLabel" for="itxtxnqueue-saorgname">
                  <Translate contentKey="sampleHrApp.itxtxnqueue.saorgname">Saorgname</Translate>
                </Label>
                <AvField id="itxtxnqueue-saorgname" type="text" name="saorgname" />
              </AvGroup>
              <AvGroup>
                <Label id="sasyscodeLabel" for="itxtxnqueue-sasyscode">
                  <Translate contentKey="sampleHrApp.itxtxnqueue.sasyscode">Sasyscode</Translate>
                </Label>
                <AvField id="itxtxnqueue-sasyscode" type="text" name="sasyscode" />
              </AvGroup>
              <AvGroup>
                <Label id="sabranchcodeLabel" for="itxtxnqueue-sabranchcode">
                  <Translate contentKey="sampleHrApp.itxtxnqueue.sabranchcode">Sabranchcode</Translate>
                </Label>
                <AvField id="itxtxnqueue-sabranchcode" type="text" name="sabranchcode" />
              </AvGroup>
              <AvGroup>
                <Label id="sanameLabel" for="itxtxnqueue-saname">
                  <Translate contentKey="sampleHrApp.itxtxnqueue.saname">Saname</Translate>
                </Label>
                <AvField id="itxtxnqueue-saname" type="text" name="saname" />
              </AvGroup>
              <AvGroup>
                <Label id="rcsyscustidLabel" for="itxtxnqueue-rcsyscustid">
                  <Translate contentKey="sampleHrApp.itxtxnqueue.rcsyscustid">Rcsyscustid</Translate>
                </Label>
                <AvField id="itxtxnqueue-rcsyscustid" type="text" name="rcsyscustid" />
              </AvGroup>
              <AvGroup>
                <Label id="rcnameLabel" for="itxtxnqueue-rcname">
                  <Translate contentKey="sampleHrApp.itxtxnqueue.rcname">Rcname</Translate>
                </Label>
                <AvField id="itxtxnqueue-rcname" type="text" name="rcname" />
              </AvGroup>
              <AvGroup>
                <Label id="rcmidnameLabel" for="itxtxnqueue-rcmidname">
                  <Translate contentKey="sampleHrApp.itxtxnqueue.rcmidname">Rcmidname</Translate>
                </Label>
                <AvField id="itxtxnqueue-rcmidname" type="text" name="rcmidname" />
              </AvGroup>
              <AvGroup>
                <Label id="rcsurnameLabel" for="itxtxnqueue-rcsurname">
                  <Translate contentKey="sampleHrApp.itxtxnqueue.rcsurname">Rcsurname</Translate>
                </Label>
                <AvField id="itxtxnqueue-rcsurname" type="text" name="rcsurname" />
              </AvGroup>
              <AvGroup>
                <Label id="rcbirthdateLabel" for="itxtxnqueue-rcbirthdate">
                  <Translate contentKey="sampleHrApp.itxtxnqueue.rcbirthdate">Rcbirthdate</Translate>
                </Label>
                <AvField id="itxtxnqueue-rcbirthdate" type="date" className="form-control" name="rcbirthdate" />
              </AvGroup>
              <AvGroup>
                <Label id="rccommtitleLabel" for="itxtxnqueue-rccommtitle">
                  <Translate contentKey="sampleHrApp.itxtxnqueue.rccommtitle">Rccommtitle</Translate>
                </Label>
                <AvField id="itxtxnqueue-rccommtitle" type="text" name="rccommtitle" />
              </AvGroup>
              <AvGroup>
                <Label id="rcaddresstypeLabel" for="itxtxnqueue-rcaddresstype">
                  <Translate contentKey="sampleHrApp.itxtxnqueue.rcaddresstype">Rcaddresstype</Translate>
                </Label>
                <AvInput
                  id="itxtxnqueue-rcaddresstype"
                  type="select"
                  className="form-control"
                  name="rcaddresstype"
                  value={(!isNew && itxtxnqueueEntity.rcaddresstype) || 'IKAMET'}
                >
                  <option value="IKAMET">{translate('sampleHrApp.Addrtype.IKAMET')}</option>
                  <option value="IS">{translate('sampleHrApp.Addrtype.IS')}</option>
                  <option value="SIRKET">{translate('sampleHrApp.Addrtype.SIRKET')}</option>
                  <option value="DIGER">{translate('sampleHrApp.Addrtype.DIGER')}</option>
                </AvInput>
              </AvGroup>
              <AvGroup>
                <Label id="rcaddressLabel" for="itxtxnqueue-rcaddress">
                  <Translate contentKey="sampleHrApp.itxtxnqueue.rcaddress">Rcaddress</Translate>
                </Label>
                <AvField id="itxtxnqueue-rcaddress" type="text" name="rcaddress" />
              </AvGroup>
              <AvGroup>
                <Label id="rccityLabel" for="itxtxnqueue-rccity">
                  <Translate contentKey="sampleHrApp.itxtxnqueue.rccity">Rccity</Translate>
                </Label>
                <AvField id="itxtxnqueue-rccity" type="text" name="rccity" />
              </AvGroup>
              <AvGroup>
                <Label id="rcnationalityLabel" for="itxtxnqueue-rcnationality">
                  <Translate contentKey="sampleHrApp.itxtxnqueue.rcnationality">Rcnationality</Translate>
                </Label>
                <AvField id="itxtxnqueue-rcnationality" type="text" name="rcnationality" />
              </AvGroup>
              <AvGroup>
                <Label id="rcnationalidLabel" for="itxtxnqueue-rcnationalid">
                  <Translate contentKey="sampleHrApp.itxtxnqueue.rcnationalid">Rcnationalid</Translate>
                </Label>
                <AvField id="itxtxnqueue-rcnationalid" type="text" name="rcnationalid" />
              </AvGroup>
              <AvGroup>
                <Label id="rcidtypeLabel" for="itxtxnqueue-rcidtype">
                  <Translate contentKey="sampleHrApp.itxtxnqueue.rcidtype">Rcidtype</Translate>
                </Label>
                <AvInput
                  id="itxtxnqueue-rcidtype"
                  type="select"
                  className="form-control"
                  name="rcidtype"
                  value={(!isNew && itxtxnqueueEntity.rcidtype) || 'NUFUSCUZDAN'}
                >
                  <option value="NUFUSCUZDAN">{translate('sampleHrApp.Idtype.NUFUSCUZDAN')}</option>
                  <option value="EHLIYET">{translate('sampleHrApp.Idtype.EHLIYET')}</option>
                  <option value="PASAPORT">{translate('sampleHrApp.Idtype.PASAPORT')}</option>
                  <option value="DOGUMSERT">{translate('sampleHrApp.Idtype.DOGUMSERT')}</option>
                  <option value="GOCMENSERT">{translate('sampleHrApp.Idtype.GOCMENSERT')}</option>
                  <option value="DIGER">{translate('sampleHrApp.Idtype.DIGER')}</option>
                </AvInput>
              </AvGroup>
              <AvGroup>
                <Label id="rcidnoLabel" for="itxtxnqueue-rcidno">
                  <Translate contentKey="sampleHrApp.itxtxnqueue.rcidno">Rcidno</Translate>
                </Label>
                <AvField id="itxtxnqueue-rcidno" type="text" name="rcidno" />
              </AvGroup>
              <AvGroup>
                <Label id="rcgenderLabel" for="itxtxnqueue-rcgender">
                  <Translate contentKey="sampleHrApp.itxtxnqueue.rcgender">Rcgender</Translate>
                </Label>
                <AvField id="itxtxnqueue-rcgender" type="text" name="rcgender" />
              </AvGroup>
              <AvGroup>
                <Label id="raorgidLabel" for="itxtxnqueue-raorgid">
                  <Translate contentKey="sampleHrApp.itxtxnqueue.raorgid">Raorgid</Translate>
                </Label>
                <AvField id="itxtxnqueue-raorgid" type="string" className="form-control" name="raorgid" />
              </AvGroup>
              <AvGroup>
                <Label id="raorgnameLabel" for="itxtxnqueue-raorgname">
                  <Translate contentKey="sampleHrApp.itxtxnqueue.raorgname">Raorgname</Translate>
                </Label>
                <AvField id="itxtxnqueue-raorgname" type="text" name="raorgname" />
              </AvGroup>
              <AvGroup>
                <Label id="rasyscodeLabel" for="itxtxnqueue-rasyscode">
                  <Translate contentKey="sampleHrApp.itxtxnqueue.rasyscode">Rasyscode</Translate>
                </Label>
                <AvField id="itxtxnqueue-rasyscode" type="text" name="rasyscode" />
              </AvGroup>
              <AvGroup>
                <Label id="rabranchcodeLabel" for="itxtxnqueue-rabranchcode">
                  <Translate contentKey="sampleHrApp.itxtxnqueue.rabranchcode">Rabranchcode</Translate>
                </Label>
                <AvField id="itxtxnqueue-rabranchcode" type="text" name="rabranchcode" />
              </AvGroup>
              <AvGroup>
                <Label id="ranameLabel" for="itxtxnqueue-raname">
                  <Translate contentKey="sampleHrApp.itxtxnqueue.raname">Raname</Translate>
                </Label>
                <AvField id="itxtxnqueue-raname" type="text" name="raname" />
              </AvGroup>
              <AvGroup>
                <Label id="txnchanneltypeLabel" for="itxtxnqueue-txnchanneltype">
                  <Translate contentKey="sampleHrApp.itxtxnqueue.txnchanneltype">Txnchanneltype</Translate>
                </Label>
                <AvField id="itxtxnqueue-txnchanneltype" type="text" name="txnchanneltype" />
              </AvGroup>
              <AvGroup>
                <Label id="txnsysidLabel" for="itxtxnqueue-txnsysid">
                  <Translate contentKey="sampleHrApp.itxtxnqueue.txnsysid">Txnsysid</Translate>
                </Label>
                <AvField id="itxtxnqueue-txnsysid" type="text" name="txnsysid" />
              </AvGroup>
              <AvGroup>
                <Label id="txnprodtypeLabel" for="itxtxnqueue-txnprodtype">
                  <Translate contentKey="sampleHrApp.itxtxnqueue.txnprodtype">Txnprodtype</Translate>
                </Label>
                <AvInput
                  id="itxtxnqueue-txnprodtype"
                  type="select"
                  className="form-control"
                  name="txnprodtype"
                  value={(!isNew && itxtxnqueueEntity.txnprodtype) || 'YATIRIM'}
                >
                  <option value="YATIRIM">{translate('sampleHrApp.Prodtype.YATIRIM')}</option>
                  <option value="DEGERLIMADEN">{translate('sampleHrApp.Prodtype.DEGERLIMADEN')}</option>
                  <option value="YATIRIMFONU">{translate('sampleHrApp.Prodtype.YATIRIMFONU')}</option>
                  <option value="SGMK">{translate('sampleHrApp.Prodtype.SGMK')}</option>
                  <option value="HISSESENEDI">{translate('sampleHrApp.Prodtype.HISSESENEDI')}</option>
                  <option value="BIREYSELKREDI">{translate('sampleHrApp.Prodtype.BIREYSELKREDI')}</option>
                  <option value="TICARIKREDI">{translate('sampleHrApp.Prodtype.TICARIKREDI')}</option>
                  <option value="KREDIKARTI">{translate('sampleHrApp.Prodtype.KREDIKARTI')}</option>
                  <option value="POSTACEKI">{translate('sampleHrApp.Prodtype.POSTACEKI')}</option>
                  <option value="HGS">{translate('sampleHrApp.Prodtype.HGS')}</option>
                  <option value="FATURA">{translate('sampleHrApp.Prodtype.FATURA')}</option>
                  <option value="VADELIMEVDUAT">{translate('sampleHrApp.Prodtype.VADELIMEVDUAT')}</option>
                  <option value="VADESIZMEVDUAT">{translate('sampleHrApp.Prodtype.VADESIZMEVDUAT')}</option>
                  <option value="WESTERNUNION">{translate('sampleHrApp.Prodtype.WESTERNUNION')}</option>
                </AvInput>
              </AvGroup>
              <AvGroup>
                <Label id="txnprodnameLabel" for="itxtxnqueue-txnprodname">
                  <Translate contentKey="sampleHrApp.itxtxnqueue.txnprodname">Txnprodname</Translate>
                </Label>
                <AvField id="itxtxnqueue-txnprodname" type="text" name="txnprodname" />
              </AvGroup>
              <AvGroup>
                <Label id="txnamountLabel" for="itxtxnqueue-txnamount">
                  <Translate contentKey="sampleHrApp.itxtxnqueue.txnamount">Txnamount</Translate>
                </Label>
                <AvField id="itxtxnqueue-txnamount" type="string" className="form-control" name="txnamount" />
              </AvGroup>
              <AvGroup>
                <Label id="txndescrLabel" for="itxtxnqueue-txndescr">
                  <Translate contentKey="sampleHrApp.itxtxnqueue.txndescr">Txndescr</Translate>
                </Label>
                <AvField id="itxtxnqueue-txndescr" type="text" name="txndescr" />
              </AvGroup>
              <AvGroup>
                <Label id="txnentitiesupdLabel" for="itxtxnqueue-txnentitiesupd">
                  <Translate contentKey="sampleHrApp.itxtxnqueue.txnentitiesupd">Txnentitiesupd</Translate>
                </Label>
                <AvField id="itxtxnqueue-txnentitiesupd" type="text" name="txnentitiesupd" />
              </AvGroup>
              <AvGroup>
                <Label id="txnagentorgidLabel" for="itxtxnqueue-txnagentorgid">
                  <Translate contentKey="sampleHrApp.itxtxnqueue.txnagentorgid">Txnagentorgid</Translate>
                </Label>
                <AvField id="itxtxnqueue-txnagentorgid" type="string" className="form-control" name="txnagentorgid" />
              </AvGroup>
              <AvGroup>
                <Label id="txnagentbrachidLabel" for="itxtxnqueue-txnagentbrachid">
                  <Translate contentKey="sampleHrApp.itxtxnqueue.txnagentbrachid">Txnagentbrachid</Translate>
                </Label>
                <AvField id="itxtxnqueue-txnagentbrachid" type="text" name="txnagentbrachid" />
              </AvGroup>
              <AvGroup>
                <Label id="txnagenttypeLabel" for="itxtxnqueue-txnagenttype">
                  <Translate contentKey="sampleHrApp.itxtxnqueue.txnagenttype">Txnagenttype</Translate>
                </Label>
                <AvField id="itxtxnqueue-txnagenttype" type="text" name="txnagenttype" />
              </AvGroup>
              <AvGroup>
                <Label id="txnagentaccidLabel" for="itxtxnqueue-txnagentaccid">
                  <Translate contentKey="sampleHrApp.itxtxnqueue.txnagentaccid">Txnagentaccid</Translate>
                </Label>
                <AvField id="itxtxnqueue-txnagentaccid" type="text" name="txnagentaccid" />
              </AvGroup>
              <AvGroup>
                <Label id="txnorderdateLabel" for="itxtxnqueue-txnorderdate">
                  <Translate contentKey="sampleHrApp.itxtxnqueue.txnorderdate">Txnorderdate</Translate>
                </Label>
                <AvInput
                  id="itxtxnqueue-txnorderdate"
                  type="datetime-local"
                  className="form-control"
                  name="txnorderdate"
                  placeholder={'YYYY-MM-DD HH:mm'}
                  value={isNew ? displayDefaultDateTime() : convertDateTimeFromServer(props.itxtxnqueueEntity.txnorderdate)}
                />
              </AvGroup>
              <AvGroup>
                <Label id="txnvaluedateLabel" for="itxtxnqueue-txnvaluedate">
                  <Translate contentKey="sampleHrApp.itxtxnqueue.txnvaluedate">Txnvaluedate</Translate>
                </Label>
                <AvInput
                  id="itxtxnqueue-txnvaluedate"
                  type="datetime-local"
                  className="form-control"
                  name="txnvaluedate"
                  placeholder={'YYYY-MM-DD HH:mm'}
                  value={isNew ? displayDefaultDateTime() : convertDateTimeFromServer(props.itxtxnqueueEntity.txnvaluedate)}
                />
              </AvGroup>
              <AvGroup>
                <Label for="itxtxnqueue-rctype">
                  <Translate contentKey="sampleHrApp.itxtxnqueue.rctype">Rctype</Translate>
                </Label>
                <AvInput id="itxtxnqueue-rctype" type="select" className="form-control" name="rctype.id">
                  <option value="" key="0" />
                  {itxcusttypes
                    ? itxcusttypes.map(otherEntity => (
                        <option value={otherEntity.id} key={otherEntity.id}>
                          {otherEntity.name}
                        </option>
                      ))
                    : null}
                </AvInput>
              </AvGroup>
              <AvGroup>
                <Label for="itxtxnqueue-ratype">
                  <Translate contentKey="sampleHrApp.itxtxnqueue.ratype">Ratype</Translate>
                </Label>
                <AvInput id="itxtxnqueue-ratype" type="select" className="form-control" name="ratype.id">
                  <option value="" key="0" />
                  {itxaccounttypes
                    ? itxaccounttypes.map(otherEntity => (
                        <option value={otherEntity.id} key={otherEntity.id}>
                          {otherEntity.name}
                        </option>
                      ))
                    : null}
                </AvInput>
              </AvGroup>
              <AvGroup>
                <Label for="itxtxnqueue-satype">
                  <Translate contentKey="sampleHrApp.itxtxnqueue.satype">Satype</Translate>
                </Label>
                <AvInput id="itxtxnqueue-satype" type="select" className="form-control" name="satype.id">
                  <option value="" key="0" />
                  {itxaccounttypes
                    ? itxaccounttypes.map(otherEntity => (
                        <option value={otherEntity.id} key={otherEntity.id}>
                          {otherEntity.name}
                        </option>
                      ))
                    : null}
                </AvInput>
              </AvGroup>
              <AvGroup>
                <Label for="itxtxnqueue-sctype">
                  <Translate contentKey="sampleHrApp.itxtxnqueue.sctype">Sctype</Translate>
                </Label>
                <AvInput id="itxtxnqueue-sctype" type="select" className="form-control" name="sctype.id">
                  <option value="" key="0" />
                  {itxcusttypes
                    ? itxcusttypes.map(otherEntity => (
                        <option value={otherEntity.id} key={otherEntity.id}>
                          {otherEntity.name}
                        </option>
                      ))
                    : null}
                </AvInput>
              </AvGroup>
              <AvGroup>
                <Label for="itxtxnqueue-txntypeid">
                  <Translate contentKey="sampleHrApp.itxtxnqueue.txntypeid">Txntypeid</Translate>
                </Label>
                <AvInput id="itxtxnqueue-txntypeid" type="select" className="form-control" name="txntypeid.id">
                  <option value="" key="0" />
                  {itxtxntypes
                    ? itxtxntypes.map(otherEntity => (
                        <option value={otherEntity.id} key={otherEntity.id}>
                          {otherEntity.name}
                        </option>
                      ))
                    : null}
                </AvInput>
              </AvGroup>
              <AvGroup>
                <Label for="itxtxnqueue-txncurrency">
                  <Translate contentKey="sampleHrApp.itxtxnqueue.txncurrency">Txncurrency</Translate>
                </Label>
                <AvInput id="itxtxnqueue-txncurrency" type="select" className="form-control" name="txncurrency.id">
                  <option value="" key="0" />
                  {itxcurrencies
                    ? itxcurrencies.map(otherEntity => (
                        <option value={otherEntity.id} key={otherEntity.id}>
                          {otherEntity.name}
                        </option>
                      ))
                    : null}
                </AvInput>
				<VirtualizedSelect
		        options={optionss}
		        onChange={(e) => setSelectedCurrency(e)}
				value={selectedCurrency}
		      />
              </AvGroup>
              <AvGroup>
                <Label for="itxtxnqueue-etljobtype">
                  <Translate contentKey="sampleHrApp.itxtxnqueue.etljobtype">Etljobtype</Translate>
                </Label>
                <AvInput id="itxtxnqueue-etljobtype" type="select" className="form-control" name="etljobtype.id">
                  <option value="" key="0" />
                  {afetljobtypes
                    ? afetljobtypes.map(otherEntity => (
                        <option value={otherEntity.id} key={otherEntity.id}>
                          {otherEntity.jobname}
                        </option>
                      ))
                    : null}
                </AvInput>
              </AvGroup>
              <Button tag={Link} id="cancel-save" to="/itxtxnqueue" replace color="info">
                <FontAwesomeIcon icon="arrow-left" />
                &nbsp;
                <span className="d-none d-md-inline">
                  <Translate contentKey="entity.action.back">Back</Translate>
                </span>
              </Button>
              &nbsp;
              <Button color="primary" id="save-entity" type="submit" disabled={updating}>
                <FontAwesomeIcon icon="save" />
                &nbsp;
                <Translate contentKey="entity.action.save">Save</Translate>
              </Button>
            </AvForm>
          )}
        </Col>
      </Row>
    </div>
  );
};

const mapStateToProps = (storeState: IRootState) => ({
  itxcusttypes: storeState.itxcusttype.entities,
  itxaccounttypes: storeState.itxaccounttype.entities,
  itxtxntypes: storeState.itxtxntype.entities,
  itxcurrencies: storeState.itxcurrency.entities,
  afetljobtypes: storeState.afetljobtype.entities,
  itxtxnqueueEntity: storeState.itxtxnqueue.entity,
  loading: storeState.itxtxnqueue.loading,
  updating: storeState.itxtxnqueue.updating,
  updateSuccess: storeState.itxtxnqueue.updateSuccess,
});

const mapDispatchToProps = {
  getItxcusttypes,
  getItxaccounttypes,
  getItxtxntypes,
  getItxcurrencies,
  getAfetljobtypes,
  getEntity,
  updateEntity,
  createEntity,
  reset,
};

type StateProps = ReturnType<typeof mapStateToProps>;
type DispatchProps = typeof mapDispatchToProps;

export default connect(mapStateToProps, mapDispatchToProps)(ItxtxnqueueUpdate);
