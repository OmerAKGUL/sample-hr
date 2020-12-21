import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { Link, RouteComponentProps } from 'react-router-dom';
import { Button, Row, Col } from 'reactstrap';
import { Translate, ICrudGetAction } from 'react-jhipster';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { IRootState } from 'app/shared/reducers';
import { getEntity } from './afformdatafilter.reducer';
import { IAfformdatafilter } from 'app/shared/model/afformdatafilter.model';
import { APP_DATE_FORMAT, APP_LOCAL_DATE_FORMAT } from 'app/config/constants';

export interface IAfformdatafilterDetailProps extends StateProps, DispatchProps, RouteComponentProps<{ id: string }> {}

export const AfformdatafilterDetail = (props: IAfformdatafilterDetailProps) => {
  useEffect(() => {
    props.getEntity(props.match.params.id);
  }, []);

  const { afformdatafilterEntity } = props;
  return (
    <Row>
      <Col md="8">
        <h2>
          <Translate contentKey="sampleHrApp.afformdatafilter.detail.title">Afformdatafilter</Translate> [<b>{afformdatafilterEntity.id}</b>
          ]
        </h2>
        <dl className="jh-entity-details">
          <dt>
            <span id="afsid">
              <Translate contentKey="sampleHrApp.afformdatafilter.afsid">Afsid</Translate>
            </span>
          </dt>
          <dd>{afformdatafilterEntity.afsid}</dd>
          <dt>
            <span id="affid">
              <Translate contentKey="sampleHrApp.afformdatafilter.affid">Affid</Translate>
            </span>
          </dt>
          <dd>{afformdatafilterEntity.affid}</dd>
          <dt>
            <Translate contentKey="sampleHrApp.afformdatafilter.approlecode">Approlecode</Translate>
          </dt>
          <dd>{afformdatafilterEntity.approlecode ? afformdatafilterEntity.approlecode.id : ''}</dd>
          <dt>
            <Translate contentKey="sampleHrApp.afformdatafilter.appformcode">Appformcode</Translate>
          </dt>
          <dd>{afformdatafilterEntity.appformcode ? afformdatafilterEntity.appformcode.id : ''}</dd>
          <dt>
            <Translate contentKey="sampleHrApp.afformdatafilter.appdatafiltercode">Appdatafiltercode</Translate>
          </dt>
          <dd>{afformdatafilterEntity.appdatafiltercode ? afformdatafilterEntity.appdatafiltercode.id : ''}</dd>
        </dl>
        <Button tag={Link} to="/afformdatafilter" replace color="info">
          <FontAwesomeIcon icon="arrow-left" />{' '}
          <span className="d-none d-md-inline">
            <Translate contentKey="entity.action.back">Back</Translate>
          </span>
        </Button>
        &nbsp;
        <Button tag={Link} to={`/afformdatafilter/${afformdatafilterEntity.id}/edit`} replace color="primary">
          <FontAwesomeIcon icon="pencil-alt" />{' '}
          <span className="d-none d-md-inline">
            <Translate contentKey="entity.action.edit">Edit</Translate>
          </span>
        </Button>
      </Col>
    </Row>
  );
};

const mapStateToProps = ({ afformdatafilter }: IRootState) => ({
  afformdatafilterEntity: afformdatafilter.entity,
});

const mapDispatchToProps = { getEntity };

type StateProps = ReturnType<typeof mapStateToProps>;
type DispatchProps = typeof mapDispatchToProps;

export default connect(mapStateToProps, mapDispatchToProps)(AfformdatafilterDetail);
