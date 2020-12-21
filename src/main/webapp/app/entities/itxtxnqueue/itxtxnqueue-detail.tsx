import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { Link, RouteComponentProps } from 'react-router-dom';
import { Button, Row, Col } from 'reactstrap';
import { Translate, ICrudGetAction, TextFormat } from 'react-jhipster';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { IRootState } from 'app/shared/reducers';
import { getEntity } from './itxtxnqueue.reducer';
import { IItxtxnqueue } from 'app/shared/model/itxtxnqueue.model';
import { APP_DATE_FORMAT, APP_LOCAL_DATE_FORMAT } from 'app/config/constants';

export interface IItxtxnqueueDetailProps extends StateProps, DispatchProps, RouteComponentProps<{ id: string }> {}

export const ItxtxnqueueDetail = (props: IItxtxnqueueDetailProps) => {
  useEffect(() => {
    props.getEntity(props.match.params.id);
  }, []);

  const { itxtxnqueueEntity } = props;
  return (
    <Row>
      <Col md="8">
        <h2>
          <Translate contentKey="sampleHrApp.itxtxnqueue.detail.title">Itxtxnqueue</Translate> [<b>{itxtxnqueueEntity.id}</b>]
        </h2>
        <dl className="jh-entity-details">
          <dt>
            <span id="etljobstart">
              <Translate contentKey="sampleHrApp.itxtxnqueue.etljobstart">Etljobstart</Translate>
            </span>
          </dt>
          <dd>
            {itxtxnqueueEntity.etljobstart ? (
              <TextFormat value={itxtxnqueueEntity.etljobstart} type="date" format={APP_DATE_FORMAT} />
            ) : null}
          </dd>
          <dt>
            <span id="etljobsessiond">
              <Translate contentKey="sampleHrApp.itxtxnqueue.etljobsessiond">Etljobsessiond</Translate>
            </span>
          </dt>
          <dd>{itxtxnqueueEntity.etljobsessiond}</dd>
          <dt>
            <span id="createdt">
              <Translate contentKey="sampleHrApp.itxtxnqueue.createdt">Createdt</Translate>
            </span>
          </dt>
          <dd>
            {itxtxnqueueEntity.createdt ? <TextFormat value={itxtxnqueueEntity.createdt} type="date" format={APP_DATE_FORMAT} /> : null}
          </dd>
          <dt>
            <span id="updatedt">
              <Translate contentKey="sampleHrApp.itxtxnqueue.updatedt">Updatedt</Translate>
            </span>
          </dt>
          <dd>
            {itxtxnqueueEntity.updatedt ? <TextFormat value={itxtxnqueueEntity.updatedt} type="date" format={APP_DATE_FORMAT} /> : null}
          </dd>
          <dt>
            <span id="createusr">
              <Translate contentKey="sampleHrApp.itxtxnqueue.createusr">Createusr</Translate>
            </span>
          </dt>
          <dd>{itxtxnqueueEntity.createusr}</dd>
          <dt>
            <span id="updateusr">
              <Translate contentKey="sampleHrApp.itxtxnqueue.updateusr">Updateusr</Translate>
            </span>
          </dt>
          <dd>{itxtxnqueueEntity.updateusr}</dd>
          <dt>
            <span id="wfstate">
              <Translate contentKey="sampleHrApp.itxtxnqueue.wfstate">Wfstate</Translate>
            </span>
          </dt>
          <dd>{itxtxnqueueEntity.wfstate}</dd>
          <dt>
            <span id="wfprocid">
              <Translate contentKey="sampleHrApp.itxtxnqueue.wfprocid">Wfprocid</Translate>
            </span>
          </dt>
          <dd>{itxtxnqueueEntity.wfprocid}</dd>
          <dt>
            <span id="scsyscustid">
              <Translate contentKey="sampleHrApp.itxtxnqueue.scsyscustid">Scsyscustid</Translate>
            </span>
          </dt>
          <dd>{itxtxnqueueEntity.scsyscustid}</dd>
          <dt>
            <span id="scname">
              <Translate contentKey="sampleHrApp.itxtxnqueue.scname">Scname</Translate>
            </span>
          </dt>
          <dd>{itxtxnqueueEntity.scname}</dd>
          <dt>
            <span id="scmidname">
              <Translate contentKey="sampleHrApp.itxtxnqueue.scmidname">Scmidname</Translate>
            </span>
          </dt>
          <dd>{itxtxnqueueEntity.scmidname}</dd>
          <dt>
            <span id="scsurname">
              <Translate contentKey="sampleHrApp.itxtxnqueue.scsurname">Scsurname</Translate>
            </span>
          </dt>
          <dd>{itxtxnqueueEntity.scsurname}</dd>
          <dt>
            <span id="scbirthdate">
              <Translate contentKey="sampleHrApp.itxtxnqueue.scbirthdate">Scbirthdate</Translate>
            </span>
          </dt>
          <dd>
            {itxtxnqueueEntity.scbirthdate ? (
              <TextFormat value={itxtxnqueueEntity.scbirthdate} type="date" format={APP_LOCAL_DATE_FORMAT} />
            ) : null}
          </dd>
          <dt>
            <span id="sccommtitle">
              <Translate contentKey="sampleHrApp.itxtxnqueue.sccommtitle">Sccommtitle</Translate>
            </span>
          </dt>
          <dd>{itxtxnqueueEntity.sccommtitle}</dd>
          <dt>
            <span id="scaddresstype">
              <Translate contentKey="sampleHrApp.itxtxnqueue.scaddresstype">Scaddresstype</Translate>
            </span>
          </dt>
          <dd>{itxtxnqueueEntity.scaddresstype}</dd>
          <dt>
            <span id="scaddress">
              <Translate contentKey="sampleHrApp.itxtxnqueue.scaddress">Scaddress</Translate>
            </span>
          </dt>
          <dd>{itxtxnqueueEntity.scaddress}</dd>
          <dt>
            <span id="sccity">
              <Translate contentKey="sampleHrApp.itxtxnqueue.sccity">Sccity</Translate>
            </span>
          </dt>
          <dd>{itxtxnqueueEntity.sccity}</dd>
          <dt>
            <span id="scnationality">
              <Translate contentKey="sampleHrApp.itxtxnqueue.scnationality">Scnationality</Translate>
            </span>
          </dt>
          <dd>{itxtxnqueueEntity.scnationality}</dd>
          <dt>
            <span id="scnationalid">
              <Translate contentKey="sampleHrApp.itxtxnqueue.scnationalid">Scnationalid</Translate>
            </span>
          </dt>
          <dd>{itxtxnqueueEntity.scnationalid}</dd>
          <dt>
            <span id="scidtype">
              <Translate contentKey="sampleHrApp.itxtxnqueue.scidtype">Scidtype</Translate>
            </span>
          </dt>
          <dd>{itxtxnqueueEntity.scidtype}</dd>
          <dt>
            <span id="scidno">
              <Translate contentKey="sampleHrApp.itxtxnqueue.scidno">Scidno</Translate>
            </span>
          </dt>
          <dd>{itxtxnqueueEntity.scidno}</dd>
          <dt>
            <span id="scgender">
              <Translate contentKey="sampleHrApp.itxtxnqueue.scgender">Scgender</Translate>
            </span>
          </dt>
          <dd>{itxtxnqueueEntity.scgender}</dd>
          <dt>
            <span id="saorgid">
              <Translate contentKey="sampleHrApp.itxtxnqueue.saorgid">Saorgid</Translate>
            </span>
          </dt>
          <dd>{itxtxnqueueEntity.saorgid}</dd>
          <dt>
            <span id="saorgname">
              <Translate contentKey="sampleHrApp.itxtxnqueue.saorgname">Saorgname</Translate>
            </span>
          </dt>
          <dd>{itxtxnqueueEntity.saorgname}</dd>
          <dt>
            <span id="sasyscode">
              <Translate contentKey="sampleHrApp.itxtxnqueue.sasyscode">Sasyscode</Translate>
            </span>
          </dt>
          <dd>{itxtxnqueueEntity.sasyscode}</dd>
          <dt>
            <span id="sabranchcode">
              <Translate contentKey="sampleHrApp.itxtxnqueue.sabranchcode">Sabranchcode</Translate>
            </span>
          </dt>
          <dd>{itxtxnqueueEntity.sabranchcode}</dd>
          <dt>
            <span id="saname">
              <Translate contentKey="sampleHrApp.itxtxnqueue.saname">Saname</Translate>
            </span>
          </dt>
          <dd>{itxtxnqueueEntity.saname}</dd>
          <dt>
            <span id="rcsyscustid">
              <Translate contentKey="sampleHrApp.itxtxnqueue.rcsyscustid">Rcsyscustid</Translate>
            </span>
          </dt>
          <dd>{itxtxnqueueEntity.rcsyscustid}</dd>
          <dt>
            <span id="rcname">
              <Translate contentKey="sampleHrApp.itxtxnqueue.rcname">Rcname</Translate>
            </span>
          </dt>
          <dd>{itxtxnqueueEntity.rcname}</dd>
          <dt>
            <span id="rcmidname">
              <Translate contentKey="sampleHrApp.itxtxnqueue.rcmidname">Rcmidname</Translate>
            </span>
          </dt>
          <dd>{itxtxnqueueEntity.rcmidname}</dd>
          <dt>
            <span id="rcsurname">
              <Translate contentKey="sampleHrApp.itxtxnqueue.rcsurname">Rcsurname</Translate>
            </span>
          </dt>
          <dd>{itxtxnqueueEntity.rcsurname}</dd>
          <dt>
            <span id="rcbirthdate">
              <Translate contentKey="sampleHrApp.itxtxnqueue.rcbirthdate">Rcbirthdate</Translate>
            </span>
          </dt>
          <dd>
            {itxtxnqueueEntity.rcbirthdate ? (
              <TextFormat value={itxtxnqueueEntity.rcbirthdate} type="date" format={APP_LOCAL_DATE_FORMAT} />
            ) : null}
          </dd>
          <dt>
            <span id="rccommtitle">
              <Translate contentKey="sampleHrApp.itxtxnqueue.rccommtitle">Rccommtitle</Translate>
            </span>
          </dt>
          <dd>{itxtxnqueueEntity.rccommtitle}</dd>
          <dt>
            <span id="rcaddresstype">
              <Translate contentKey="sampleHrApp.itxtxnqueue.rcaddresstype">Rcaddresstype</Translate>
            </span>
          </dt>
          <dd>{itxtxnqueueEntity.rcaddresstype}</dd>
          <dt>
            <span id="rcaddress">
              <Translate contentKey="sampleHrApp.itxtxnqueue.rcaddress">Rcaddress</Translate>
            </span>
          </dt>
          <dd>{itxtxnqueueEntity.rcaddress}</dd>
          <dt>
            <span id="rccity">
              <Translate contentKey="sampleHrApp.itxtxnqueue.rccity">Rccity</Translate>
            </span>
          </dt>
          <dd>{itxtxnqueueEntity.rccity}</dd>
          <dt>
            <span id="rcnationality">
              <Translate contentKey="sampleHrApp.itxtxnqueue.rcnationality">Rcnationality</Translate>
            </span>
          </dt>
          <dd>{itxtxnqueueEntity.rcnationality}</dd>
          <dt>
            <span id="rcnationalid">
              <Translate contentKey="sampleHrApp.itxtxnqueue.rcnationalid">Rcnationalid</Translate>
            </span>
          </dt>
          <dd>{itxtxnqueueEntity.rcnationalid}</dd>
          <dt>
            <span id="rcidtype">
              <Translate contentKey="sampleHrApp.itxtxnqueue.rcidtype">Rcidtype</Translate>
            </span>
          </dt>
          <dd>{itxtxnqueueEntity.rcidtype}</dd>
          <dt>
            <span id="rcidno">
              <Translate contentKey="sampleHrApp.itxtxnqueue.rcidno">Rcidno</Translate>
            </span>
          </dt>
          <dd>{itxtxnqueueEntity.rcidno}</dd>
          <dt>
            <span id="rcgender">
              <Translate contentKey="sampleHrApp.itxtxnqueue.rcgender">Rcgender</Translate>
            </span>
          </dt>
          <dd>{itxtxnqueueEntity.rcgender}</dd>
          <dt>
            <span id="raorgid">
              <Translate contentKey="sampleHrApp.itxtxnqueue.raorgid">Raorgid</Translate>
            </span>
          </dt>
          <dd>{itxtxnqueueEntity.raorgid}</dd>
          <dt>
            <span id="raorgname">
              <Translate contentKey="sampleHrApp.itxtxnqueue.raorgname">Raorgname</Translate>
            </span>
          </dt>
          <dd>{itxtxnqueueEntity.raorgname}</dd>
          <dt>
            <span id="rasyscode">
              <Translate contentKey="sampleHrApp.itxtxnqueue.rasyscode">Rasyscode</Translate>
            </span>
          </dt>
          <dd>{itxtxnqueueEntity.rasyscode}</dd>
          <dt>
            <span id="rabranchcode">
              <Translate contentKey="sampleHrApp.itxtxnqueue.rabranchcode">Rabranchcode</Translate>
            </span>
          </dt>
          <dd>{itxtxnqueueEntity.rabranchcode}</dd>
          <dt>
            <span id="raname">
              <Translate contentKey="sampleHrApp.itxtxnqueue.raname">Raname</Translate>
            </span>
          </dt>
          <dd>{itxtxnqueueEntity.raname}</dd>
          <dt>
            <span id="txnchanneltype">
              <Translate contentKey="sampleHrApp.itxtxnqueue.txnchanneltype">Txnchanneltype</Translate>
            </span>
          </dt>
          <dd>{itxtxnqueueEntity.txnchanneltype}</dd>
          <dt>
            <span id="txnsysid">
              <Translate contentKey="sampleHrApp.itxtxnqueue.txnsysid">Txnsysid</Translate>
            </span>
          </dt>
          <dd>{itxtxnqueueEntity.txnsysid}</dd>
          <dt>
            <span id="txnprodtype">
              <Translate contentKey="sampleHrApp.itxtxnqueue.txnprodtype">Txnprodtype</Translate>
            </span>
          </dt>
          <dd>{itxtxnqueueEntity.txnprodtype}</dd>
          <dt>
            <span id="txnprodname">
              <Translate contentKey="sampleHrApp.itxtxnqueue.txnprodname">Txnprodname</Translate>
            </span>
          </dt>
          <dd>{itxtxnqueueEntity.txnprodname}</dd>
          <dt>
            <span id="txnamount">
              <Translate contentKey="sampleHrApp.itxtxnqueue.txnamount">Txnamount</Translate>
            </span>
          </dt>
          <dd>{itxtxnqueueEntity.txnamount}</dd>
          <dt>
            <span id="txndescr">
              <Translate contentKey="sampleHrApp.itxtxnqueue.txndescr">Txndescr</Translate>
            </span>
          </dt>
          <dd>{itxtxnqueueEntity.txndescr}</dd>
          <dt>
            <span id="txnentitiesupd">
              <Translate contentKey="sampleHrApp.itxtxnqueue.txnentitiesupd">Txnentitiesupd</Translate>
            </span>
          </dt>
          <dd>{itxtxnqueueEntity.txnentitiesupd}</dd>
          <dt>
            <span id="txnagentorgid">
              <Translate contentKey="sampleHrApp.itxtxnqueue.txnagentorgid">Txnagentorgid</Translate>
            </span>
          </dt>
          <dd>{itxtxnqueueEntity.txnagentorgid}</dd>
          <dt>
            <span id="txnagentbrachid">
              <Translate contentKey="sampleHrApp.itxtxnqueue.txnagentbrachid">Txnagentbrachid</Translate>
            </span>
          </dt>
          <dd>{itxtxnqueueEntity.txnagentbrachid}</dd>
          <dt>
            <span id="txnagenttype">
              <Translate contentKey="sampleHrApp.itxtxnqueue.txnagenttype">Txnagenttype</Translate>
            </span>
          </dt>
          <dd>{itxtxnqueueEntity.txnagenttype}</dd>
          <dt>
            <span id="txnagentaccid">
              <Translate contentKey="sampleHrApp.itxtxnqueue.txnagentaccid">Txnagentaccid</Translate>
            </span>
          </dt>
          <dd>{itxtxnqueueEntity.txnagentaccid}</dd>
          <dt>
            <span id="txnorderdate">
              <Translate contentKey="sampleHrApp.itxtxnqueue.txnorderdate">Txnorderdate</Translate>
            </span>
          </dt>
          <dd>
            {itxtxnqueueEntity.txnorderdate ? (
              <TextFormat value={itxtxnqueueEntity.txnorderdate} type="date" format={APP_DATE_FORMAT} />
            ) : null}
          </dd>
          <dt>
            <span id="txnvaluedate">
              <Translate contentKey="sampleHrApp.itxtxnqueue.txnvaluedate">Txnvaluedate</Translate>
            </span>
          </dt>
          <dd>
            {itxtxnqueueEntity.txnvaluedate ? (
              <TextFormat value={itxtxnqueueEntity.txnvaluedate} type="date" format={APP_DATE_FORMAT} />
            ) : null}
          </dd>
          <dt>
            <Translate contentKey="sampleHrApp.itxtxnqueue.rctype">Rctype</Translate>
          </dt>
          <dd>{itxtxnqueueEntity.rctype ? itxtxnqueueEntity.rctype.id : ''}</dd>
          <dt>
            <Translate contentKey="sampleHrApp.itxtxnqueue.ratype">Ratype</Translate>
          </dt>
          <dd>{itxtxnqueueEntity.ratype ? itxtxnqueueEntity.ratype.id : ''}</dd>
          <dt>
            <Translate contentKey="sampleHrApp.itxtxnqueue.satype">Satype</Translate>
          </dt>
          <dd>{itxtxnqueueEntity.satype ? itxtxnqueueEntity.satype.id : ''}</dd>
          <dt>
            <Translate contentKey="sampleHrApp.itxtxnqueue.sctype">Sctype</Translate>
          </dt>
          <dd>{itxtxnqueueEntity.sctype ? itxtxnqueueEntity.sctype.id : ''}</dd>
          <dt>
            <Translate contentKey="sampleHrApp.itxtxnqueue.txntypeid">Txntypeid</Translate>
          </dt>
          <dd>{itxtxnqueueEntity.txntypeid ? itxtxnqueueEntity.txntypeid.id : ''}</dd>
          <dt>
            <Translate contentKey="sampleHrApp.itxtxnqueue.txncurrency">Txncurrency</Translate>
          </dt>
          <dd>{itxtxnqueueEntity.txncurrency ? itxtxnqueueEntity.txncurrency.id : ''}</dd>
          <dt>
            <Translate contentKey="sampleHrApp.itxtxnqueue.etljobtype">Etljobtype</Translate>
          </dt>
          <dd>{itxtxnqueueEntity.etljobtype ? itxtxnqueueEntity.etljobtype.id : ''}</dd>
        </dl>
        <Button tag={Link} to="/itxtxnqueue" replace color="info">
          <FontAwesomeIcon icon="arrow-left" />{' '}
          <span className="d-none d-md-inline">
            <Translate contentKey="entity.action.back">Back</Translate>
          </span>
        </Button>
        &nbsp;
        <Button tag={Link} to={`/itxtxnqueue/${itxtxnqueueEntity.id}/edit`} replace color="primary">
          <FontAwesomeIcon icon="pencil-alt" />{' '}
          <span className="d-none d-md-inline">
            <Translate contentKey="entity.action.edit">Edit</Translate>
          </span>
        </Button>
      </Col>
    </Row>
  );
};

const mapStateToProps = ({ itxtxnqueue }: IRootState) => ({
  itxtxnqueueEntity: itxtxnqueue.entity,
});

const mapDispatchToProps = { getEntity };

type StateProps = ReturnType<typeof mapStateToProps>;
type DispatchProps = typeof mapDispatchToProps;

export default connect(mapStateToProps, mapDispatchToProps)(ItxtxnqueueDetail);
