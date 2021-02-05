import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { Link, RouteComponentProps } from 'react-router-dom';
import { Button, Row, Col } from 'reactstrap';
import { Translate, ICrudGetAction, TextFormat } from 'react-jhipster';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { IRootState } from 'app/shared/reducers';
import { getEntity } from './wlmwldata.reducer';
import { IWlmwldata } from 'app/shared/model/wlmwldata.model';
import { APP_DATE_FORMAT, APP_LOCAL_DATE_FORMAT } from 'app/config/constants';

export interface IWlmwldataDetailProps extends StateProps, DispatchProps, RouteComponentProps<{ id: string }> {}

export const WlmwldataDetail = (props: IWlmwldataDetailProps) => {
  useEffect(() => {
    props.getEntity(props.match.params.id);
  }, []);

  const { wlmwldataEntity } = props;
  return (
    <Row>
      <Col md="8">
        <h2>
          <Translate contentKey="sampleHrApp.wlmwldata.detail.title">Wlmwldata</Translate> [<b>{wlmwldataEntity.id}</b>]
        </h2>
        <dl className="jh-entity-details">
          <dt>
            <span id="createdt">
              <Translate contentKey="sampleHrApp.wlmwldata.createdt">Createdt</Translate>
            </span>
          </dt>
          <dd>{wlmwldataEntity.createdt ? <TextFormat value={wlmwldataEntity.createdt} type="date" format={APP_DATE_FORMAT} /> : null}</dd>
          <dt>
            <span id="updatedt">
              <Translate contentKey="sampleHrApp.wlmwldata.updatedt">Updatedt</Translate>
            </span>
          </dt>
          <dd>{wlmwldataEntity.updatedt ? <TextFormat value={wlmwldataEntity.updatedt} type="date" format={APP_DATE_FORMAT} /> : null}</dd>
          <dt>
            <span id="createusr">
              <Translate contentKey="sampleHrApp.wlmwldata.createusr">Createusr</Translate>
            </span>
          </dt>
          <dd>{wlmwldataEntity.createusr}</dd>
          <dt>
            <span id="updateusr">
              <Translate contentKey="sampleHrApp.wlmwldata.updateusr">Updateusr</Translate>
            </span>
          </dt>
          <dd>{wlmwldataEntity.updateusr}</dd>
          <dt>
            <span id="wfstate">
              <Translate contentKey="sampleHrApp.wlmwldata.wfstate">Wfstate</Translate>
            </span>
          </dt>
          <dd>{wlmwldataEntity.wfstate}</dd>
          <dt>
            <span id="wfprocid">
              <Translate contentKey="sampleHrApp.wlmwldata.wfprocid">Wfprocid</Translate>
            </span>
          </dt>
          <dd>{wlmwldataEntity.wfprocid}</dd>
          <dt>
            <span id="namedata">
              <Translate contentKey="sampleHrApp.wlmwldata.namedata">Namedata</Translate>
            </span>
          </dt>
          <dd>{wlmwldataEntity.namedata}</dd>
          <dt>
            <span id="addressdata">
              <Translate contentKey="sampleHrApp.wlmwldata.addressdata">Addressdata</Translate>
            </span>
          </dt>
          <dd>{wlmwldataEntity.addressdata}</dd>
          <dt>
            <span id="citydata">
              <Translate contentKey="sampleHrApp.wlmwldata.citydata">Citydata</Translate>
            </span>
          </dt>
          <dd>{wlmwldataEntity.citydata}</dd>
          <dt>
            <span id="countrydata">
              <Translate contentKey="sampleHrApp.wlmwldata.countrydata">Countrydata</Translate>
            </span>
          </dt>
          <dd>{wlmwldataEntity.countrydata}</dd>
          <dt>
            <span id="birthdatedata">
              <Translate contentKey="sampleHrApp.wlmwldata.birthdatedata">Birthdatedata</Translate>
            </span>
          </dt>
          <dd>
            {wlmwldataEntity.birthdatedata ? (
              <TextFormat value={wlmwldataEntity.birthdatedata} type="date" format={APP_LOCAL_DATE_FORMAT} />
            ) : null}
          </dd>
          <dt>
            <span id="tinnumberdata">
              <Translate contentKey="sampleHrApp.wlmwldata.tinnumberdata">Tinnumberdata</Translate>
            </span>
          </dt>
          <dd>{wlmwldataEntity.tinnumberdata}</dd>
          <dt>
            <Translate contentKey="sampleHrApp.wlmwldata.wltype">Wltype</Translate>
          </dt>
          <dd>{wlmwldataEntity.wltype ? wlmwldataEntity.wltype.id : ''}</dd>
        </dl>
        <Button tag={Link} to="/modules/wlm/wlmwldata" replace color="info">
          <FontAwesomeIcon icon="arrow-left" />{' '}
          <span className="d-none d-md-inline">
            <Translate contentKey="entity.action.back">Back</Translate>
          </span>
        </Button>
        &nbsp;
        <Button tag={Link} to={`/modules/wlm/wlmwldata/${wlmwldataEntity.id}/edit`} replace color="primary">
          <FontAwesomeIcon icon="pencil-alt" />{' '}
          <span className="d-none d-md-inline">
            <Translate contentKey="entity.action.edit">Edit</Translate>
          </span>
        </Button>
      </Col>
    </Row>
  );
};

const mapStateToProps = ({ wlmwldata }: IRootState) => ({
  wlmwldataEntity: wlmwldata.entity,
});

const mapDispatchToProps = { getEntity };

type StateProps = ReturnType<typeof mapStateToProps>;
type DispatchProps = typeof mapDispatchToProps;

export default connect(mapStateToProps, mapDispatchToProps)(WlmwldataDetail);
