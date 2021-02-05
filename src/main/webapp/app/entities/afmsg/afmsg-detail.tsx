import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { Link, RouteComponentProps } from 'react-router-dom';
import { Button, Row, Col } from 'reactstrap';
import { Translate, ICrudGetAction } from 'react-jhipster';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { IRootState } from 'app/shared/reducers';
import { getEntity } from './afmsg.reducer';
import { IAfmsg } from 'app/shared/model/afmsg.model';
import { APP_DATE_FORMAT, APP_LOCAL_DATE_FORMAT } from 'app/config/constants';

export interface IAfmsgDetailProps extends StateProps, DispatchProps, RouteComponentProps<{ id: string }> {}

export const AfmsgDetail = (props: IAfmsgDetailProps) => {
  useEffect(() => {
    props.getEntity(props.match.params.id);
  }, []);

  const { afmsgEntity } = props;
  return (
    <Row>
      <Col md="8">
        <h2>
          <Translate contentKey="sampleHrApp.afmsg.detail.title">Afmsg</Translate> [<b>{afmsgEntity.id}</b>]
        </h2>
        <dl className="jh-entity-details">
          <dt>
            <span id="appmsgtype">
              <Translate contentKey="sampleHrApp.afmsg.appmsgtype">Appmsgtype</Translate>
            </span>
          </dt>
          <dd>{afmsgEntity.appmsgtype}</dd>
          <dt>
            <span id="apprefctxinfo">
              <Translate contentKey="sampleHrApp.afmsg.apprefctxinfo">Apprefctxinfo</Translate>
            </span>
          </dt>
          <dd>{afmsgEntity.apprefctxinfo}</dd>
          <dt>
            <span id="appmsgcode">
              <Translate contentKey="sampleHrApp.afmsg.appmsgcode">Appmsgcode</Translate>
            </span>
          </dt>
          <dd>{afmsgEntity.appmsgcode}</dd>
          <dt>
            <span id="langisocode">
              <Translate contentKey="sampleHrApp.afmsg.langisocode">Langisocode</Translate>
            </span>
          </dt>
          <dd>{afmsgEntity.langisocode}</dd>
          <dt>
            <span id="appmsgtxt">
              <Translate contentKey="sampleHrApp.afmsg.appmsgtxt">Appmsgtxt</Translate>
            </span>
          </dt>
          <dd>{afmsgEntity.appmsgtxt}</dd>
          <dt>
            <span id="msgseverity">
              <Translate contentKey="sampleHrApp.afmsg.msgseverity">Msgseverity</Translate>
            </span>
          </dt>
          <dd>{afmsgEntity.msgseverity}</dd>
          <dt>
            <Translate contentKey="sampleHrApp.afmsg.appsyscode">Appsyscode</Translate>
          </dt>
          <dd>{afmsgEntity.appsyscode ? afmsgEntity.appsyscode.name : ''}</dd>
        </dl>
        <Button tag={Link} to="/modules/af/afmsg" replace color="info">
          <FontAwesomeIcon icon="arrow-left" />{' '}
          <span className="d-none d-md-inline">
            <Translate contentKey="entity.action.back">Back</Translate>
          </span>
        </Button>
        &nbsp;
        <Button tag={Link} to={`/modules/af/afmsg/${afmsgEntity.id}`} replace color="primary">
          <FontAwesomeIcon icon="pencil-alt" />{' '}
          <span className="d-none d-md-inline">
            <Translate contentKey="entity.action.edit">Edit</Translate>
          </span>
        </Button>
      </Col>
    </Row>
  );
};

const mapStateToProps = ({ afmsg }: IRootState) => ({
  afmsgEntity: afmsg.entity,
});

const mapDispatchToProps = { getEntity };

type StateProps = ReturnType<typeof mapStateToProps>;
type DispatchProps = typeof mapDispatchToProps;

export default connect(mapStateToProps, mapDispatchToProps)(AfmsgDetail);
