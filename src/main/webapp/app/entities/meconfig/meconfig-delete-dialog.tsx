import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { RouteComponentProps } from 'react-router-dom';
import { Modal, ModalHeader, ModalBody, ModalFooter, Button } from 'reactstrap';
import { Translate, ICrudGetAction, ICrudDeleteAction } from 'react-jhipster';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { IMeconfig } from 'app/shared/model/meconfig.model';
import { IRootState } from 'app/shared/reducers';
import { getEntity, updateEntity } from './meconfig.reducer';

export interface IMeconfigDeleteDialogProps extends StateProps, DispatchProps, RouteComponentProps<{ id: string }> {}

export const MeconfigDeleteDialog = (props: IMeconfigDeleteDialogProps) => {
  const { meconfigEntity } = props;
  useEffect(() => {
    props.getEntity(props.match.params.id);
  }, []);

  const handleClose = () => {
    props.history.push('/modules/me/meconfig');
  };

  useEffect(() => {
    if (props.updateSuccess) {
      handleClose();
    }
  }, [props.updateSuccess]);

  const confirmDelete = (event, errors, values) => {
	values = meconfigEntity;
	if (meconfigEntity.wfstate === "1"){
		values.wfstate = "2";
	}
	else if (meconfigEntity.wfstate === "3"){
		values.wfstate = "1";
	}
	const entity = {
        ...meconfigEntity,
        ...values,
      };
    props.updateEntity(entity);
  };
  return (
	
    <Modal isOpen toggle={handleClose}>
	  <ModalHeader toggle={handleClose}>
        <Translate contentKey={meconfigEntity.wfstate === "1" ? "entity.start.title" : "entity.stop.title"}>Confirm start/stop operation</Translate>
      </ModalHeader>
	<ModalBody id="sampleHrApp.meconfig.delete.question">
        <Translate contentKey= {meconfigEntity.wfstate === "1" ? "sampleHrApp.meconfig.delete.questionstart" : "sampleHrApp.meconfig.delete.questionstop" } interpolate={{ id: meconfigEntity.id }}>
          Are you sure you want to start/stop this Meconfig?
        </Translate>
      </ModalBody>
	<ModalFooter>
        <Button color="secondary" onClick={handleClose}>
          <FontAwesomeIcon icon="ban" />
          &nbsp;
          <Translate contentKey="entity.action.cancel">Cancel</Translate>
        </Button>
        <Button id="jhi-confirm-delete-meconfig" color="danger" onClick={confirmDelete}>
          <FontAwesomeIcon icon="trash" />
          &nbsp;
          <Translate contentKey="entity.action.yes">Yes</Translate>
        </Button>
      </ModalFooter>
	</Modal>
  );
};

const mapStateToProps = ({ meconfig }: IRootState) => ({
  meconfigEntity: meconfig.entity,
  updateSuccess: meconfig.updateSuccess,
});

const mapDispatchToProps = { getEntity, updateEntity };

type StateProps = ReturnType<typeof mapStateToProps>;
type DispatchProps = typeof mapDispatchToProps;

export default connect(mapStateToProps, mapDispatchToProps)(MeconfigDeleteDialog);
