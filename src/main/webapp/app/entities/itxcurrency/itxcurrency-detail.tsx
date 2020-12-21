import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { Link, RouteComponentProps } from 'react-router-dom';
import { Button, Row, Col } from 'reactstrap';
import { Translate, ICrudGetAction } from 'react-jhipster';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { IRootState } from 'app/shared/reducers';
import { getEntity } from './itxcurrency.reducer';
import { IItxcurrency } from 'app/shared/model/itxcurrency.model';
import { APP_DATE_FORMAT, APP_LOCAL_DATE_FORMAT } from 'app/config/constants';

export interface IItxcurrencyDetailProps extends StateProps, DispatchProps, RouteComponentProps<{ id: string }> {}

export const ItxcurrencyDetail = (props: IItxcurrencyDetailProps) => {
  useEffect(() => {
    props.getEntity(props.match.params.id);
  }, []);

  const { itxcurrencyEntity } = props;
  return (
    <Row>
      <Col md="8">
        <h2>
          <Translate contentKey="sampleHrApp.itxcurrency.detail.title">Itxcurrency</Translate> [<b>{itxcurrencyEntity.id}</b>]
        </h2>
        <dl className="jh-entity-details">
          <dt>
            <span id="isocode">
              <Translate contentKey="sampleHrApp.itxcurrency.isocode">Isocode</Translate>
            </span>
          </dt>
          <dd>{itxcurrencyEntity.isocode}</dd>
          <dt>
            <span id="name">
              <Translate contentKey="sampleHrApp.itxcurrency.name">Name</Translate>
            </span>
          </dt>
          <dd>{itxcurrencyEntity.name}</dd>
          <dt>
            <span id="localname">
              <Translate contentKey="sampleHrApp.itxcurrency.localname">Localname</Translate>
            </span>
          </dt>
          <dd>{itxcurrencyEntity.localname}</dd>
        </dl>
        <Button tag={Link} to="/itxcurrency" replace color="info">
          <FontAwesomeIcon icon="arrow-left" />{' '}
          <span className="d-none d-md-inline">
            <Translate contentKey="entity.action.back">Back</Translate>
          </span>
        </Button>
        &nbsp;
        <Button tag={Link} to={`/itxcurrency/${itxcurrencyEntity.id}/edit`} replace color="primary">
          <FontAwesomeIcon icon="pencil-alt" />{' '}
          <span className="d-none d-md-inline">
            <Translate contentKey="entity.action.edit">Edit</Translate>
          </span>
        </Button>
      </Col>
    </Row>
  );
};

const mapStateToProps = ({ itxcurrency }: IRootState) => ({
  itxcurrencyEntity: itxcurrency.entity,
});

const mapDispatchToProps = { getEntity };

type StateProps = ReturnType<typeof mapStateToProps>;
type DispatchProps = typeof mapDispatchToProps;

export default connect(mapStateToProps, mapDispatchToProps)(ItxcurrencyDetail);
