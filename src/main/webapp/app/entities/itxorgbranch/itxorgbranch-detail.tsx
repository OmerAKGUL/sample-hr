import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { Link, RouteComponentProps } from 'react-router-dom';
import { Button, Row, Col } from 'reactstrap';
import { Translate, ICrudGetAction } from 'react-jhipster';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { IRootState } from 'app/shared/reducers';
import { getEntity } from './itxorgbranch.reducer';
import { IItxorgbranch } from 'app/shared/model/itxorgbranch.model';
import { APP_DATE_FORMAT, APP_LOCAL_DATE_FORMAT } from 'app/config/constants';

export interface IItxorgbranchDetailProps extends StateProps, DispatchProps, RouteComponentProps<{ id: string }> {}

export const ItxorgbranchDetail = (props: IItxorgbranchDetailProps) => {
  useEffect(() => {
    props.getEntity(props.match.params.id);
  }, []);

  const { itxorgbranchEntity } = props;
  return (
    <Row>
      <Col md="8">
        <h2>
          <Translate contentKey="sampleHrApp.itxorgbranch.detail.title">Itxorgbranch</Translate> [<b>{itxorgbranchEntity.id}</b>]
        </h2>
        <dl className="jh-entity-details">
          <dt>
            <span id="code">
              <Translate contentKey="sampleHrApp.itxorgbranch.code">Code</Translate>
            </span>
          </dt>
          <dd>{itxorgbranchEntity.code}</dd>
          <dt>
            <span id="name">
              <Translate contentKey="sampleHrApp.itxorgbranch.name">Name</Translate>
            </span>
          </dt>
          <dd>{itxorgbranchEntity.name}</dd>
          <dt>
            <span id="localname">
              <Translate contentKey="sampleHrApp.itxorgbranch.localname">Localname</Translate>
            </span>
          </dt>
          <dd>{itxorgbranchEntity.localname}</dd>
          <dt>
            <span id="brachtype">
              <Translate contentKey="sampleHrApp.itxorgbranch.brachtype">Brachtype</Translate>
            </span>
          </dt>
          <dd>{itxorgbranchEntity.brachtype}</dd>
          <dt>
            <Translate contentKey="sampleHrApp.itxorgbranch.orgid">Orgid</Translate>
          </dt>
          <dd>{itxorgbranchEntity.orgid ? itxorgbranchEntity.orgid.id : ''}</dd>
        </dl>
        <Button tag={Link} to="/itxorgbranch" replace color="info">
          <FontAwesomeIcon icon="arrow-left" />{' '}
          <span className="d-none d-md-inline">
            <Translate contentKey="entity.action.back">Back</Translate>
          </span>
        </Button>
        &nbsp;
        <Button tag={Link} to={`/itxorgbranch/${itxorgbranchEntity.id}/edit`} replace color="primary">
          <FontAwesomeIcon icon="pencil-alt" />{' '}
          <span className="d-none d-md-inline">
            <Translate contentKey="entity.action.edit">Edit</Translate>
          </span>
        </Button>
      </Col>
    </Row>
  );
};

const mapStateToProps = ({ itxorgbranch }: IRootState) => ({
  itxorgbranchEntity: itxorgbranch.entity,
});

const mapDispatchToProps = { getEntity };

type StateProps = ReturnType<typeof mapStateToProps>;
type DispatchProps = typeof mapDispatchToProps;

export default connect(mapStateToProps, mapDispatchToProps)(ItxorgbranchDetail);
