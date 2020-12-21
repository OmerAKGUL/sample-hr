import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { Link, RouteComponentProps } from 'react-router-dom';
import { Button, Row, Col } from 'reactstrap';
import { Translate, ICrudGetAction } from 'react-jhipster';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { IRootState } from 'app/shared/reducers';
import { getEntity } from './afsauthentication.reducer';
import { IAfsauthentication } from 'app/shared/model/afsauthentication.model';
import { APP_DATE_FORMAT, APP_LOCAL_DATE_FORMAT } from 'app/config/constants';

export interface IAfsauthenticationDetailProps extends StateProps, DispatchProps, RouteComponentProps<{ id: string }> {}

export const AfsauthenticationDetail = (props: IAfsauthenticationDetailProps) => {
  useEffect(() => {
    props.getEntity(props.match.params.id);
  }, []);

  const { afsauthenticationEntity } = props;
  return (
    <Row>
      <Col md="8">
        <h2>
          <Translate contentKey="sampleHrApp.afsauthentication.detail.title">Afsauthentication</Translate> [
          <b>{afsauthenticationEntity.id}</b>]
        </h2>
        <dl className="jh-entity-details">
          <dt>
            <span id="afsid">
              <Translate contentKey="sampleHrApp.afsauthentication.afsid">Afsid</Translate>
            </span>
          </dt>
          <dd>{afsauthenticationEntity.afsid}</dd>
          <dt>
            <span id="authtype">
              <Translate contentKey="sampleHrApp.afsauthentication.authtype">Authtype</Translate>
            </span>
          </dt>
          <dd>{afsauthenticationEntity.authtype}</dd>
          <dt>
            <span id="pwdhash">
              <Translate contentKey="sampleHrApp.afsauthentication.pwdhash">Pwdhash</Translate>
            </span>
          </dt>
          <dd>{afsauthenticationEntity.pwdhash}</dd>
          <dt>
            <span id="secprotocol">
              <Translate contentKey="sampleHrApp.afsauthentication.secprotocol">Secprotocol</Translate>
            </span>
          </dt>
          <dd>{afsauthenticationEntity.secprotocol}</dd>
          <dt>
            <span id="appauthlink">
              <Translate contentKey="sampleHrApp.afsauthentication.appauthlink">Appauthlink</Translate>
            </span>
          </dt>
          <dd>{afsauthenticationEntity.appauthlink}</dd>
          <dt>
            <Translate contentKey="sampleHrApp.afsauthentication.rolecode">Rolecode</Translate>
          </dt>
          <dd>{afsauthenticationEntity.rolecode ? afsauthenticationEntity.rolecode.id : ''}</dd>
          <dt>
            <Translate contentKey="sampleHrApp.afsauthentication.modulecode">Modulecode</Translate>
          </dt>
          <dd>{afsauthenticationEntity.modulecode ? afsauthenticationEntity.modulecode.id : ''}</dd>
        </dl>
        <Button tag={Link} to="/afsauthentication" replace color="info">
          <FontAwesomeIcon icon="arrow-left" />{' '}
          <span className="d-none d-md-inline">
            <Translate contentKey="entity.action.back">Back</Translate>
          </span>
        </Button>
        &nbsp;
        <Button tag={Link} to={`/afsauthentication/${afsauthenticationEntity.id}/edit`} replace color="primary">
          <FontAwesomeIcon icon="pencil-alt" />{' '}
          <span className="d-none d-md-inline">
            <Translate contentKey="entity.action.edit">Edit</Translate>
          </span>
        </Button>
      </Col>
    </Row>
  );
};

const mapStateToProps = ({ afsauthentication }: IRootState) => ({
  afsauthenticationEntity: afsauthentication.entity,
});

const mapDispatchToProps = { getEntity };

type StateProps = ReturnType<typeof mapStateToProps>;
type DispatchProps = typeof mapDispatchToProps;

export default connect(mapStateToProps, mapDispatchToProps)(AfsauthenticationDetail);
