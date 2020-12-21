import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { Link, RouteComponentProps } from 'react-router-dom';
import { Button, Row, Col } from 'reactstrap';
import { Translate, ICrudGetAction } from 'react-jhipster';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { IRootState } from 'app/shared/reducers';
import { getEntity } from './itxaccounttinfo.reducer';
import { IItxaccounttinfo } from 'app/shared/model/itxaccounttinfo.model';
import { APP_DATE_FORMAT, APP_LOCAL_DATE_FORMAT } from 'app/config/constants';

export interface IItxaccounttinfoDetailProps extends StateProps, DispatchProps, RouteComponentProps<{ id: string }> {}

export const ItxaccounttinfoDetail = (props: IItxaccounttinfoDetailProps) => {
  useEffect(() => {
    props.getEntity(props.match.params.id);
  }, []);

  const { itxaccounttinfoEntity } = props;
  return (
    <Row>
      <Col md="8">
        <h2>
          <Translate contentKey="sampleHrApp.itxaccounttinfo.detail.title">Itxaccounttinfo</Translate> [<b>{itxaccounttinfoEntity.id}</b>]
        </h2>
        <dl className="jh-entity-details">
          <dt>
            <span id="srcsysacccode">
              <Translate contentKey="sampleHrApp.itxaccounttinfo.srcsysacccode">Srcsysacccode</Translate>
            </span>
          </dt>
          <dd>{itxaccounttinfoEntity.srcsysacccode}</dd>
          <dt>
            <Translate contentKey="sampleHrApp.itxaccounttinfo.typeid">Typeid</Translate>
          </dt>
          <dd>{itxaccounttinfoEntity.typeid ? itxaccounttinfoEntity.typeid.id : ''}</dd>
          <dt>
            <Translate contentKey="sampleHrApp.itxaccounttinfo.srcsyscode">Srcsyscode</Translate>
          </dt>
          <dd>{itxaccounttinfoEntity.srcsyscode ? itxaccounttinfoEntity.srcsyscode.id : ''}</dd>
          <dt>
            <Translate contentKey="sampleHrApp.itxaccounttinfo.ownercustid">Ownercustid</Translate>
          </dt>
          <dd>{itxaccounttinfoEntity.ownercustid ? itxaccounttinfoEntity.ownercustid.id : ''}</dd>
        </dl>
        <Button tag={Link} to="/itxaccounttinfo" replace color="info">
          <FontAwesomeIcon icon="arrow-left" />{' '}
          <span className="d-none d-md-inline">
            <Translate contentKey="entity.action.back">Back</Translate>
          </span>
        </Button>
        &nbsp;
        <Button tag={Link} to={`/itxaccounttinfo/${itxaccounttinfoEntity.id}/edit`} replace color="primary">
          <FontAwesomeIcon icon="pencil-alt" />{' '}
          <span className="d-none d-md-inline">
            <Translate contentKey="entity.action.edit">Edit</Translate>
          </span>
        </Button>
      </Col>
    </Row>
  );
};

const mapStateToProps = ({ itxaccounttinfo }: IRootState) => ({
  itxaccounttinfoEntity: itxaccounttinfo.entity,
});

const mapDispatchToProps = { getEntity };

type StateProps = ReturnType<typeof mapStateToProps>;
type DispatchProps = typeof mapDispatchToProps;

export default connect(mapStateToProps, mapDispatchToProps)(ItxaccounttinfoDetail);
