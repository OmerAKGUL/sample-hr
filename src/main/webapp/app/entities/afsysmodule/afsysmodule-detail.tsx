import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { Link, RouteComponentProps } from 'react-router-dom';
import { Button, Row, Col } from 'reactstrap';
import { Translate, ICrudGetAction } from 'react-jhipster';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { IRootState } from 'app/shared/reducers';
import { getEntity } from './afsysmodule.reducer';
import { IAfsysmodule } from 'app/shared/model/afsysmodule.model';
import { APP_DATE_FORMAT, APP_LOCAL_DATE_FORMAT } from 'app/config/constants';

export interface IAfsysmoduleDetailProps extends StateProps, DispatchProps, RouteComponentProps<{ id: string }> {}

export const AfsysmoduleDetail = (props: IAfsysmoduleDetailProps) => {
  useEffect(() => {
    props.getEntity(props.match.params.id);
  }, []);

  const { afsysmoduleEntity } = props;
  return (
    <Row>
      <Col md="8">
        <h2>
          <Translate contentKey="sampleHrApp.afsysmodule.detail.title">Afsysmodule</Translate> [<b>{afsysmoduleEntity.id}</b>]
        </h2>
        <dl className="jh-entity-details">
          <dt>
            <span id="code">
              <Translate contentKey="sampleHrApp.afsysmodule.code">Code</Translate>
            </span>
          </dt>
          <dd>{afsysmoduleEntity.code}</dd>
          <dt>
            <span id="name">
              <Translate contentKey="sampleHrApp.afsysmodule.name">Name</Translate>
            </span>
          </dt>
          <dd>{afsysmoduleEntity.name}</dd>
          <dt>
            <span id="descr">
              <Translate contentKey="sampleHrApp.afsysmodule.descr">Descr</Translate>
            </span>
          </dt>
          <dd>{afsysmoduleEntity.descr}</dd>
          <dt>
            <Translate contentKey="sampleHrApp.afsysmodule.appsyscode">Appsyscode</Translate>
          </dt>
          <dd>{afsysmoduleEntity.appsyscode ? afsysmoduleEntity.appsyscode.id : ''}</dd>
        </dl>
        <Button tag={Link} to="/afsysmodule" replace color="info">
          <FontAwesomeIcon icon="arrow-left" />{' '}
          <span className="d-none d-md-inline">
            <Translate contentKey="entity.action.back">Back</Translate>
          </span>
        </Button>
        &nbsp;
        <Button tag={Link} to={`/afsysmodule/${afsysmoduleEntity.id}/edit`} replace color="primary">
          <FontAwesomeIcon icon="pencil-alt" />{' '}
          <span className="d-none d-md-inline">
            <Translate contentKey="entity.action.edit">Edit</Translate>
          </span>
        </Button>
      </Col>
    </Row>
  );
};

const mapStateToProps = ({ afsysmodule }: IRootState) => ({
  afsysmoduleEntity: afsysmodule.entity,
});

const mapDispatchToProps = { getEntity };

type StateProps = ReturnType<typeof mapStateToProps>;
type DispatchProps = typeof mapDispatchToProps;

export default connect(mapStateToProps, mapDispatchToProps)(AfsysmoduleDetail);
