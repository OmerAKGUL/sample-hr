import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { Link, RouteComponentProps } from 'react-router-dom';
import { Button, Row, Col } from 'reactstrap';
import { Translate, ICrudGetAction, TextFormat } from 'react-jhipster';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { IRootState } from 'app/shared/reducers';
import { getEntity } from './jhiuser.reducer';
import { IJhiuser } from 'app/shared/model/jhiuser.model';
import { APP_DATE_FORMAT, APP_LOCAL_DATE_FORMAT } from 'app/config/constants';

export interface IJhiuserDetailProps extends StateProps, DispatchProps, RouteComponentProps<{ id: string }> {}

export const JhiuserDetail = (props: IJhiuserDetailProps) => {
  useEffect(() => {
    props.getEntity(props.match.params.id);
  }, []);

  const { jhiuserEntity } = props;
  return (
    <Row>
      <Col md="8">
        <h2>
          <Translate contentKey="sampleHrApp.jhiuser.detail.title">Jhiuser</Translate> [<b>{jhiuserEntity.id}</b>]
        </h2>
        <dl className="jh-entity-details">
          <dt>
            <span id="loginname">
              <Translate contentKey="sampleHrApp.jhiuser.loginname">Loginname</Translate>
            </span>
          </dt>
          <dd>{jhiuserEntity.loginname}</dd>
          <dt>
            <span id="passwordhash">
              <Translate contentKey="sampleHrApp.jhiuser.passwordhash">Passwordhash</Translate>
            </span>
          </dt>
          <dd>{jhiuserEntity.passwordhash}</dd>
          <dt>
            <span id="firstname">
              <Translate contentKey="sampleHrApp.jhiuser.firstname">Firstname</Translate>
            </span>
          </dt>
          <dd>{jhiuserEntity.firstname}</dd>
          <dt>
            <span id="lastname">
              <Translate contentKey="sampleHrApp.jhiuser.lastname">Lastname</Translate>
            </span>
          </dt>
          <dd>{jhiuserEntity.lastname}</dd>
          <dt>
            <span id="imageurl">
              <Translate contentKey="sampleHrApp.jhiuser.imageurl">Imageurl</Translate>
            </span>
          </dt>
          <dd>{jhiuserEntity.imageurl}</dd>
          <dt>
            <span id="langkey">
              <Translate contentKey="sampleHrApp.jhiuser.langkey">Langkey</Translate>
            </span>
          </dt>
          <dd>{jhiuserEntity.langkey}</dd>
          <dt>
            <span id="activationkey">
              <Translate contentKey="sampleHrApp.jhiuser.activationkey">Activationkey</Translate>
            </span>
          </dt>
          <dd>{jhiuserEntity.activationkey}</dd>
          <dt>
            <span id="resetkey">
              <Translate contentKey="sampleHrApp.jhiuser.resetkey">Resetkey</Translate>
            </span>
          </dt>
          <dd>{jhiuserEntity.resetkey}</dd>
          <dt>
            <span id="createdby">
              <Translate contentKey="sampleHrApp.jhiuser.createdby">Createdby</Translate>
            </span>
          </dt>
          <dd>{jhiuserEntity.createdby}</dd>
          <dt>
            <span id="createddate">
              <Translate contentKey="sampleHrApp.jhiuser.createddate">Createddate</Translate>
            </span>
          </dt>
          <dd>
            {jhiuserEntity.createddate ? <TextFormat value={jhiuserEntity.createddate} type="date" format={APP_DATE_FORMAT} /> : null}
          </dd>
          <dt>
            <span id="resetdate">
              <Translate contentKey="sampleHrApp.jhiuser.resetdate">Resetdate</Translate>
            </span>
          </dt>
          <dd>{jhiuserEntity.resetdate ? <TextFormat value={jhiuserEntity.resetdate} type="date" format={APP_DATE_FORMAT} /> : null}</dd>
          <dt>
            <span id="lastmodifiedby">
              <Translate contentKey="sampleHrApp.jhiuser.lastmodifiedby">Lastmodifiedby</Translate>
            </span>
          </dt>
          <dd>{jhiuserEntity.lastmodifiedby}</dd>
          <dt>
            <span id="lastmodifieddate">
              <Translate contentKey="sampleHrApp.jhiuser.lastmodifieddate">Lastmodifieddate</Translate>
            </span>
          </dt>
          <dd>
            {jhiuserEntity.lastmodifieddate ? (
              <TextFormat value={jhiuserEntity.lastmodifieddate} type="date" format={APP_DATE_FORMAT} />
            ) : null}
          </dd>
        </dl>
        <Button tag={Link} to="/jhiuser" replace color="info">
          <FontAwesomeIcon icon="arrow-left" />{' '}
          <span className="d-none d-md-inline">
            <Translate contentKey="entity.action.back">Back</Translate>
          </span>
        </Button>
        &nbsp;
        <Button tag={Link} to={`/jhiuser/${jhiuserEntity.id}/edit`} replace color="primary">
          <FontAwesomeIcon icon="pencil-alt" />{' '}
          <span className="d-none d-md-inline">
            <Translate contentKey="entity.action.edit">Edit</Translate>
          </span>
        </Button>
      </Col>
    </Row>
  );
};

const mapStateToProps = ({ jhiuser }: IRootState) => ({
  jhiuserEntity: jhiuser.entity,
});

const mapDispatchToProps = { getEntity };

type StateProps = ReturnType<typeof mapStateToProps>;
type DispatchProps = typeof mapDispatchToProps;

export default connect(mapStateToProps, mapDispatchToProps)(JhiuserDetail);
