import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { Link, RouteComponentProps } from 'react-router-dom';
import { Button, Row, Col } from 'reactstrap';
import { Translate, ICrudGetAction } from 'react-jhipster';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { IRootState } from 'app/shared/reducers';
import { getEntity } from './afform.reducer';
import { IAfform } from 'app/shared/model/afform.model';
import { APP_DATE_FORMAT, APP_LOCAL_DATE_FORMAT } from 'app/config/constants';

export interface IAfformDetailProps extends StateProps, DispatchProps, RouteComponentProps<{ id: string }> {}

export const AfformDetail = (props: IAfformDetailProps) => {
  useEffect(() => {
    props.getEntity(props.match.params.id);
  }, []);

  const { afformEntity } = props;
  return (
    <Row>
      <Col md="8">
        <h2>
          <Translate contentKey="sampleHrApp.afform.detail.title">Afform</Translate> [<b>{afformEntity.id}</b>]
        </h2>
        <dl className="jh-entity-details">
          <dt>
            <span id="title">
              <Translate contentKey="sampleHrApp.afform.title">Title</Translate>
            </span>
          </dt>
          <dd>{afformEntity.title}</dd>
          <dt>
            <span id="descr">
              <Translate contentKey="sampleHrApp.afform.descr">Descr</Translate>
            </span>
          </dt>
          <dd>{afformEntity.descr}</dd>
          <dt>
            <span id="apprefclsid">
              <Translate contentKey="sampleHrApp.afform.apprefclsid">Apprefclsid</Translate>
            </span>
          </dt>
          <dd>{afformEntity.apprefclsid}</dd>
          <dt>
            <span id="apprefformid">
              <Translate contentKey="sampleHrApp.afform.apprefformid">Apprefformid</Translate>
            </span>
          </dt>
          <dd>{afformEntity.apprefformid}</dd>
          <dt>
            <span id="appreflinkurl">
              <Translate contentKey="sampleHrApp.afform.appreflinkurl">Appreflinkurl</Translate>
            </span>
          </dt>
          <dd>{afformEntity.appreflinkurl}</dd>
          <dt>
            <Translate contentKey="sampleHrApp.afform.code">Code</Translate>
          </dt>
          <dd>{afformEntity.code ? afformEntity.code.id : ''}</dd>
        </dl>
        <Button tag={Link} to="/afform" replace color="info">
          <FontAwesomeIcon icon="arrow-left" />{' '}
          <span className="d-none d-md-inline">
            <Translate contentKey="entity.action.back">Back</Translate>
          </span>
        </Button>
        &nbsp;
        <Button tag={Link} to={`/afform/${afformEntity.id}/edit`} replace color="primary">
          <FontAwesomeIcon icon="pencil-alt" />{' '}
          <span className="d-none d-md-inline">
            <Translate contentKey="entity.action.edit">Edit</Translate>
          </span>
        </Button>
      </Col>
    </Row>
  );
};

const mapStateToProps = ({ afform }: IRootState) => ({
  afformEntity: afform.entity,
});

const mapDispatchToProps = { getEntity };

type StateProps = ReturnType<typeof mapStateToProps>;
type DispatchProps = typeof mapDispatchToProps;

export default connect(mapStateToProps, mapDispatchToProps)(AfformDetail);
