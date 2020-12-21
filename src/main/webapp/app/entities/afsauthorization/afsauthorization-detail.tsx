import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { Link, RouteComponentProps } from 'react-router-dom';
import { Button, Row, Col } from 'reactstrap';
import { Translate, ICrudGetAction } from 'react-jhipster';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { IRootState } from 'app/shared/reducers';
import { getEntity } from './afsauthorization.reducer';
import { IAfsauthorization } from 'app/shared/model/afsauthorization.model';
import { APP_DATE_FORMAT, APP_LOCAL_DATE_FORMAT } from 'app/config/constants';

export interface IAfsauthorizationDetailProps extends StateProps, DispatchProps, RouteComponentProps<{ id: string }> {}

export const AfsauthorizationDetail = (props: IAfsauthorizationDetailProps) => {
  useEffect(() => {
    props.getEntity(props.match.params.id);
  }, []);

  const { afsauthorizationEntity } = props;
  return (
    <Row>
      <Col md="8">
        <h2>
          <Translate contentKey="sampleHrApp.afsauthorization.detail.title">Afsauthorization</Translate> [<b>{afsauthorizationEntity.id}</b>
          ]
        </h2>
        <dl className="jh-entity-details">
          <dt>
            <span id="authtype">
              <Translate contentKey="sampleHrApp.afsauthorization.authtype">Authtype</Translate>
            </span>
          </dt>
          <dd>{afsauthorizationEntity.authtype}</dd>
          <dt>
            <span id="afsid">
              <Translate contentKey="sampleHrApp.afsauthorization.afsid">Afsid</Translate>
            </span>
          </dt>
          <dd>{afsauthorizationEntity.afsid}</dd>
          <dt>
            <span id="afsid2">
              <Translate contentKey="sampleHrApp.afsauthorization.afsid2">Afsid 2</Translate>
            </span>
          </dt>
          <dd>{afsauthorizationEntity.afsid2}</dd>
          <dt>
            <span id="afwid">
              <Translate contentKey="sampleHrApp.afsauthorization.afwid">Afwid</Translate>
            </span>
          </dt>
          <dd>{afsauthorizationEntity.afwid}</dd>
          <dt>
            <Translate contentKey="sampleHrApp.afsauthorization.rolecode">Rolecode</Translate>
          </dt>
          <dd>{afsauthorizationEntity.rolecode ? afsauthorizationEntity.rolecode.id : ''}</dd>
          <dt>
            <Translate contentKey="sampleHrApp.afsauthorization.acccode">Acccode</Translate>
          </dt>
          <dd>{afsauthorizationEntity.acccode ? afsauthorizationEntity.acccode.id : ''}</dd>
          <dt>
            <Translate contentKey="sampleHrApp.afsauthorization.modulecode">Modulecode</Translate>
          </dt>
          <dd>{afsauthorizationEntity.modulecode ? afsauthorizationEntity.modulecode.id : ''}</dd>
          <dt>
            <Translate contentKey="sampleHrApp.afsauthorization.menuitemcode">Menuitemcode</Translate>
          </dt>
          <dd>{afsauthorizationEntity.menuitemcode ? afsauthorizationEntity.menuitemcode.id : ''}</dd>
        </dl>
        <Button tag={Link} to="/afsauthorization" replace color="info">
          <FontAwesomeIcon icon="arrow-left" />{' '}
          <span className="d-none d-md-inline">
            <Translate contentKey="entity.action.back">Back</Translate>
          </span>
        </Button>
        &nbsp;
        <Button tag={Link} to={`/afsauthorization/${afsauthorizationEntity.id}/edit`} replace color="primary">
          <FontAwesomeIcon icon="pencil-alt" />{' '}
          <span className="d-none d-md-inline">
            <Translate contentKey="entity.action.edit">Edit</Translate>
          </span>
        </Button>
      </Col>
    </Row>
  );
};

const mapStateToProps = ({ afsauthorization }: IRootState) => ({
  afsauthorizationEntity: afsauthorization.entity,
});

const mapDispatchToProps = { getEntity };

type StateProps = ReturnType<typeof mapStateToProps>;
type DispatchProps = typeof mapDispatchToProps;

export default connect(mapStateToProps, mapDispatchToProps)(AfsauthorizationDetail);
