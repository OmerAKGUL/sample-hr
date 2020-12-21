import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { Link, RouteComponentProps } from 'react-router-dom';
import { Button, Row, Col } from 'reactstrap';
import { Translate, ICrudGetAction, TextFormat } from 'react-jhipster';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { IRootState } from 'app/shared/reducers';
import { getEntity } from './itxcustinfo.reducer';
import { IItxcustinfo } from 'app/shared/model/itxcustinfo.model';
import { APP_DATE_FORMAT, APP_LOCAL_DATE_FORMAT } from 'app/config/constants';

export interface IItxcustinfoDetailProps extends StateProps, DispatchProps, RouteComponentProps<{ id: string }> {}

export const ItxcustinfoDetail = (props: IItxcustinfoDetailProps) => {
  useEffect(() => {
    props.getEntity(props.match.params.id);
  }, []);

  const { itxcustinfoEntity } = props;
  return (
    <Row>
      <Col md="8">
        <h2>
          <Translate contentKey="sampleHrApp.itxcustinfo.detail.title">Itxcustinfo</Translate> [<b>{itxcustinfoEntity.id}</b>]
        </h2>
        <dl className="jh-entity-details">
          <dt>
            <span id="srcsyscustid">
              <Translate contentKey="sampleHrApp.itxcustinfo.srcsyscustid">Srcsyscustid</Translate>
            </span>
          </dt>
          <dd>{itxcustinfoEntity.srcsyscustid}</dd>
          <dt>
            <span id="itxid">
              <Translate contentKey="sampleHrApp.itxcustinfo.itxid">Itxid</Translate>
            </span>
          </dt>
          <dd>{itxcustinfoEntity.itxid}</dd>
          <dt>
            <span id="name">
              <Translate contentKey="sampleHrApp.itxcustinfo.name">Name</Translate>
            </span>
          </dt>
          <dd>{itxcustinfoEntity.name}</dd>
          <dt>
            <span id="midname">
              <Translate contentKey="sampleHrApp.itxcustinfo.midname">Midname</Translate>
            </span>
          </dt>
          <dd>{itxcustinfoEntity.midname}</dd>
          <dt>
            <span id="surname">
              <Translate contentKey="sampleHrApp.itxcustinfo.surname">Surname</Translate>
            </span>
          </dt>
          <dd>{itxcustinfoEntity.surname}</dd>
          <dt>
            <span id="birthdate">
              <Translate contentKey="sampleHrApp.itxcustinfo.birthdate">Birthdate</Translate>
            </span>
          </dt>
          <dd>
            {itxcustinfoEntity.birthdate ? (
              <TextFormat value={itxcustinfoEntity.birthdate} type="date" format={APP_LOCAL_DATE_FORMAT} />
            ) : null}
          </dd>
          <dt>
            <span id="commtitle">
              <Translate contentKey="sampleHrApp.itxcustinfo.commtitle">Commtitle</Translate>
            </span>
          </dt>
          <dd>{itxcustinfoEntity.commtitle}</dd>
          <dt>
            <span id="addresstype">
              <Translate contentKey="sampleHrApp.itxcustinfo.addresstype">Addresstype</Translate>
            </span>
          </dt>
          <dd>{itxcustinfoEntity.addresstype}</dd>
          <dt>
            <span id="address">
              <Translate contentKey="sampleHrApp.itxcustinfo.address">Address</Translate>
            </span>
          </dt>
          <dd>{itxcustinfoEntity.address}</dd>
          <dt>
            <span id="city">
              <Translate contentKey="sampleHrApp.itxcustinfo.city">City</Translate>
            </span>
          </dt>
          <dd>{itxcustinfoEntity.city}</dd>
          <dt>
            <span id="nationality">
              <Translate contentKey="sampleHrApp.itxcustinfo.nationality">Nationality</Translate>
            </span>
          </dt>
          <dd>{itxcustinfoEntity.nationality}</dd>
          <dt>
            <span id="nationalid">
              <Translate contentKey="sampleHrApp.itxcustinfo.nationalid">Nationalid</Translate>
            </span>
          </dt>
          <dd>{itxcustinfoEntity.nationalid}</dd>
          <dt>
            <span id="gender">
              <Translate contentKey="sampleHrApp.itxcustinfo.gender">Gender</Translate>
            </span>
          </dt>
          <dd>{itxcustinfoEntity.gender}</dd>
          <dt>
            <span id="createdt">
              <Translate contentKey="sampleHrApp.itxcustinfo.createdt">Createdt</Translate>
            </span>
          </dt>
          <dd>
            {itxcustinfoEntity.createdt ? <TextFormat value={itxcustinfoEntity.createdt} type="date" format={APP_DATE_FORMAT} /> : null}
          </dd>
          <dt>
            <span id="updatedt">
              <Translate contentKey="sampleHrApp.itxcustinfo.updatedt">Updatedt</Translate>
            </span>
          </dt>
          <dd>
            {itxcustinfoEntity.updatedt ? <TextFormat value={itxcustinfoEntity.updatedt} type="date" format={APP_DATE_FORMAT} /> : null}
          </dd>
          <dt>
            <span id="createusr">
              <Translate contentKey="sampleHrApp.itxcustinfo.createusr">Createusr</Translate>
            </span>
          </dt>
          <dd>{itxcustinfoEntity.createusr}</dd>
          <dt>
            <span id="updateusr">
              <Translate contentKey="sampleHrApp.itxcustinfo.updateusr">Updateusr</Translate>
            </span>
          </dt>
          <dd>{itxcustinfoEntity.updateusr}</dd>
          <dt>
            <span id="wfstate">
              <Translate contentKey="sampleHrApp.itxcustinfo.wfstate">Wfstate</Translate>
            </span>
          </dt>
          <dd>{itxcustinfoEntity.wfstate}</dd>
          <dt>
            <span id="wfprocid">
              <Translate contentKey="sampleHrApp.itxcustinfo.wfprocid">Wfprocid</Translate>
            </span>
          </dt>
          <dd>{itxcustinfoEntity.wfprocid}</dd>
          <dt>
            <span id="idtype1">
              <Translate contentKey="sampleHrApp.itxcustinfo.idtype1">Idtype 1</Translate>
            </span>
          </dt>
          <dd>{itxcustinfoEntity.idtype1}</dd>
          <dt>
            <span id="idno1">
              <Translate contentKey="sampleHrApp.itxcustinfo.idno1">Idno 1</Translate>
            </span>
          </dt>
          <dd>{itxcustinfoEntity.idno1}</dd>
          <dt>
            <span id="idtype2">
              <Translate contentKey="sampleHrApp.itxcustinfo.idtype2">Idtype 2</Translate>
            </span>
          </dt>
          <dd>{itxcustinfoEntity.idtype2}</dd>
          <dt>
            <span id="idno2">
              <Translate contentKey="sampleHrApp.itxcustinfo.idno2">Idno 2</Translate>
            </span>
          </dt>
          <dd>{itxcustinfoEntity.idno2}</dd>
          <dt>
            <span id="idtype3">
              <Translate contentKey="sampleHrApp.itxcustinfo.idtype3">Idtype 3</Translate>
            </span>
          </dt>
          <dd>{itxcustinfoEntity.idtype3}</dd>
          <dt>
            <span id="idno3">
              <Translate contentKey="sampleHrApp.itxcustinfo.idno3">Idno 3</Translate>
            </span>
          </dt>
          <dd>{itxcustinfoEntity.idno3}</dd>
          <dt>
            <Translate contentKey="sampleHrApp.itxcustinfo.custorgid">Custorgid</Translate>
          </dt>
          <dd>{itxcustinfoEntity.custorgid ? itxcustinfoEntity.custorgid.id : ''}</dd>
          <dt>
            <Translate contentKey="sampleHrApp.itxcustinfo.custtype">Custtype</Translate>
          </dt>
          <dd>{itxcustinfoEntity.custtype ? itxcustinfoEntity.custtype.id : ''}</dd>
          <dt>
            <Translate contentKey="sampleHrApp.itxcustinfo.srcsyscode">Srcsyscode</Translate>
          </dt>
          <dd>{itxcustinfoEntity.srcsyscode ? itxcustinfoEntity.srcsyscode.id : ''}</dd>
          <dt>
            <Translate contentKey="sampleHrApp.itxcustinfo.custorgbrachid">Custorgbrachid</Translate>
          </dt>
          <dd>{itxcustinfoEntity.custorgbrachid ? itxcustinfoEntity.custorgbrachid.id : ''}</dd>
        </dl>
        <Button tag={Link} to="/itxcustinfo" replace color="info">
          <FontAwesomeIcon icon="arrow-left" />{' '}
          <span className="d-none d-md-inline">
            <Translate contentKey="entity.action.back">Back</Translate>
          </span>
        </Button>
        &nbsp;
        <Button tag={Link} to={`/itxcustinfo/${itxcustinfoEntity.id}/edit`} replace color="primary">
          <FontAwesomeIcon icon="pencil-alt" />{' '}
          <span className="d-none d-md-inline">
            <Translate contentKey="entity.action.edit">Edit</Translate>
          </span>
        </Button>
      </Col>
    </Row>
  );
};

const mapStateToProps = ({ itxcustinfo }: IRootState) => ({
  itxcustinfoEntity: itxcustinfo.entity,
});

const mapDispatchToProps = { getEntity };

type StateProps = ReturnType<typeof mapStateToProps>;
type DispatchProps = typeof mapDispatchToProps;

export default connect(mapStateToProps, mapDispatchToProps)(ItxcustinfoDetail);
