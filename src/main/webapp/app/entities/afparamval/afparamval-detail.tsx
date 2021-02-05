import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { Link, RouteComponentProps } from 'react-router-dom';
import { Button, Row, Col } from 'reactstrap';
import { Translate, ICrudGetAction, TextFormat } from 'react-jhipster';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { IRootState } from 'app/shared/reducers';
import { getEntity } from './afparamval.reducer';
import { IAfparamval } from 'app/shared/model/afparamval.model';
import { APP_DATE_FORMAT, APP_LOCAL_DATE_FORMAT } from 'app/config/constants';

export interface IAfparamvalDetailProps extends StateProps, DispatchProps, RouteComponentProps<{ id: string }> {}

export const AfparamvalDetail = (props: IAfparamvalDetailProps) => {
  useEffect(() => {
    props.getEntity(props.match.params.id);
  }, []);

  const { afparamvalEntity } = props;
  return (
    <Row>
      <Col md="8">
        <h2>
          <Translate contentKey="sampleHrApp.afparamval.detail.title">Afparamval</Translate> [<b>{afparamvalEntity.id}</b>]
        </h2>
        <dl className="jh-entity-details">
          <dt>
            <span id="code">
              <Translate contentKey="sampleHrApp.afparamval.code">Code</Translate>
            </span>
          </dt>
          <dd>{afparamvalEntity.code}</dd>
          <dt>
            <span id="idxno">
              <Translate contentKey="sampleHrApp.afparamval.idxno">Idxno</Translate>
            </span>
          </dt>
          <dd>{afparamvalEntity.idxno}</dd>
          <dt>
            <span id="paramtype">
              <Translate contentKey="sampleHrApp.afparamval.paramtype">Paramtype</Translate>
            </span>
          </dt>
          <dd>{afparamvalEntity.paramtype}</dd>
          <dt>
            <span id="paramgrpname">
              <Translate contentKey="sampleHrApp.afparamval.paramgrpname">Paramgrpname</Translate>
            </span>
          </dt>
          <dd>{afparamvalEntity.paramgrpname}</dd>
          <dt>
            <span id="valuetype">
              <Translate contentKey="sampleHrApp.afparamval.valuetype">Valuetype</Translate>
            </span>
          </dt>
          <dd>{afparamvalEntity.valuetype}</dd>
          <dt>
            <span id="valueformat">
              <Translate contentKey="sampleHrApp.afparamval.valueformat">Valueformat</Translate>
            </span>
          </dt>
          <dd>{afparamvalEntity.valueformat}</dd>
          <dt>
            <span id="valueunit">
              <Translate contentKey="sampleHrApp.afparamval.valueunit">Valueunit</Translate>
            </span>
          </dt>
          <dd>{afparamvalEntity.valueunit}</dd>
          <dt>
            <span id="value">
              <Translate contentKey="sampleHrApp.afparamval.value">Value</Translate>
            </span>
          </dt>
          <dd>{afparamvalEntity.value}</dd>
          <dt>
            <span id="descr">
              <Translate contentKey="sampleHrApp.afparamval.descr">Descr</Translate>
            </span>
          </dt>
          <dd>{afparamvalEntity.descr}</dd>
          <dt>
            <span id="ownersys">
              <Translate contentKey="sampleHrApp.afparamval.ownersys">Ownersys</Translate>
            </span>
          </dt>
          <dd>{afparamvalEntity.ownersys}</dd>
          { /* <dt>
            <span id="createdt">
              <Translate contentKey="sampleHrApp.afparamval.createdt">Createdt</Translate>
            </span>
          </dt>
          <dd>
            {afparamvalEntity.createdt ? <TextFormat value={afparamvalEntity.createdt} type="date" format={APP_DATE_FORMAT} /> : null}
          </dd>
          <dt>
            <span id="updatedt">
              <Translate contentKey="sampleHrApp.afparamval.updatedt">Updatedt</Translate>
            </span>
          </dt>
          <dd>
            {afparamvalEntity.updatedt ? <TextFormat value={afparamvalEntity.updatedt} type="date" format={APP_DATE_FORMAT} /> : null}
          </dd>
          <dt>
            <span id="createusr">
              <Translate contentKey="sampleHrApp.afparamval.createusr">Createusr</Translate>
            </span>
          </dt>
          <dd>{afparamvalEntity.createusr}</dd>
          <dt>
            <span id="updateusr">
              <Translate contentKey="sampleHrApp.afparamval.updateusr">Updateusr</Translate>
            </span>
          </dt>
          <dd>{afparamvalEntity.updateusr}</dd> */ }
          <dt>
            <span id="wfstate">
              <Translate contentKey="sampleHrApp.afparamval.wfstate">Wfstate</Translate>
            </span>
          </dt>
          <dd>{afparamvalEntity.wfstate}</dd>
          <dt>
            <span id="wfprocid">
              <Translate contentKey="sampleHrApp.afparamval.wfprocid">Wfprocid</Translate>
            </span>
          </dt>
          <dd>{afparamvalEntity.wfprocid}</dd>
        </dl>
        <Button tag={Link} to="/modules/af/afparamval" replace color="info">
          <FontAwesomeIcon icon="arrow-left" />{' '}
          <span className="d-none d-md-inline">
            <Translate contentKey="entity.action.back">Back</Translate>
          </span>
        </Button>
        &nbsp;
        <Button tag={Link} to={`/modules/af/afparamval/${afparamvalEntity.id}`} replace color="primary">
          <FontAwesomeIcon icon="pencil-alt" />{' '}
          <span className="d-none d-md-inline">
            <Translate contentKey="entity.action.edit">Edit</Translate>
          </span>
        </Button>
      </Col>
    </Row>
  );
};

const mapStateToProps = ({ afparamval }: IRootState) => ({
  afparamvalEntity: afparamval.entity,
});

const mapDispatchToProps = { getEntity };

type StateProps = ReturnType<typeof mapStateToProps>;
type DispatchProps = typeof mapDispatchToProps;

export default connect(mapStateToProps, mapDispatchToProps)(AfparamvalDetail);
