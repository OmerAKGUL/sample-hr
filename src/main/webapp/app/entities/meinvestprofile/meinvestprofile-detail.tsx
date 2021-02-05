import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { Link, RouteComponentProps } from 'react-router-dom';
import { Button, Row, Col } from 'reactstrap';
import { Translate, ICrudGetAction } from 'react-jhipster';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { IRootState } from 'app/shared/reducers';
import { getEntity } from './meinvestprofile.reducer';
import { IMeinvestprofile } from 'app/shared/model/meinvestprofile.model';
import { APP_DATE_FORMAT, APP_LOCAL_DATE_FORMAT } from 'app/config/constants';

export interface IMeinvestprofileDetailProps extends StateProps, DispatchProps, RouteComponentProps<{ id: string }> {}

export const MeinvestprofileDetail = (props: IMeinvestprofileDetailProps) => {
  useEffect(() => {
    props.getEntity(props.match.params.id);
  }, []);

  const { meinvestprofileEntity } = props;
  return (
    <Row>
      <Col md="8">
        <h2>
          <Translate contentKey="sampleHrApp.meinvestprofile.detail.title">Meinvestprofile</Translate> [<b>{meinvestprofileEntity.id}</b>]
        </h2>
        <dl className="jh-entity-details">
          <dt>
            <span id="name">
              <Translate contentKey="sampleHrApp.meinvestprofile.name">Name</Translate>
            </span>
          </dt>
          <dd>{meinvestprofileEntity.name}</dd>
          <dt>
            <span id="wlmid">
              <Translate contentKey="sampleHrApp.meinvestprofile.wlmid">Wlmid</Translate>
            </span>
          </dt>
          <dd>{meinvestprofileEntity.wlmid}</dd>
          <dt>
            <span id="afsid">
              <Translate contentKey="sampleHrApp.meinvestprofile.afsid">Afsid</Translate>
            </span>
          </dt>
          <dd>{meinvestprofileEntity.afsid}</dd>
          <dt>
            <span id="invtype">
              <Translate contentKey="sampleHrApp.meinvestprofile.invtype">Invtype</Translate>
            </span>
          </dt>
          <dd>{meinvestprofileEntity.invtype}</dd>
          <dt>
            <span id="processdescr">
              <Translate contentKey="sampleHrApp.meinvestprofile.processdescr">Processdescr</Translate>
            </span>
          </dt>
          <dd>{meinvestprofileEntity.processdescr}</dd>
          <dt>
            <span id="notifgrp1emailaddr">
              <Translate contentKey="sampleHrApp.meinvestprofile.notifgrp1emailaddr">Notifgrp 1 Emailaddr</Translate>
            </span>
          </dt>
          <dd>{meinvestprofileEntity.notifgrp1emailaddr}</dd>
          <dt>
            <span id="notifgrp2emailaddr">
              <Translate contentKey="sampleHrApp.meinvestprofile.notifgrp2emailaddr">Notifgrp 2 Emailaddr</Translate>
            </span>
          </dt>
          <dd>{meinvestprofileEntity.notifgrp2emailaddr}</dd>
          <dt>
            <span id="notifmsgtempl">
              <Translate contentKey="sampleHrApp.meinvestprofile.notifmsgtempl">Notifmsgtempl</Translate>
            </span>
          </dt>
          <dd>{meinvestprofileEntity.notifmsgtempl}</dd>
          <dt>
            <Translate contentKey="sampleHrApp.meinvestprofile.matchwltype">Matchwltype</Translate>
          </dt>
          <dd>{meinvestprofileEntity.matchwltype ? meinvestprofileEntity.matchwltype.name : ''}</dd>
          <dt>
            <Translate contentKey="sampleHrApp.meinvestprofile.matchtxntype">Matchtxntype</Translate>
          </dt>
          <dd>{meinvestprofileEntity.matchtxntype ? meinvestprofileEntity.matchtxntype.name : ''}</dd>
          <dt>
            <Translate contentKey="sampleHrApp.meinvestprofile.matchtxncusttype">Matchtxncusttype</Translate>
          </dt>
          <dd>{meinvestprofileEntity.matchtxncusttype ? meinvestprofileEntity.matchtxncusttype.name : ''}</dd>
          <dt>
            <Translate contentKey="sampleHrApp.meinvestprofile.matchtxnacctype">Matchtxnacctype</Translate>
          </dt>
          <dd>{meinvestprofileEntity.matchtxnacctype ? meinvestprofileEntity.matchtxnacctype.name : ''}</dd>
          <dt>
            <Translate contentKey="sampleHrApp.meinvestprofile.matchsystemcode">Matchsystemcode</Translate>
          </dt>
          <dd>{meinvestprofileEntity.matchsystemcode ? meinvestprofileEntity.matchsystemcode.name : ''}</dd>
          <dt>
            <Translate contentKey="sampleHrApp.meinvestprofile.invrespuserid">Invrespuserid</Translate>
          </dt>
          <dd>{meinvestprofileEntity.invrespuserid ? meinvestprofileEntity.invrespuserid.loginname : ''}</dd>
          <dt>
            <Translate contentKey="sampleHrApp.meinvestprofile.invresprole">Invresprole</Translate>
          </dt>
          <dd>{meinvestprofileEntity.invresprole ? meinvestprofileEntity.invresprole.name : ''}</dd>
        </dl>
        <Button tag={Link} to="/meinvestprofile" replace color="info">
          <FontAwesomeIcon icon="arrow-left" />{' '}
          <span className="d-none d-md-inline">
            <Translate contentKey="entity.action.back">Back</Translate>
          </span>
        </Button>
        &nbsp;
        <Button tag={Link} to={`/modules/me/meinvestprofile/${meinvestprofileEntity.id}/edit`} replace color="primary">
          <FontAwesomeIcon icon="pencil-alt" />{' '}
          <span className="d-none d-md-inline">
            <Translate contentKey="entity.action.edit">Edit</Translate>
          </span>
        </Button>
      </Col>
    </Row>
  );
};

const mapStateToProps = ({ meinvestprofile }: IRootState) => ({
  meinvestprofileEntity: meinvestprofile.entity,
});

const mapDispatchToProps = { getEntity };

type StateProps = ReturnType<typeof mapStateToProps>;
type DispatchProps = typeof mapDispatchToProps;

export default connect(mapStateToProps, mapDispatchToProps)(MeinvestprofileDetail);
