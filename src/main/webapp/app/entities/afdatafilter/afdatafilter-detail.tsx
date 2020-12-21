import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { Link, RouteComponentProps } from 'react-router-dom';
import { Button, Row, Col } from 'reactstrap';
import { Translate, ICrudGetAction } from 'react-jhipster';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { IRootState } from 'app/shared/reducers';
import { getEntity } from './afdatafilter.reducer';
import { IAfdatafilter } from 'app/shared/model/afdatafilter.model';
import { APP_DATE_FORMAT, APP_LOCAL_DATE_FORMAT } from 'app/config/constants';

export interface IAfdatafilterDetailProps extends StateProps, DispatchProps, RouteComponentProps<{ id: string }> {}

export const AfdatafilterDetail = (props: IAfdatafilterDetailProps) => {
  useEffect(() => {
    props.getEntity(props.match.params.id);
  }, []);

  const { afdatafilterEntity } = props;
  return (
    <Row>
      <Col md="8">
        <h2>
          <Translate contentKey="sampleHrApp.afdatafilter.detail.title">Afdatafilter</Translate> [<b>{afdatafilterEntity.id}</b>]
        </h2>
        <dl className="jh-entity-details">
          <dt>
            <span id="code">
              <Translate contentKey="sampleHrApp.afdatafilter.code">Code</Translate>
            </span>
          </dt>
          <dd>{afdatafilterEntity.code}</dd>
          <dt>
            <span id="name">
              <Translate contentKey="sampleHrApp.afdatafilter.name">Name</Translate>
            </span>
          </dt>
          <dd>{afdatafilterEntity.name}</dd>
          <dt>
            <span id="descr">
              <Translate contentKey="sampleHrApp.afdatafilter.descr">Descr</Translate>
            </span>
          </dt>
          <dd>{afdatafilterEntity.descr}</dd>
          <dt>
            <span id="appscript">
              <Translate contentKey="sampleHrApp.afdatafilter.appscript">Appscript</Translate>
            </span>
          </dt>
          <dd>{afdatafilterEntity.appscript}</dd>
          <dt>
            <span id="type">
              <Translate contentKey="sampleHrApp.afdatafilter.type">Type</Translate>
            </span>
          </dt>
          <dd>{afdatafilterEntity.type}</dd>
        </dl>
        <Button tag={Link} to="/afdatafilter" replace color="info">
          <FontAwesomeIcon icon="arrow-left" />{' '}
          <span className="d-none d-md-inline">
            <Translate contentKey="entity.action.back">Back</Translate>
          </span>
        </Button>
        &nbsp;
        <Button tag={Link} to={`/afdatafilter/${afdatafilterEntity.id}/edit`} replace color="primary">
          <FontAwesomeIcon icon="pencil-alt" />{' '}
          <span className="d-none d-md-inline">
            <Translate contentKey="entity.action.edit">Edit</Translate>
          </span>
        </Button>
      </Col>
    </Row>
  );
};

const mapStateToProps = ({ afdatafilter }: IRootState) => ({
  afdatafilterEntity: afdatafilter.entity,
});

const mapDispatchToProps = { getEntity };

type StateProps = ReturnType<typeof mapStateToProps>;
type DispatchProps = typeof mapDispatchToProps;

export default connect(mapStateToProps, mapDispatchToProps)(AfdatafilterDetail);
