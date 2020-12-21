import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { Link, RouteComponentProps } from 'react-router-dom';
import { Button, Row, Col } from 'reactstrap';
import { Translate, ICrudGetAction } from 'react-jhipster';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { IRootState } from 'app/shared/reducers';
import { getEntity } from './itxcustaddress.reducer';
import { IItxcustaddress } from 'app/shared/model/itxcustaddress.model';
import { APP_DATE_FORMAT, APP_LOCAL_DATE_FORMAT } from 'app/config/constants';

export interface IItxcustaddressDetailProps extends StateProps, DispatchProps, RouteComponentProps<{ id: string }> {}

export const ItxcustaddressDetail = (props: IItxcustaddressDetailProps) => {
  useEffect(() => {
    props.getEntity(props.match.params.id);
  }, []);

  const { itxcustaddressEntity } = props;
  return (
    <Row>
      <Col md="8">
        <h2>
          <Translate contentKey="sampleHrApp.itxcustaddress.detail.title">Itxcustaddress</Translate> [<b>{itxcustaddressEntity.id}</b>]
        </h2>
        <dl className="jh-entity-details">
          <dt>
            <Translate contentKey="sampleHrApp.itxcustaddress.custid">Custid</Translate>
          </dt>
          <dd>{itxcustaddressEntity.custid ? itxcustaddressEntity.custid.id : ''}</dd>
          <dt>
            <Translate contentKey="sampleHrApp.itxcustaddress.addrid">Addrid</Translate>
          </dt>
          <dd>{itxcustaddressEntity.addrid ? itxcustaddressEntity.addrid.id : ''}</dd>
        </dl>
        <Button tag={Link} to="/itxcustaddress" replace color="info">
          <FontAwesomeIcon icon="arrow-left" />{' '}
          <span className="d-none d-md-inline">
            <Translate contentKey="entity.action.back">Back</Translate>
          </span>
        </Button>
        &nbsp;
        <Button tag={Link} to={`/itxcustaddress/${itxcustaddressEntity.id}/edit`} replace color="primary">
          <FontAwesomeIcon icon="pencil-alt" />{' '}
          <span className="d-none d-md-inline">
            <Translate contentKey="entity.action.edit">Edit</Translate>
          </span>
        </Button>
      </Col>
    </Row>
  );
};

const mapStateToProps = ({ itxcustaddress }: IRootState) => ({
  itxcustaddressEntity: itxcustaddress.entity,
});

const mapDispatchToProps = { getEntity };

type StateProps = ReturnType<typeof mapStateToProps>;
type DispatchProps = typeof mapDispatchToProps;

export default connect(mapStateToProps, mapDispatchToProps)(ItxcustaddressDetail);
