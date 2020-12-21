import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { Link, RouteComponentProps } from 'react-router-dom';
import { Button, Row, Col } from 'reactstrap';
import { Translate, ICrudGetAction } from 'react-jhipster';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { IRootState } from 'app/shared/reducers';
import { getEntity } from './itxdictionary.reducer';
import { IItxdictionary } from 'app/shared/model/itxdictionary.model';
import { APP_DATE_FORMAT, APP_LOCAL_DATE_FORMAT } from 'app/config/constants';

export interface IItxdictionaryDetailProps extends StateProps, DispatchProps, RouteComponentProps<{ id: string }> {}

export const ItxdictionaryDetail = (props: IItxdictionaryDetailProps) => {
  useEffect(() => {
    props.getEntity(props.match.params.id);
  }, []);

  const { itxdictionaryEntity } = props;
  return (
    <Row>
      <Col md="8">
        <h2>
          <Translate contentKey="sampleHrApp.itxdictionary.detail.title">Itxdictionary</Translate> [<b>{itxdictionaryEntity.id}</b>]
        </h2>
        <dl className="jh-entity-details">
          <dt>
            <span id="termname">
              <Translate contentKey="sampleHrApp.itxdictionary.termname">Termname</Translate>
            </span>
          </dt>
          <dd>{itxdictionaryEntity.termname}</dd>
          <dt>
            <span id="type">
              <Translate contentKey="sampleHrApp.itxdictionary.type">Type</Translate>
            </span>
          </dt>
          <dd>{itxdictionaryEntity.type}</dd>
          <dt>
            <Translate contentKey="sampleHrApp.itxdictionary.countryisocode">Countryisocode</Translate>
          </dt>
          <dd>{itxdictionaryEntity.countryisocode ? itxdictionaryEntity.countryisocode.id : ''}</dd>
        </dl>
        <Button tag={Link} to="/itxdictionary" replace color="info">
          <FontAwesomeIcon icon="arrow-left" />{' '}
          <span className="d-none d-md-inline">
            <Translate contentKey="entity.action.back">Back</Translate>
          </span>
        </Button>
        &nbsp;
        <Button tag={Link} to={`/itxdictionary/${itxdictionaryEntity.id}/edit`} replace color="primary">
          <FontAwesomeIcon icon="pencil-alt" />{' '}
          <span className="d-none d-md-inline">
            <Translate contentKey="entity.action.edit">Edit</Translate>
          </span>
        </Button>
      </Col>
    </Row>
  );
};

const mapStateToProps = ({ itxdictionary }: IRootState) => ({
  itxdictionaryEntity: itxdictionary.entity,
});

const mapDispatchToProps = { getEntity };

type StateProps = ReturnType<typeof mapStateToProps>;
type DispatchProps = typeof mapDispatchToProps;

export default connect(mapStateToProps, mapDispatchToProps)(ItxdictionaryDetail);
