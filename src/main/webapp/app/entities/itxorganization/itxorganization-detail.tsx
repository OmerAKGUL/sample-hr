import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { Link, RouteComponentProps } from 'react-router-dom';
import { Button, Row, Col } from 'reactstrap';
import { Translate, ICrudGetAction, TextFormat } from 'react-jhipster';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { IRootState } from 'app/shared/reducers';
import { getEntity } from './itxorganization.reducer';
import { IItxorganization } from 'app/shared/model/itxorganization.model';
import { APP_DATE_FORMAT, APP_LOCAL_DATE_FORMAT } from 'app/config/constants';

export interface IItxorganizationDetailProps extends StateProps, DispatchProps, RouteComponentProps<{ id: string }> {}

export const ItxorganizationDetail = (props: IItxorganizationDetailProps) => {
  useEffect(() => {
    props.getEntity(props.match.params.id);
  }, []);

  const { itxorganizationEntity } = props;
  return (
    <Row>
      <Col md="8">
        <h2>
          <Translate contentKey="sampleHrApp.itxorganization.detail.title">Itxorganization</Translate> [<b>{itxorganizationEntity.id}</b>]
        </h2>
        <dl className="jh-entity-details">
          <dt>
            <span id="commtitle">
              <Translate contentKey="sampleHrApp.itxorganization.commtitle">Commtitle</Translate>
            </span>
          </dt>
          <dd>{itxorganizationEntity.commtitle}</dd>
          <dt>
            <span id="localcommtitle">
              <Translate contentKey="sampleHrApp.itxorganization.localcommtitle">Localcommtitle</Translate>
            </span>
          </dt>
          <dd>{itxorganizationEntity.localcommtitle}</dd>
          <dt>
            <span id="sector">
              <Translate contentKey="sampleHrApp.itxorganization.sector">Sector</Translate>
            </span>
          </dt>
          <dd>{itxorganizationEntity.sector}</dd>
          <dt>
            <span id="segment">
              <Translate contentKey="sampleHrApp.itxorganization.segment">Segment</Translate>
            </span>
          </dt>
          <dd>{itxorganizationEntity.segment}</dd>
          <dt>
            <span id="traderegno">
              <Translate contentKey="sampleHrApp.itxorganization.traderegno">Traderegno</Translate>
            </span>
          </dt>
          <dd>{itxorganizationEntity.traderegno}</dd>
          <dt>
            <span id="hqaddress">
              <Translate contentKey="sampleHrApp.itxorganization.hqaddress">Hqaddress</Translate>
            </span>
          </dt>
          <dd>{itxorganizationEntity.hqaddress}</dd>
          <dt>
            <span id="enterprisetype">
              <Translate contentKey="sampleHrApp.itxorganization.enterprisetype">Enterprisetype</Translate>
            </span>
          </dt>
          <dd>{itxorganizationEntity.enterprisetype}</dd>
          <dt>
            <span id="registerdate">
              <Translate contentKey="sampleHrApp.itxorganization.registerdate">Registerdate</Translate>
            </span>
          </dt>
          <dd>
            {itxorganizationEntity.registerdate ? (
              <TextFormat value={itxorganizationEntity.registerdate} type="date" format={APP_DATE_FORMAT} />
            ) : null}
          </dd>
          <dt>
            <span id="swiftcode">
              <Translate contentKey="sampleHrApp.itxorganization.swiftcode">Swiftcode</Translate>
            </span>
          </dt>
          <dd>{itxorganizationEntity.swiftcode}</dd>
          <dt>
            <span id="wwwaddr">
              <Translate contentKey="sampleHrApp.itxorganization.wwwaddr">Wwwaddr</Translate>
            </span>
          </dt>
          <dd>{itxorganizationEntity.wwwaddr}</dd>
          <dt>
            <Translate contentKey="sampleHrApp.itxorganization.regcountry">Regcountry</Translate>
          </dt>
          <dd>{itxorganizationEntity.regcountry ? itxorganizationEntity.regcountry.id : ''}</dd>
        </dl>
        <Button tag={Link} to="/itxorganization" replace color="info">
          <FontAwesomeIcon icon="arrow-left" />{' '}
          <span className="d-none d-md-inline">
            <Translate contentKey="entity.action.back">Back</Translate>
          </span>
        </Button>
        &nbsp;
        <Button tag={Link} to={`/itxorganization/${itxorganizationEntity.id}/edit`} replace color="primary">
          <FontAwesomeIcon icon="pencil-alt" />{' '}
          <span className="d-none d-md-inline">
            <Translate contentKey="entity.action.edit">Edit</Translate>
          </span>
        </Button>
      </Col>
    </Row>
  );
};

const mapStateToProps = ({ itxorganization }: IRootState) => ({
  itxorganizationEntity: itxorganization.entity,
});

const mapDispatchToProps = { getEntity };

type StateProps = ReturnType<typeof mapStateToProps>;
type DispatchProps = typeof mapDispatchToProps;

export default connect(mapStateToProps, mapDispatchToProps)(ItxorganizationDetail);
