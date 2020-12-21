import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { Link, RouteComponentProps } from 'react-router-dom';
import { Button, Row, Col } from 'reactstrap';
import { Translate, ICrudGetAction } from 'react-jhipster';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { IRootState } from 'app/shared/reducers';
import { getEntity } from './itxcity.reducer';
import { IItxcity } from 'app/shared/model/itxcity.model';
import { APP_DATE_FORMAT, APP_LOCAL_DATE_FORMAT } from 'app/config/constants';

export interface IItxcityDetailProps extends StateProps, DispatchProps, RouteComponentProps<{ id: string }> {}

export const ItxcityDetail = (props: IItxcityDetailProps) => {
  useEffect(() => {
    props.getEntity(props.match.params.id);
  }, []);

  const { itxcityEntity } = props;
  return (
    <Row>
      <Col md="8">
        <h2>
          <Translate contentKey="sampleHrApp.itxcity.detail.title">Itxcity</Translate> [<b>{itxcityEntity.id}</b>]
        </h2>
        <dl className="jh-entity-details">
          <dt>
            <span id="name">
              <Translate contentKey="sampleHrApp.itxcity.name">Name</Translate>
            </span>
          </dt>
          <dd>{itxcityEntity.name}</dd>
          <dt>
            <span id="localname">
              <Translate contentKey="sampleHrApp.itxcity.localname">Localname</Translate>
            </span>
          </dt>
          <dd>{itxcityEntity.localname}</dd>
          <dt>
            <span id="phonecode">
              <Translate contentKey="sampleHrApp.itxcity.phonecode">Phonecode</Translate>
            </span>
          </dt>
          <dd>{itxcityEntity.phonecode}</dd>
          <dt>
            <Translate contentKey="sampleHrApp.itxcity.countryisocode">Countryisocode</Translate>
          </dt>
          <dd>{itxcityEntity.countryisocode ? itxcityEntity.countryisocode.id : ''}</dd>
        </dl>
        <Button tag={Link} to="/itxcity" replace color="info">
          <FontAwesomeIcon icon="arrow-left" />{' '}
          <span className="d-none d-md-inline">
            <Translate contentKey="entity.action.back">Back</Translate>
          </span>
        </Button>
        &nbsp;
        <Button tag={Link} to={`/itxcity/${itxcityEntity.id}/edit`} replace color="primary">
          <FontAwesomeIcon icon="pencil-alt" />{' '}
          <span className="d-none d-md-inline">
            <Translate contentKey="entity.action.edit">Edit</Translate>
          </span>
        </Button>
      </Col>
    </Row>
  );
};

const mapStateToProps = ({ itxcity }: IRootState) => ({
  itxcityEntity: itxcity.entity,
});

const mapDispatchToProps = { getEntity };

type StateProps = ReturnType<typeof mapStateToProps>;
type DispatchProps = typeof mapDispatchToProps;

export default connect(mapStateToProps, mapDispatchToProps)(ItxcityDetail);
