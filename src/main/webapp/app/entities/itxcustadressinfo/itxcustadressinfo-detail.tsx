import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { Link, RouteComponentProps } from 'react-router-dom';
import { Button, Row, Col } from 'reactstrap';
import { Translate, ICrudGetAction } from 'react-jhipster';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { IRootState } from 'app/shared/reducers';
import { getEntity } from './itxcustadressinfo.reducer';
import { IItxcustadressinfo } from 'app/shared/model/itxcustadressinfo.model';
import { APP_DATE_FORMAT, APP_LOCAL_DATE_FORMAT } from 'app/config/constants';

export interface IItxcustadressinfoDetailProps extends StateProps, DispatchProps, RouteComponentProps<{ id: string }> {}

export const ItxcustadressinfoDetail = (props: IItxcustadressinfoDetailProps) => {
  useEffect(() => {
    props.getEntity(props.match.params.id);
  }, []);

  const { itxcustadressinfoEntity } = props;
  return (
    <Row>
      <Col md="8">
        <h2>
          <Translate contentKey="sampleHrApp.itxcustadressinfo.detail.title">Itxcustadressinfo</Translate> [
          <b>{itxcustadressinfoEntity.id}</b>]
        </h2>
        <dl className="jh-entity-details">
          <dt>
            <span id="addrtype">
              <Translate contentKey="sampleHrApp.itxcustadressinfo.addrtype">Addrtype</Translate>
            </span>
          </dt>
          <dd>{itxcustadressinfoEntity.addrtype}</dd>
          <dt>
            <span id="addresstxt">
              <Translate contentKey="sampleHrApp.itxcustadressinfo.addresstxt">Addresstxt</Translate>
            </span>
          </dt>
          <dd>{itxcustadressinfoEntity.addresstxt}</dd>
          <dt>
            <span id="addrline1">
              <Translate contentKey="sampleHrApp.itxcustadressinfo.addrline1">Addrline 1</Translate>
            </span>
          </dt>
          <dd>{itxcustadressinfoEntity.addrline1}</dd>
          <dt>
            <span id="addrline2">
              <Translate contentKey="sampleHrApp.itxcustadressinfo.addrline2">Addrline 2</Translate>
            </span>
          </dt>
          <dd>{itxcustadressinfoEntity.addrline2}</dd>
          <dt>
            <span id="postcode">
              <Translate contentKey="sampleHrApp.itxcustadressinfo.postcode">Postcode</Translate>
            </span>
          </dt>
          <dd>{itxcustadressinfoEntity.postcode}</dd>
          <dt>
            <span id="street1">
              <Translate contentKey="sampleHrApp.itxcustadressinfo.street1">Street 1</Translate>
            </span>
          </dt>
          <dd>{itxcustadressinfoEntity.street1}</dd>
          <dt>
            <span id="street2">
              <Translate contentKey="sampleHrApp.itxcustadressinfo.street2">Street 2</Translate>
            </span>
          </dt>
          <dd>{itxcustadressinfoEntity.street2}</dd>
          <dt>
            <span id="street3">
              <Translate contentKey="sampleHrApp.itxcustadressinfo.street3">Street 3</Translate>
            </span>
          </dt>
          <dd>{itxcustadressinfoEntity.street3}</dd>
          <dt>
            <span id="town">
              <Translate contentKey="sampleHrApp.itxcustadressinfo.town">Town</Translate>
            </span>
          </dt>
          <dd>{itxcustadressinfoEntity.town}</dd>
          <dt>
            <span id="county">
              <Translate contentKey="sampleHrApp.itxcustadressinfo.county">County</Translate>
            </span>
          </dt>
          <dd>{itxcustadressinfoEntity.county}</dd>
          <dt>
            <span id="city">
              <Translate contentKey="sampleHrApp.itxcustadressinfo.city">City</Translate>
            </span>
          </dt>
          <dd>{itxcustadressinfoEntity.city}</dd>
          <dt>
            <Translate contentKey="sampleHrApp.itxcustadressinfo.country">Country</Translate>
          </dt>
          <dd>{itxcustadressinfoEntity.country ? itxcustadressinfoEntity.country.id : ''}</dd>
        </dl>
        <Button tag={Link} to="/itxcustadressinfo" replace color="info">
          <FontAwesomeIcon icon="arrow-left" />{' '}
          <span className="d-none d-md-inline">
            <Translate contentKey="entity.action.back">Back</Translate>
          </span>
        </Button>
        &nbsp;
        <Button tag={Link} to={`/itxcustadressinfo/${itxcustadressinfoEntity.id}/edit`} replace color="primary">
          <FontAwesomeIcon icon="pencil-alt" />{' '}
          <span className="d-none d-md-inline">
            <Translate contentKey="entity.action.edit">Edit</Translate>
          </span>
        </Button>
      </Col>
    </Row>
  );
};

const mapStateToProps = ({ itxcustadressinfo }: IRootState) => ({
  itxcustadressinfoEntity: itxcustadressinfo.entity,
});

const mapDispatchToProps = { getEntity };

type StateProps = ReturnType<typeof mapStateToProps>;
type DispatchProps = typeof mapDispatchToProps;

export default connect(mapStateToProps, mapDispatchToProps)(ItxcustadressinfoDetail);
