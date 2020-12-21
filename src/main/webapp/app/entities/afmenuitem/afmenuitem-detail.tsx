import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { Link, RouteComponentProps } from 'react-router-dom';
import { Button, Row, Col } from 'reactstrap';
import { Translate, ICrudGetAction } from 'react-jhipster';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { IRootState } from 'app/shared/reducers';
import { getEntity } from './afmenuitem.reducer';
import { IAfmenuitem } from 'app/shared/model/afmenuitem.model';
import { APP_DATE_FORMAT, APP_LOCAL_DATE_FORMAT } from 'app/config/constants';

export interface IAfmenuitemDetailProps extends StateProps, DispatchProps, RouteComponentProps<{ id: string }> {}

export const AfmenuitemDetail = (props: IAfmenuitemDetailProps) => {
  useEffect(() => {
    props.getEntity(props.match.params.id);
  }, []);

  const { afmenuitemEntity } = props;
  return (
    <Row>
      <Col md="8">
        <h2>
          <Translate contentKey="sampleHrApp.afmenuitem.detail.title">Afmenuitem</Translate> [<b>{afmenuitemEntity.id}</b>]
        </h2>
        <dl className="jh-entity-details">
          <dt>
            <span id="code">
              <Translate contentKey="sampleHrApp.afmenuitem.code">Code</Translate>
            </span>
          </dt>
          <dd>{afmenuitemEntity.code}</dd>
          <dt>
            <span id="afsid">
              <Translate contentKey="sampleHrApp.afmenuitem.afsid">Afsid</Translate>
            </span>
          </dt>
          <dd>{afmenuitemEntity.afsid}</dd>
          <dt>
            <span id="name">
              <Translate contentKey="sampleHrApp.afmenuitem.name">Name</Translate>
            </span>
          </dt>
          <dd>{afmenuitemEntity.name}</dd>
          <dt>
            <span id="title">
              <Translate contentKey="sampleHrApp.afmenuitem.title">Title</Translate>
            </span>
          </dt>
          <dd>{afmenuitemEntity.title}</dd>
          <dt>
            <span id="descr">
              <Translate contentKey="sampleHrApp.afmenuitem.descr">Descr</Translate>
            </span>
          </dt>
          <dd>{afmenuitemEntity.descr}</dd>
          <dt>
            <span id="linktype">
              <Translate contentKey="sampleHrApp.afmenuitem.linktype">Linktype</Translate>
            </span>
          </dt>
          <dd>{afmenuitemEntity.linktype}</dd>
          <dt>
            <span id="appreflinkurl">
              <Translate contentKey="sampleHrApp.afmenuitem.appreflinkurl">Appreflinkurl</Translate>
            </span>
          </dt>
          <dd>{afmenuitemEntity.appreflinkurl}</dd>
          <dt>
            <Translate contentKey="sampleHrApp.afmenuitem.modulecode">Modulecode</Translate>
          </dt>
          <dd>{afmenuitemEntity.modulecode ? afmenuitemEntity.modulecode.id : ''}</dd>
          <dt>
            <Translate contentKey="sampleHrApp.afmenuitem.apprefformcode">Apprefformcode</Translate>
          </dt>
          <dd>{afmenuitemEntity.apprefformcode ? afmenuitemEntity.apprefformcode.id : ''}</dd>
        </dl>
        <Button tag={Link} to="/afmenuitem" replace color="info">
          <FontAwesomeIcon icon="arrow-left" />{' '}
          <span className="d-none d-md-inline">
            <Translate contentKey="entity.action.back">Back</Translate>
          </span>
        </Button>
        &nbsp;
        <Button tag={Link} to={`/afmenuitem/${afmenuitemEntity.id}/edit`} replace color="primary">
          <FontAwesomeIcon icon="pencil-alt" />{' '}
          <span className="d-none d-md-inline">
            <Translate contentKey="entity.action.edit">Edit</Translate>
          </span>
        </Button>
      </Col>
    </Row>
  );
};

const mapStateToProps = ({ afmenuitem }: IRootState) => ({
  afmenuitemEntity: afmenuitem.entity,
});

const mapDispatchToProps = { getEntity };

type StateProps = ReturnType<typeof mapStateToProps>;
type DispatchProps = typeof mapDispatchToProps;

export default connect(mapStateToProps, mapDispatchToProps)(AfmenuitemDetail);
