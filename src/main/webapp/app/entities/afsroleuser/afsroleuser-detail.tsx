import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { Link, RouteComponentProps } from 'react-router-dom';
import { Button, Row, Col } from 'reactstrap';
import { Translate, ICrudGetAction } from 'react-jhipster';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { IRootState } from 'app/shared/reducers';
import { getEntity } from './afsroleuser.reducer';
import { IAfsroleuser } from 'app/shared/model/afsroleuser.model';
import { APP_DATE_FORMAT, APP_LOCAL_DATE_FORMAT } from 'app/config/constants';

export interface IAfsroleuserDetailProps extends StateProps, DispatchProps, RouteComponentProps<{ id: string }> {}

export const AfsroleuserDetail = (props: IAfsroleuserDetailProps) => {
  useEffect(() => {
    props.getEntity(props.match.params.id);
  }, []);

  const { afsroleuserEntity } = props;
  return (
    <Row>
      <Col md="8">
        <h2>
          <Translate contentKey="sampleHrApp.afsroleuser.detail.title">Afsroleuser</Translate> [<b>{afsroleuserEntity.id}</b>]
        </h2>
        <dl className="jh-entity-details">
          <dt>
            <Translate contentKey="sampleHrApp.afsroleuser.usrid">Usrid</Translate>
          </dt>
          <dd>{afsroleuserEntity.usrid ? afsroleuserEntity.usrid.login : ''}</dd>
          <dt>
            <Translate contentKey="sampleHrApp.afsroleuser.rolecode">Rolecode</Translate>
          </dt>
          <dd>{afsroleuserEntity.rolecode ? afsroleuserEntity.rolecode.name : ''}</dd>
        </dl>
        <Button tag={Link} to="/modules/afs/afsroleuser" replace color="info">
          <FontAwesomeIcon icon="arrow-left" />{' '}
          <span className="d-none d-md-inline">
            <Translate contentKey="entity.action.back">Back</Translate>
          </span>
        </Button>
        &nbsp;
        <Button tag={Link} to={`/modules/afs/afsroleuser/${afsroleuserEntity.id}`} replace color="primary">
          <FontAwesomeIcon icon="pencil-alt" />{' '}
          <span className="d-none d-md-inline">
            <Translate contentKey="entity.action.edit">Edit</Translate>
          </span>
        </Button>
      </Col>
    </Row>
  );
};

const mapStateToProps = ({ afsroleuser }: IRootState) => ({
  afsroleuserEntity: afsroleuser.entity,
});

const mapDispatchToProps = { getEntity };

type StateProps = ReturnType<typeof mapStateToProps>;
type DispatchProps = typeof mapDispatchToProps;

export default connect(mapStateToProps, mapDispatchToProps)(AfsroleuserDetail);
