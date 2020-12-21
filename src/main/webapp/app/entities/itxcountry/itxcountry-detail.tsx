import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { Link, RouteComponentProps } from 'react-router-dom';
import { Button, Row, Col } from 'reactstrap';
import { Translate, ICrudGetAction } from 'react-jhipster';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { IRootState } from 'app/shared/reducers';
import { getEntity } from './itxcountry.reducer';
import { IItxcountry } from 'app/shared/model/itxcountry.model';
import { APP_DATE_FORMAT, APP_LOCAL_DATE_FORMAT } from 'app/config/constants';

export interface IItxcountryDetailProps extends StateProps, DispatchProps, RouteComponentProps<{ id: string }> {}

export const ItxcountryDetail = (props: IItxcountryDetailProps) => {
  useEffect(() => {
    props.getEntity(props.match.params.id);
  }, []);

  const { itxcountryEntity } = props;
  return (
    <Row>
      <Col md="8">
        <h2>
          <Translate contentKey="sampleHrApp.itxcountry.detail.title">Itxcountry</Translate> [<b>{itxcountryEntity.id}</b>]
        </h2>
        <dl className="jh-entity-details">
          <dt>
            <span id="isocode">
              <Translate contentKey="sampleHrApp.itxcountry.isocode">Isocode</Translate>
            </span>
          </dt>
          <dd>{itxcountryEntity.isocode}</dd>
          <dt>
            <span id="name">
              <Translate contentKey="sampleHrApp.itxcountry.name">Name</Translate>
            </span>
          </dt>
          <dd>{itxcountryEntity.name}</dd>
          <dt>
            <span id="localname">
              <Translate contentKey="sampleHrApp.itxcountry.localname">Localname</Translate>
            </span>
          </dt>
          <dd>{itxcountryEntity.localname}</dd>
          <dt>
            <span id="isocode2">
              <Translate contentKey="sampleHrApp.itxcountry.isocode2">Isocode 2</Translate>
            </span>
          </dt>
          <dd>{itxcountryEntity.isocode2}</dd>
          <dt>
            <span id="numcode">
              <Translate contentKey="sampleHrApp.itxcountry.numcode">Numcode</Translate>
            </span>
          </dt>
          <dd>{itxcountryEntity.numcode}</dd>
        </dl>
        <Button tag={Link} to="/itxcountry" replace color="info">
          <FontAwesomeIcon icon="arrow-left" />{' '}
          <span className="d-none d-md-inline">
            <Translate contentKey="entity.action.back">Back</Translate>
          </span>
        </Button>
        &nbsp;
        <Button tag={Link} to={`/itxcountry/${itxcountryEntity.id}/edit`} replace color="primary">
          <FontAwesomeIcon icon="pencil-alt" />{' '}
          <span className="d-none d-md-inline">
            <Translate contentKey="entity.action.edit">Edit</Translate>
          </span>
        </Button>
      </Col>
    </Row>
  );
};

const mapStateToProps = ({ itxcountry }: IRootState) => ({
  itxcountryEntity: itxcountry.entity,
});

const mapDispatchToProps = { getEntity };

type StateProps = ReturnType<typeof mapStateToProps>;
type DispatchProps = typeof mapDispatchToProps;

export default connect(mapStateToProps, mapDispatchToProps)(ItxcountryDetail);
