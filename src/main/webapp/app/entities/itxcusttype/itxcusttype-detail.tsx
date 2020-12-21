import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { Link, RouteComponentProps } from 'react-router-dom';
import { Button, Row, Col } from 'reactstrap';
import { Translate, ICrudGetAction } from 'react-jhipster';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { IRootState } from 'app/shared/reducers';
import { getEntity } from './itxcusttype.reducer';
import { IItxcusttype } from 'app/shared/model/itxcusttype.model';
import { APP_DATE_FORMAT, APP_LOCAL_DATE_FORMAT } from 'app/config/constants';

export interface IItxcusttypeDetailProps extends StateProps, DispatchProps, RouteComponentProps<{ id: string }> {}

export const ItxcusttypeDetail = (props: IItxcusttypeDetailProps) => {
  useEffect(() => {
    props.getEntity(props.match.params.id);
  }, []);

  const { itxcusttypeEntity } = props;
  return (
    <Row>
      <Col md="8">
        <h2>
          <Translate contentKey="sampleHrApp.itxcusttype.detail.title">Itxcusttype</Translate> [<b>{itxcusttypeEntity.id}</b>]
        </h2>
        <dl className="jh-entity-details">
          <dt>
            <span id="name">
              <Translate contentKey="sampleHrApp.itxcusttype.name">Name</Translate>
            </span>
          </dt>
          <dd>{itxcusttypeEntity.name}</dd>
          <dt>
            <span id="descr">
              <Translate contentKey="sampleHrApp.itxcusttype.descr">Descr</Translate>
            </span>
          </dt>
          <dd>{itxcusttypeEntity.descr}</dd>
        </dl>
        <Button tag={Link} to="/itxcusttype" replace color="info">
          <FontAwesomeIcon icon="arrow-left" />{' '}
          <span className="d-none d-md-inline">
            <Translate contentKey="entity.action.back">Back</Translate>
          </span>
        </Button>
        &nbsp;
        <Button tag={Link} to={`/itxcusttype/${itxcusttypeEntity.id}/edit`} replace color="primary">
          <FontAwesomeIcon icon="pencil-alt" />{' '}
          <span className="d-none d-md-inline">
            <Translate contentKey="entity.action.edit">Edit</Translate>
          </span>
        </Button>
      </Col>
    </Row>
  );
};

const mapStateToProps = ({ itxcusttype }: IRootState) => ({
  itxcusttypeEntity: itxcusttype.entity,
});

const mapDispatchToProps = { getEntity };

type StateProps = ReturnType<typeof mapStateToProps>;
type DispatchProps = typeof mapDispatchToProps;

export default connect(mapStateToProps, mapDispatchToProps)(ItxcusttypeDetail);
