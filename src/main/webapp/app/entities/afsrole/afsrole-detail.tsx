import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { Link, RouteComponentProps } from 'react-router-dom';
import { Button, Row, Col } from 'reactstrap';
import { Translate, ICrudGetAction } from 'react-jhipster';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { IRootState } from 'app/shared/reducers';
import { getEntity } from './afsrole.reducer';
import { IAfsrole } from 'app/shared/model/afsrole.model';
import { APP_DATE_FORMAT, APP_LOCAL_DATE_FORMAT } from 'app/config/constants';

export interface IAfsroleDetailProps extends StateProps, DispatchProps, RouteComponentProps<{ id: string }> {}

export const AfsroleDetail = (props: IAfsroleDetailProps) => {
  useEffect(() => {
    props.getEntity(props.match.params.id);
  }, []);

  const { afsroleEntity } = props;
  return (
    <Row>
      <Col md="8">
        <h2>
          <Translate contentKey="sampleHrApp.afsrole.detail.title">Afsrole</Translate> [<b>{afsroleEntity.id}</b>]
        </h2>
        <dl className="jh-entity-details">
          <dt>
            <span id="code">
              <Translate contentKey="sampleHrApp.afsrole.code">Code</Translate>
            </span>
          </dt>
          <dd>{afsroleEntity.code}</dd>
          <dt>
            <span id="name">
              <Translate contentKey="sampleHrApp.afsrole.name">Name</Translate>
            </span>
          </dt>
          <dd>{afsroleEntity.name}</dd>
          <dt>
            <span id="descr">
              <Translate contentKey="sampleHrApp.afsrole.descr">Descr</Translate>
            </span>
          </dt>
          <dd>{afsroleEntity.descr}</dd>
        </dl>
        <Button tag={Link} to="/modules/afs/afsrole" replace color="info">
          <FontAwesomeIcon icon="arrow-left" />{' '}
          <span className="d-none d-md-inline">
            <Translate contentKey="entity.action.back">Back</Translate>
          </span>
        </Button>
        &nbsp;
        <Button tag={Link} to={`/modules/afs/afsrole/${afsroleEntity.id}/edit`} replace color="primary">
          <FontAwesomeIcon icon="pencil-alt" />{' '}
          <span className="d-none d-md-inline">
            <Translate contentKey="entity.action.edit">Edit</Translate>
          </span>
        </Button>
      </Col>
    </Row>
  );
};

const mapStateToProps = ({ afsrole }: IRootState) => ({
  afsroleEntity: afsrole.entity,
});

const mapDispatchToProps = { getEntity };

type StateProps = ReturnType<typeof mapStateToProps>;
type DispatchProps = typeof mapDispatchToProps;

export default connect(mapStateToProps, mapDispatchToProps)(AfsroleDetail);
