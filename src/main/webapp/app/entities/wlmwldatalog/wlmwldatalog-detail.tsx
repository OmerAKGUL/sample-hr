import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { Link, RouteComponentProps } from 'react-router-dom';
import { Button, Row, Col } from 'reactstrap';
import { Translate, ICrudGetAction, TextFormat } from 'react-jhipster';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { IRootState } from 'app/shared/reducers';
import { getEntity } from './wlmwldatalog.reducer';
import { IWlmwldatalog } from 'app/shared/model/wlmwldatalog.model';
import { APP_DATE_FORMAT, APP_LOCAL_DATE_FORMAT } from 'app/config/constants';

export interface IWlmwldatalogDetailProps extends StateProps, DispatchProps, RouteComponentProps<{ id: string }> {}

export const WlmwldatalogDetail = (props: IWlmwldatalogDetailProps) => {
  useEffect(() => {
    props.getEntity(props.match.params.id);
  }, []);

  const { wlmwldatalogEntity } = props;
  return (
    <Row>
      <Col md="8">
        <h2>
          <Translate contentKey="sampleHrApp.wlmwldatalog.detail.title">Wlmwldatalog</Translate> [<b>{wlmwldatalogEntity.id}</b>]
        </h2>
        <dl className="jh-entity-details">
          <dt>
            <span id="dtchanged">
              <Translate contentKey="sampleHrApp.wlmwldatalog.dtchanged">Dtchanged</Translate>
            </span>
          </dt>
          <dd>
            {wlmwldatalogEntity.dtchanged ? <TextFormat value={wlmwldatalogEntity.dtchanged} type="date" format={APP_DATE_FORMAT} /> : null}
          </dd>
          <dt>
            <span id="changeusr">
              <Translate contentKey="sampleHrApp.wlmwldatalog.changeusr">Changeusr</Translate>
            </span>
          </dt>
          <dd>{wlmwldatalogEntity.changeusr}</dd>
          <dt>
            <span id="wltype">
              <Translate contentKey="sampleHrApp.wlmwldatalog.wltype">Wltype</Translate>
            </span>
          </dt>
          <dd>{wlmwldatalogEntity.wltype}</dd>
          <dt>
            <span id="createdt">
              <Translate contentKey="sampleHrApp.wlmwldatalog.createdt">Createdt</Translate>
            </span>
          </dt>
          <dd>
            {wlmwldatalogEntity.createdt ? <TextFormat value={wlmwldatalogEntity.createdt} type="date" format={APP_DATE_FORMAT} /> : null}
          </dd>
          <dt>
            <span id="updatedt">
              <Translate contentKey="sampleHrApp.wlmwldatalog.updatedt">Updatedt</Translate>
            </span>
          </dt>
          <dd>
            {wlmwldatalogEntity.updatedt ? <TextFormat value={wlmwldatalogEntity.updatedt} type="date" format={APP_DATE_FORMAT} /> : null}
          </dd>
          <dt>
            <span id="createusr">
              <Translate contentKey="sampleHrApp.wlmwldatalog.createusr">Createusr</Translate>
            </span>
          </dt>
          <dd>{wlmwldatalogEntity.createusr}</dd>
          <dt>
            <span id="updateusr">
              <Translate contentKey="sampleHrApp.wlmwldatalog.updateusr">Updateusr</Translate>
            </span>
          </dt>
          <dd>{wlmwldatalogEntity.updateusr}</dd>
          <dt>
            <span id="wfstate">
              <Translate contentKey="sampleHrApp.wlmwldatalog.wfstate">Wfstate</Translate>
            </span>
          </dt>
          <dd>{wlmwldatalogEntity.wfstate}</dd>
          <dt>
            <span id="wfprocid">
              <Translate contentKey="sampleHrApp.wlmwldatalog.wfprocid">Wfprocid</Translate>
            </span>
          </dt>
          <dd>{wlmwldatalogEntity.wfprocid}</dd>
          <dt>
            <span id="namedata">
              <Translate contentKey="sampleHrApp.wlmwldatalog.namedata">Namedata</Translate>
            </span>
          </dt>
          <dd>{wlmwldatalogEntity.namedata}</dd>
          <dt>
            <span id="addressdata">
              <Translate contentKey="sampleHrApp.wlmwldatalog.addressdata">Addressdata</Translate>
            </span>
          </dt>
          <dd>{wlmwldatalogEntity.addressdata}</dd>
          <dt>
            <span id="citydata">
              <Translate contentKey="sampleHrApp.wlmwldatalog.citydata">Citydata</Translate>
            </span>
          </dt>
          <dd>{wlmwldatalogEntity.citydata}</dd>
          <dt>
            <span id="countrydata">
              <Translate contentKey="sampleHrApp.wlmwldatalog.countrydata">Countrydata</Translate>
            </span>
          </dt>
          <dd>{wlmwldatalogEntity.countrydata}</dd>
          <dt>
            <span id="birthdatedata">
              <Translate contentKey="sampleHrApp.wlmwldatalog.birthdatedata">Birthdatedata</Translate>
            </span>
          </dt>
          <dd>
            {wlmwldatalogEntity.birthdatedata ? (
              <TextFormat value={wlmwldatalogEntity.birthdatedata} type="date" format={APP_LOCAL_DATE_FORMAT} />
            ) : null}
          </dd>
          <dt>
            <span id="tinnumberdata">
              <Translate contentKey="sampleHrApp.wlmwldatalog.tinnumberdata">Tinnumberdata</Translate>
            </span>
          </dt>
          <dd>{wlmwldatalogEntity.tinnumberdata}</dd>
          <dt>
            <Translate contentKey="sampleHrApp.wlmwldatalog.wlwldataid">Wlwldataid</Translate>
          </dt>
          <dd>{wlmwldatalogEntity.wlwldataid ? wlmwldatalogEntity.wlwldataid.id : ''}</dd>
        </dl>
        <Button tag={Link} to="/wlmwldatalog" replace color="info">
          <FontAwesomeIcon icon="arrow-left" />{' '}
          <span className="d-none d-md-inline">
            <Translate contentKey="entity.action.back">Back</Translate>
          </span>
        </Button>
        &nbsp;
        <Button tag={Link} to={`/wlmwldatalog/${wlmwldatalogEntity.id}/edit`} replace color="primary">
          <FontAwesomeIcon icon="pencil-alt" />{' '}
          <span className="d-none d-md-inline">
            <Translate contentKey="entity.action.edit">Edit</Translate>
          </span>
        </Button>
      </Col>
    </Row>
  );
};

const mapStateToProps = ({ wlmwldatalog }: IRootState) => ({
  wlmwldatalogEntity: wlmwldatalog.entity,
});

const mapDispatchToProps = { getEntity };

type StateProps = ReturnType<typeof mapStateToProps>;
type DispatchProps = typeof mapDispatchToProps;

export default connect(mapStateToProps, mapDispatchToProps)(WlmwldatalogDetail);
