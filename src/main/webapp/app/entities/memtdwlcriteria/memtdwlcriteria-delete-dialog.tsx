import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { RouteComponentProps } from 'react-router-dom';
import { Modal, ModalHeader, ModalBody, ModalFooter, Button } from 'reactstrap';
import { Translate, ICrudGetAction, ICrudDeleteAction } from 'react-jhipster';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { IMemtdwlcriteria } from 'app/shared/model/memtdwlcriteria.model';
import { IRootState } from 'app/shared/reducers';
import { getEntity, deleteEntity } from './memtdwlcriteria.reducer';

export interface IMemtdwlcriteriaDeleteDialogProps extends StateProps, DispatchProps, RouteComponentProps<{ id: string }> {}

export const MemtdwlcriteriaDeleteDialog = (props: IMemtdwlcriteriaDeleteDialogProps) => {
  useEffect(() => {
    props.getEntity(props.match.params.id);
  }, []);

  const handleClose = () => {
    props.history.push('/memtdwlcriteria');
  };

  useEffect(() => {
    if (props.updateSuccess) {
      handleClose();
    }
  }, [props.updateSuccess]);

  const confirmDelete = () => {
    props.deleteEntity(props.memtdwlcriteriaEntity.id);
  };

  const { memtdwlcriteriaEntity } = props;
  return (
    <Modal isOpen toggle={handleClose}>
      <ModalHeader toggle={handleClose}>
        <Translate contentKey="entity.delete.title">Confirm delete operation</Translate>
      </ModalHeader>
      <ModalBody id="sampleHrApp.memtdwlcriteria.delete.question">
        <Translate contentKey="sampleHrApp.memtdwlcriteria.delete.question" interpolate={{ id: memtdwlcriteriaEntity.id }}>
          Are you sure you want to delete this Memtdwlcriteria?
        </Translate>
      </ModalBody>
      <ModalFooter>
        <Button color="secondary" onClick={handleClose}>
          <FontAwesomeIcon icon="ban" />
          &nbsp;
          <Translate contentKey="entity.action.cancel">Cancel</Translate>
        </Button>
        <Button id="jhi-confirm-delete-memtdwlcriteria" color="danger" onClick={confirmDelete}>
          <FontAwesomeIcon icon="trash" />
          &nbsp;
          <Translate contentKey="entity.action.delete">Delete</Translate>
        </Button>
      </ModalFooter>
    </Modal>
  );
};

const mapStateToProps = ({ memtdwlcriteria }: IRootState) => ({
  memtdwlcriteriaEntity: memtdwlcriteria.entity,
  updateSuccess: memtdwlcriteria.updateSuccess,
});

const mapDispatchToProps = { getEntity, deleteEntity };

type StateProps = ReturnType<typeof mapStateToProps>;
type DispatchProps = typeof mapDispatchToProps;

export default connect(mapStateToProps, mapDispatchToProps)(MemtdwlcriteriaDeleteDialog);
