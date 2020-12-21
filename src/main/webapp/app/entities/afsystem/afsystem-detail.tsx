import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { Link, RouteComponentProps } from 'react-router-dom';
import { Button, Row, Col } from 'reactstrap';
import { Translate, ICrudGetAction } from 'react-jhipster';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { IRootState } from 'app/shared/reducers';
import { getEntity } from './afsystem.reducer';
import { IAfsystem } from 'app/shared/model/afsystem.model';
import { APP_DATE_FORMAT, APP_LOCAL_DATE_FORMAT } from 'app/config/constants';

export interface IAfsystemDetailProps extends StateProps, DispatchProps, RouteComponentProps<{ id: string }> {}

export const AfsystemDetail = (props: IAfsystemDetailProps) => {
  useEffect(() => {
    props.getEntity(props.match.params.id);
  }, []);

  const { afsystemEntity } = props;
  return (
    <Row>
      <Col md="8">
        <h2>
          <Translate contentKey="sampleHrApp.afsystem.detail.title">Afsystem</Translate> [<b>{afsystemEntity.id}</b>]
        </h2>
        <dl className="jh-entity-details">
          <dt>
            <span id="code">
              <Translate contentKey="sampleHrApp.afsystem.code">Code</Translate>
            </span>
          </dt>
          <dd>{afsystemEntity.code}</dd>
          <dt>
            <span id="name">
              <Translate contentKey="sampleHrApp.afsystem.name">Name</Translate>
            </span>
          </dt>
          <dd>{afsystemEntity.name}</dd>
          <dt>
            <span id="descr">
              <Translate contentKey="sampleHrApp.afsystem.descr">Descr</Translate>
            </span>
          </dt>
          <dd>{afsystemEntity.descr}</dd>
          <dt>
            <span id="apprefcode">
              <Translate contentKey="sampleHrApp.afsystem.apprefcode">Apprefcode</Translate>
            </span>
          </dt>
          <dd>{afsystemEntity.apprefcode}</dd>
          <dt>
            <span id="systype">
              <Translate contentKey="sampleHrApp.afsystem.systype">Systype</Translate>
            </span>
          </dt>
          <dd>{afsystemEntity.systype}</dd>
          <dt>
            <span id="appdomaincode">
              <Translate contentKey="sampleHrApp.afsystem.appdomaincode">Appdomaincode</Translate>
            </span>
          </dt>
          <dd>{afsystemEntity.appdomaincode}</dd>
          <dt>
            <span id="connecttype">
              <Translate contentKey="sampleHrApp.afsystem.connecttype">Connecttype</Translate>
            </span>
          </dt>
          <dd>{afsystemEntity.connecttype}</dd>
          <dt>
            <span id="connectstr">
              <Translate contentKey="sampleHrApp.afsystem.connectstr">Connectstr</Translate>
            </span>
          </dt>
          <dd>{afsystemEntity.connectstr}</dd>
        </dl>
        <Button tag={Link} to="/afsystem" replace color="info">
          <FontAwesomeIcon icon="arrow-left" />{' '}
          <span className="d-none d-md-inline">
            <Translate contentKey="entity.action.back">Back</Translate>
          </span>
        </Button>
        &nbsp;
        <Button tag={Link} to={`/afsystem/${afsystemEntity.id}/edit`} replace color="primary">
          <FontAwesomeIcon icon="pencil-alt" />{' '}
          <span className="d-none d-md-inline">
            <Translate contentKey="entity.action.edit">Edit</Translate>
          </span>
        </Button>
      </Col>
    </Row>
  );
};

const mapStateToProps = ({ afsystem }: IRootState) => ({
  afsystemEntity: afsystem.entity,
});

const mapDispatchToProps = { getEntity };

type StateProps = ReturnType<typeof mapStateToProps>;
type DispatchProps = typeof mapDispatchToProps;

export default connect(mapStateToProps, mapDispatchToProps)(AfsystemDetail);
