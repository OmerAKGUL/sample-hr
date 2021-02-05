import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { Link, RouteComponentProps } from 'react-router-dom';
import { Button, Col, Row, Table } from 'reactstrap';
import { Translate, ICrudGetAllAction, TextFormat, getSortState, IPaginationBaseState, JhiPagination, JhiItemCount } from 'react-jhipster';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { IRootState } from 'app/shared/reducers';
import { getEntities } from './itxtxnqueue.reducer';
import { IItxtxnqueue } from 'app/shared/model/itxtxnqueue.model';
import { APP_DATE_FORMAT, APP_LOCAL_DATE_FORMAT } from 'app/config/constants';
import { ITEMS_PER_PAGE } from 'app/shared/util/pagination.constants';
import { overridePaginationStateWithQueryParams } from 'app/shared/util/entity-utils';

export interface IItxtxnqueueProps extends StateProps, DispatchProps, RouteComponentProps<{ url: string }> {}

export const Itxtxnqueue = (props: IItxtxnqueueProps) => {
  const [paginationState, setPaginationState] = useState(
    overridePaginationStateWithQueryParams(getSortState(props.location, ITEMS_PER_PAGE), props.location.search)
  );

  const getAllEntities = () => {
    props.getEntities(paginationState.activePage - 1, paginationState.itemsPerPage, `${paginationState.sort},${paginationState.order}`);
  };

  const sortEntities = () => {
    getAllEntities();
    const endURL = `?page=${paginationState.activePage}&sort=${paginationState.sort},${paginationState.order}`;
    if (props.location.search !== endURL) {
      props.history.push(`${props.location.pathname}${endURL}`);
    }
  };

  useEffect(() => {
    sortEntities();
  }, [paginationState.activePage, paginationState.order, paginationState.sort]);

  useEffect(() => {
    const params = new URLSearchParams(props.location.search);
    const page = params.get('page');
    const sort = params.get('sort');
    if (page && sort) {
      const sortSplit = sort.split(',');
      setPaginationState({
        ...paginationState,
        activePage: +page,
        sort: sortSplit[0],
        order: sortSplit[1],
      });
    }
  }, [props.location.search]);

  const sort = p => () => {
    setPaginationState({
      ...paginationState,
      order: paginationState.order === 'asc' ? 'desc' : 'asc',
      sort: p,
    });
  };

  const handlePagination = currentPage =>
    setPaginationState({
      ...paginationState,
      activePage: currentPage,
    });

  const { itxtxnqueueList, match, loading, totalItems } = props;
  return (
    <div>
      <h2 id="itxtxnqueue-heading">
        <Translate contentKey="sampleHrApp.itxtxnqueue.home.title">Itxtxnqueues</Translate>
        <Link to={`${match.url}/new`} className="btn btn-primary float-right jh-create-entity" id="jh-create-entity">
          <FontAwesomeIcon icon="plus" />
          &nbsp;
          <Translate contentKey="sampleHrApp.itxtxnqueue.home.createLabel">Create new Itxtxnqueue</Translate>
        </Link>
      </h2>
      <div className="table-responsive">
        {itxtxnqueueList && itxtxnqueueList.length > 0 ? (
          <Table responsive>
            <thead>
              <tr>
                <th>
                  <Translate contentKey="global.field.id">ID</Translate>
                </th>
                <th>
                  <Translate contentKey="sampleHrApp.itxtxnqueue.etljobstart">Etljobstart</Translate>
                </th>
                <th>
                  <Translate contentKey="sampleHrApp.itxtxnqueue.etljobsessiond">Etljobsessiond</Translate>
                </th>
                <th>
                  <Translate contentKey="sampleHrApp.itxtxnqueue.wfstate">Wfstate</Translate>
                </th>
                <th>
                  <Translate contentKey="sampleHrApp.itxtxnqueue.wfprocid">Wfprocid</Translate>
                </th>
                <th>
                  <Translate contentKey="sampleHrApp.itxtxnqueue.scsyscustid">Scsyscustid</Translate>
                </th>
                <th>
                  <Translate contentKey="sampleHrApp.itxtxnqueue.scname">Scname</Translate>
                </th>
                <th>
                  <Translate contentKey="sampleHrApp.itxtxnqueue.scmidname">Scmidname</Translate>
                </th>
                <th>
                  <Translate contentKey="sampleHrApp.itxtxnqueue.scsurname">Scsurname</Translate>
                </th>
                <th>
                  <Translate contentKey="sampleHrApp.itxtxnqueue.scbirthdate">Scbirthdate</Translate>
                </th>
                <th>
                  <Translate contentKey="sampleHrApp.itxtxnqueue.sccommtitle">Sccommtitle</Translate>
                </th>
                <th>
                  <Translate contentKey="sampleHrApp.itxtxnqueue.scaddresstype">Scaddresstype</Translate>
                </th>
                <th>
                  <Translate contentKey="sampleHrApp.itxtxnqueue.scaddress">Scaddress</Translate>
                </th>
                <th>
                  <Translate contentKey="sampleHrApp.itxtxnqueue.sccity">Sccity</Translate>
                </th>
                <th>
                  <Translate contentKey="sampleHrApp.itxtxnqueue.scnationality">Scnationality</Translate>
                </th>
                <th>
                  <Translate contentKey="sampleHrApp.itxtxnqueue.scnationalid">Scnationalid</Translate>
                </th>
                <th>
                  <Translate contentKey="sampleHrApp.itxtxnqueue.scidtype">Scidtype</Translate>
                </th>
                <th>
                  <Translate contentKey="sampleHrApp.itxtxnqueue.scidno">Scidno</Translate>
                </th>
                <th>
                  <Translate contentKey="sampleHrApp.itxtxnqueue.scgender">Scgender</Translate>
                </th>
                <th>
                  <Translate contentKey="sampleHrApp.itxtxnqueue.saorgid">Saorgid</Translate>
                </th>
                <th>
                  <Translate contentKey="sampleHrApp.itxtxnqueue.saorgname">Saorgname</Translate>
                </th>
                <th>
                  <Translate contentKey="sampleHrApp.itxtxnqueue.sasyscode">Sasyscode</Translate>
                </th>
                <th>
                  <Translate contentKey="sampleHrApp.itxtxnqueue.sabranchcode">Sabranchcode</Translate>
                </th>
                <th>
                  <Translate contentKey="sampleHrApp.itxtxnqueue.saname">Saname</Translate>
                </th>
                <th>
                  <Translate contentKey="sampleHrApp.itxtxnqueue.rcsyscustid">Rcsyscustid</Translate>
                </th>
                <th>
                  <Translate contentKey="sampleHrApp.itxtxnqueue.rcname">Rcname</Translate>
                </th>
                <th>
                  <Translate contentKey="sampleHrApp.itxtxnqueue.rcmidname">Rcmidname</Translate>
                </th>
                <th>
                  <Translate contentKey="sampleHrApp.itxtxnqueue.rcsurname">Rcsurname</Translate>
                </th>
                <th>
                  <Translate contentKey="sampleHrApp.itxtxnqueue.rcbirthdate">Rcbirthdate</Translate>
                </th>
                <th>
                  <Translate contentKey="sampleHrApp.itxtxnqueue.rccommtitle">Rccommtitle</Translate>
                </th>
                <th>
                  <Translate contentKey="sampleHrApp.itxtxnqueue.rcaddresstype">Rcaddresstype</Translate>
                </th>
                <th>
                  <Translate contentKey="sampleHrApp.itxtxnqueue.rcaddress">Rcaddress</Translate>
                </th>
                <th>
                  <Translate contentKey="sampleHrApp.itxtxnqueue.rccity">Rccity</Translate>
                </th>
                <th>
                  <Translate contentKey="sampleHrApp.itxtxnqueue.rcnationality">Rcnationality</Translate>
                </th>
                <th>
                  <Translate contentKey="sampleHrApp.itxtxnqueue.rcnationalid">Rcnationalid</Translate>
                </th>
                <th>
                  <Translate contentKey="sampleHrApp.itxtxnqueue.rcidtype">Rcidtype</Translate>
                </th>
                <th>
                  <Translate contentKey="sampleHrApp.itxtxnqueue.rcidno">Rcidno</Translate>
                </th>
                <th>
                  <Translate contentKey="sampleHrApp.itxtxnqueue.rcgender">Rcgender</Translate>
                </th>
                <th>
                  <Translate contentKey="sampleHrApp.itxtxnqueue.raorgid">Raorgid</Translate>
                </th>
                <th>
                  <Translate contentKey="sampleHrApp.itxtxnqueue.raorgname">Raorgname</Translate>
                </th>
                <th>
                  <Translate contentKey="sampleHrApp.itxtxnqueue.rasyscode">Rasyscode</Translate>
                </th>
                <th>
                  <Translate contentKey="sampleHrApp.itxtxnqueue.rabranchcode">Rabranchcode</Translate>
                </th>
                <th>
                  <Translate contentKey="sampleHrApp.itxtxnqueue.raname">Raname</Translate>
                </th>
                <th>
                  <Translate contentKey="sampleHrApp.itxtxnqueue.txnchanneltype">Txnchanneltype</Translate>
                </th>
                <th>
                  <Translate contentKey="sampleHrApp.itxtxnqueue.txnsysid">Txnsysid</Translate>
                </th>
                <th>
                  <Translate contentKey="sampleHrApp.itxtxnqueue.txnprodtype">Txnprodtype</Translate>
                </th>
                <th>
                  <Translate contentKey="sampleHrApp.itxtxnqueue.txnprodname">Txnprodname</Translate>
                </th>
                <th>
                  <Translate contentKey="sampleHrApp.itxtxnqueue.txnamount">Txnamount</Translate>
                </th>
                <th>
                  <Translate contentKey="sampleHrApp.itxtxnqueue.txndescr">Txndescr</Translate>
                </th>
                <th>
                  <Translate contentKey="sampleHrApp.itxtxnqueue.txnentitiesupd">Txnentitiesupd</Translate>
                </th>
                <th>
                  <Translate contentKey="sampleHrApp.itxtxnqueue.txnagentorgid">Txnagentorgid</Translate>
                </th>
                <th>
                  <Translate contentKey="sampleHrApp.itxtxnqueue.txnagentbrachid">Txnagentbrachid</Translate>
                </th>
                <th>
                  <Translate contentKey="sampleHrApp.itxtxnqueue.txnagenttype">Txnagenttype</Translate>
                </th>
                <th>
                  <Translate contentKey="sampleHrApp.itxtxnqueue.txnagentaccid">Txnagentaccid</Translate>
                </th>
                <th>
                  <Translate contentKey="sampleHrApp.itxtxnqueue.txnorderdate">Txnorderdate</Translate>
                </th>
                <th>
                  <Translate contentKey="sampleHrApp.itxtxnqueue.txnvaluedate">Txnvaluedate</Translate>
                </th>
                <th>
                  <Translate contentKey="sampleHrApp.itxtxnqueue.rctype">Rctype</Translate>
                </th>
                <th>
                  <Translate contentKey="sampleHrApp.itxtxnqueue.ratype">Ratype</Translate>
                </th>
                <th>
                  <Translate contentKey="sampleHrApp.itxtxnqueue.satype">Satype</Translate>
                </th>
                <th>
                  <Translate contentKey="sampleHrApp.itxtxnqueue.sctype">Sctype</Translate>
                </th>
                <th>
                  <Translate contentKey="sampleHrApp.itxtxnqueue.txntypeid">Txntypeid</Translate>
                </th>
                <th>
                  <Translate contentKey="sampleHrApp.itxtxnqueue.txncurrency">Txncurrency</Translate>
                </th>
                <th>
                  <Translate contentKey="sampleHrApp.itxtxnqueue.etljobtype">Etljobtype</Translate>
                </th>
                <th>
                  <Translate contentKey="sampleHrApp.itxtxnqueue.createdt">Createdt</Translate>
                </th>
                <th>
                  <Translate contentKey="sampleHrApp.itxtxnqueue.updatedt">Updatedt</Translate>
                </th>
                <th>
                  <Translate contentKey="sampleHrApp.itxtxnqueue.createusr">Createusr</Translate>
                </th>
                <th>
                  <Translate contentKey="sampleHrApp.itxtxnqueue.updateusr">Updateusr</Translate>
                </th>
                <th />
              </tr>
            </thead>
            <tbody>
              {itxtxnqueueList.map((itxtxnqueue, i) => (
                <tr key={`entity-${i}`}>
                  <td>
                    <Button tag={Link} to={`${match.url}/${itxtxnqueue.id}`} color="link" size="sm">
                      {itxtxnqueue.id}
                    </Button>
                  </td>
                  <td>
                    {itxtxnqueue.etljobstart ? <TextFormat type="date" value={itxtxnqueue.etljobstart} format={APP_DATE_FORMAT} /> : null}
                  </td>
                  <td>{itxtxnqueue.etljobsessiond}</td>
                  <td>{itxtxnqueue.wfstate}</td>
                  <td>{itxtxnqueue.wfprocid}</td>
                  <td>{itxtxnqueue.scsyscustid}</td>
                  <td>{itxtxnqueue.scname}</td>
                  <td>{itxtxnqueue.scmidname}</td>
                  <td>{itxtxnqueue.scsurname}</td>
                  <td>
                    {itxtxnqueue.scbirthdate ? (
                      <TextFormat type="date" value={itxtxnqueue.scbirthdate} format={APP_LOCAL_DATE_FORMAT} />
                    ) : null}
                  </td>
                  <td>{itxtxnqueue.sccommtitle}</td>
                  <td>
                    <Translate contentKey={`sampleHrApp.Addrtype.${itxtxnqueue.scaddresstype}`} />
                  </td>
                  <td>{itxtxnqueue.scaddress}</td>
                  <td>{itxtxnqueue.sccity}</td>
                  <td>{itxtxnqueue.scnationality}</td>
                  <td>{itxtxnqueue.scnationalid}</td>
                  <td>
                    <Translate contentKey={`sampleHrApp.Idtype.${itxtxnqueue.scidtype}`} />
                  </td>
                  <td>{itxtxnqueue.scidno}</td>
                  <td>{itxtxnqueue.scgender}</td>
                  <td>{itxtxnqueue.saorgid}</td>
                  <td>{itxtxnqueue.saorgname}</td>
                  <td>{itxtxnqueue.sasyscode}</td>
                  <td>{itxtxnqueue.sabranchcode}</td>
                  <td>{itxtxnqueue.saname}</td>
                  <td>{itxtxnqueue.rcsyscustid}</td>
                  <td>{itxtxnqueue.rcname}</td>
                  <td>{itxtxnqueue.rcmidname}</td>
                  <td>{itxtxnqueue.rcsurname}</td>
                  <td>
                    {itxtxnqueue.rcbirthdate ? (
                      <TextFormat type="date" value={itxtxnqueue.rcbirthdate} format={APP_LOCAL_DATE_FORMAT} />
                    ) : null}
                  </td>
                  <td>{itxtxnqueue.rccommtitle}</td>
                  <td>
                    <Translate contentKey={`sampleHrApp.Addrtype.${itxtxnqueue.rcaddresstype}`} />
                  </td>
                  <td>{itxtxnqueue.rcaddress}</td>
                  <td>{itxtxnqueue.rccity}</td>
                  <td>{itxtxnqueue.rcnationality}</td>
                  <td>{itxtxnqueue.rcnationalid}</td>
                  <td>
                    <Translate contentKey={`sampleHrApp.Idtype.${itxtxnqueue.rcidtype}`} />
                  </td>
                  <td>{itxtxnqueue.rcidno}</td>
                  <td>{itxtxnqueue.rcgender}</td>
                  <td>{itxtxnqueue.raorgid}</td>
                  <td>{itxtxnqueue.raorgname}</td>
                  <td>{itxtxnqueue.rasyscode}</td>
                  <td>{itxtxnqueue.rabranchcode}</td>
                  <td>{itxtxnqueue.raname}</td>
                  <td>{itxtxnqueue.txnchanneltype}</td>
                  <td>{itxtxnqueue.txnsysid}</td>
                  <td>
                    <Translate contentKey={`sampleHrApp.Prodtype.${itxtxnqueue.txnprodtype}`} />
                  </td>
                  <td>{itxtxnqueue.txnprodname}</td>
                  <td>{itxtxnqueue.txnamount}</td>
                  <td>{itxtxnqueue.txndescr}</td>
                  <td>{itxtxnqueue.txnentitiesupd}</td>
                  <td>{itxtxnqueue.txnagentorgid}</td>
                  <td>{itxtxnqueue.txnagentbrachid}</td>
                  <td>{itxtxnqueue.txnagenttype}</td>
                  <td>{itxtxnqueue.txnagentaccid}</td>
                  <td>
                    {itxtxnqueue.txnorderdate ? <TextFormat type="date" value={itxtxnqueue.txnorderdate} format={APP_DATE_FORMAT} /> : null}
                  </td>
                  <td>
                    {itxtxnqueue.txnvaluedate ? <TextFormat type="date" value={itxtxnqueue.txnvaluedate} format={APP_DATE_FORMAT} /> : null}
                  </td>
                  <td>{itxtxnqueue.rctype ? <Link to={`itxcusttype/${itxtxnqueue.rctype.id}`}>{itxtxnqueue.rctype.name}</Link> : ''}</td>
                  <td>{itxtxnqueue.ratype ? <Link to={`itxaccounttype/${itxtxnqueue.ratype.id}`}>{itxtxnqueue.ratype.name}</Link> : ''}</td>
                  <td>{itxtxnqueue.satype ? <Link to={`itxaccounttype/${itxtxnqueue.satype.id}`}>{itxtxnqueue.satype.name}</Link> : ''}</td>
                  <td>{itxtxnqueue.sctype ? <Link to={`itxcusttype/${itxtxnqueue.sctype.id}`}>{itxtxnqueue.sctype.name}</Link> : ''}</td>
                  <td>
                    {itxtxnqueue.txntypeid ? <Link to={`itxtxntype/${itxtxnqueue.txntypeid.id}`}>{itxtxnqueue.txntypeid.name}</Link> : ''}
                  </td>
                  <td>
                    {itxtxnqueue.txncurrency ? (
                      <Link to={`itxcurrency/${itxtxnqueue.txncurrency.id}`}>{itxtxnqueue.txncurrency.name}</Link>
                    ) : (
                      ''
                    )}
                  </td>
                  <td>
                    {itxtxnqueue.etljobtype ? (
                      <Link to={`afetljobtype/${itxtxnqueue.etljobtype.id}`}>{itxtxnqueue.etljobtype.jobname}</Link>
                    ) : (
                      ''
                    )}
                  </td>
                  <td>{itxtxnqueue.createdt ? <TextFormat type="date" value={itxtxnqueue.createdt} format={APP_DATE_FORMAT} /> : null}</td>
                  <td>{itxtxnqueue.updatedt ? <TextFormat type="date" value={itxtxnqueue.updatedt} format={APP_DATE_FORMAT} /> : null}</td>
                  <td>{itxtxnqueue.createusr}</td>
                  <td>{itxtxnqueue.updateusr}</td>
                  <td className="text-right">
                    <div className="btn-group flex-btn-group-container">
                      <Button tag={Link} to={`${match.url}/${itxtxnqueue.id}`} color="info" size="sm">
                        <FontAwesomeIcon icon="eye" />{' '}
                        <span className="d-none d-md-inline">
                          <Translate contentKey="entity.action.view">View</Translate>
                        </span>
                      </Button>
                      <Button tag={Link} to={`${match.url}/${itxtxnqueue.id}/edit`} color="primary" size="sm">
                        <FontAwesomeIcon icon="pencil-alt" />{' '}
                        <span className="d-none d-md-inline">
                          <Translate contentKey="entity.action.edit">Edit</Translate>
                        </span>
                      </Button>
                      <Button tag={Link} to={`${match.url}/${itxtxnqueue.id}/delete`} color="danger" size="sm">
                        <FontAwesomeIcon icon="trash" />{' '}
                        <span className="d-none d-md-inline">
                          <Translate contentKey="entity.action.delete">Delete</Translate>
                        </span>
                      </Button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </Table>
        ) : (
          !loading && (
            <div className="alert alert-warning">
              <Translate contentKey="sampleHrApp.itxtxnqueue.home.notFound">No Itxtxnqueues found</Translate>
            </div>
          )
        )}
      </div>
      {props.totalItems ? (
        <div className={itxtxnqueueList && itxtxnqueueList.length > 0 ? '' : 'd-none'}>
          <Row className="justify-content-center">
            <JhiItemCount page={paginationState.activePage} total={totalItems} itemsPerPage={paginationState.itemsPerPage} i18nEnabled />
          </Row>
          <Row className="justify-content-center">
            <JhiPagination
              activePage={paginationState.activePage}
              onSelect={handlePagination}
              maxButtons={5}
              itemsPerPage={paginationState.itemsPerPage}
              totalItems={props.totalItems}
            />
          </Row>
        </div>
      ) : (
        ''
      )}
    </div>
  );
};

const mapStateToProps = ({ itxtxnqueue }: IRootState) => ({
  itxtxnqueueList: itxtxnqueue.entities,
  loading: itxtxnqueue.loading,
  totalItems: itxtxnqueue.totalItems,
});

const mapDispatchToProps = {
  getEntities,
};

type StateProps = ReturnType<typeof mapStateToProps>;
type DispatchProps = typeof mapDispatchToProps;

export default connect(mapStateToProps, mapDispatchToProps)(Itxtxnqueue);
