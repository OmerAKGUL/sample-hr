import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { Link, RouteComponentProps } from 'react-router-dom';
import { Button, Col, Row, Table } from 'reactstrap';
import { Translate, ICrudGetAllAction, TextFormat, getSortState, IPaginationBaseState, JhiPagination, JhiItemCount } from 'react-jhipster';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { IRootState } from 'app/shared/reducers';
import { getEntities } from './wlmwldata.reducer';
import { IWlmwldata } from 'app/shared/model/wlmwldata.model';
import { APP_DATE_FORMAT, APP_LOCAL_DATE_FORMAT } from 'app/config/constants';
import { ITEMS_PER_PAGE } from 'app/shared/util/pagination.constants';
import { overridePaginationStateWithQueryParams } from 'app/shared/util/entity-utils';

export interface IWlmwldataProps extends StateProps, DispatchProps, RouteComponentProps<{ url: string }> {}

export const Wlmwldata = (props: IWlmwldataProps) => {
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

  const { wlmwldataList, match, loading, totalItems } = props;
  return (
    <div>
      <h2 id="wlmwldata-heading">
        <Translate contentKey="sampleHrApp.wlmwldata.home.title">Wlmwldata</Translate>
        <Link to={`${match.url}/new`} className="btn btn-primary float-right jh-create-entity" id="jh-create-entity">
          <FontAwesomeIcon icon="plus" />
          &nbsp;
          <Translate contentKey="sampleHrApp.wlmwldata.home.createLabel">Create new Wlmwldata</Translate>
        </Link>
      </h2>
      <div className="table-responsive">
        {wlmwldataList && wlmwldataList.length > 0 ? (
          <Table responsive>
            <thead>
              <tr>
                <th className="hand" onClick={sort('id')}>
                  <Translate contentKey="global.field.id">ID</Translate> <FontAwesomeIcon icon="sort" />
                </th>
                <th className="hand" onClick={sort('wfstate')}>
                  <Translate contentKey="sampleHrApp.wlmwldata.wfstate">Wfstate</Translate> <FontAwesomeIcon icon="sort" />
                </th>
                <th className="hand" onClick={sort('wfprocid')}>
                  <Translate contentKey="sampleHrApp.wlmwldata.wfprocid">Wfprocid</Translate> <FontAwesomeIcon icon="sort" />
                </th>
                <th className="hand" onClick={sort('namedata')}>
                  <Translate contentKey="sampleHrApp.wlmwldata.namedata">Namedata</Translate> <FontAwesomeIcon icon="sort" />
                </th>
                <th className="hand" onClick={sort('addressdata')}>
                  <Translate contentKey="sampleHrApp.wlmwldata.addressdata">Addressdata</Translate> <FontAwesomeIcon icon="sort" />
                </th>
                <th className="hand" onClick={sort('citydata')}>
                  <Translate contentKey="sampleHrApp.wlmwldata.citydata">Citydata</Translate> <FontAwesomeIcon icon="sort" />
                </th>
                <th className="hand" onClick={sort('countrydata')}>
                  <Translate contentKey="sampleHrApp.wlmwldata.countrydata">Countrydata</Translate> <FontAwesomeIcon icon="sort" />
                </th>
                <th className="hand" onClick={sort('birthdatedata')}>
                  <Translate contentKey="sampleHrApp.wlmwldata.birthdatedata">Birthdatedata</Translate> <FontAwesomeIcon icon="sort" />
                </th>
                <th className="hand" onClick={sort('tinnumberdata')}>
                  <Translate contentKey="sampleHrApp.wlmwldata.tinnumberdata">Tinnumberdata</Translate> <FontAwesomeIcon icon="sort" />
                </th>
                <th>
                  <Translate contentKey="sampleHrApp.wlmwldata.wltype">Wltype</Translate> <FontAwesomeIcon icon="sort" />
                </th>
                <th className="hand" onClick={sort('createdt')}>
                  <Translate contentKey="sampleHrApp.wlmwldata.createdt">Createdt</Translate> <FontAwesomeIcon icon="sort" />
                </th>
                <th className="hand" onClick={sort('updatedt')}>
                  <Translate contentKey="sampleHrApp.wlmwldata.updatedt">Updatedt</Translate> <FontAwesomeIcon icon="sort" />
                </th>
                <th className="hand" onClick={sort('createusr')}>
                  <Translate contentKey="sampleHrApp.wlmwldata.createusr">Createusr</Translate> <FontAwesomeIcon icon="sort" />
                </th>
                <th className="hand" onClick={sort('updateusr')}>
                  <Translate contentKey="sampleHrApp.wlmwldata.updateusr">Updateusr</Translate> <FontAwesomeIcon icon="sort" />
                </th>
                <th />
              </tr>
            </thead>
            <tbody>
              {wlmwldataList.map((wlmwldata, i) => (
                <tr key={`entity-${i}`}>
                  <td>
                    <Button tag={Link} to={`${match.url}/${wlmwldata.id}`} color="link" size="sm">
                      {wlmwldata.id}
                    </Button>
                  </td>
                  <td>{wlmwldata.wfstate}</td>
                  <td>{wlmwldata.wfprocid}</td>
                  <td>{wlmwldata.namedata}</td>
                  <td>{wlmwldata.addressdata}</td>
                  <td>{wlmwldata.citydata}</td>
                  <td>{wlmwldata.countrydata}</td>
                  <td>
                    {wlmwldata.birthdatedata ? (
                      <TextFormat type="date" value={wlmwldata.birthdatedata} format={APP_LOCAL_DATE_FORMAT} />
                    ) : null}
                  </td>
                  <td>{wlmwldata.tinnumberdata}</td>
                  <td>{wlmwldata.wltype ? <Link to={`wlmwltype/${wlmwldata.wltype.id}`}>{wlmwldata.wltype.name}</Link> : ''}</td>
                  <td>{wlmwldata.createdt ? <TextFormat type="date" value={wlmwldata.createdt} format={APP_DATE_FORMAT} /> : null}</td>
                  <td>{wlmwldata.updatedt ? <TextFormat type="date" value={wlmwldata.updatedt} format={APP_DATE_FORMAT} /> : null}</td>
                  <td>{wlmwldata.createusr}</td>
                  <td>{wlmwldata.updateusr}</td>
                  <td className="text-right">
                    <div className="btn-group flex-btn-group-container">
                      <Button tag={Link} to={`${match.url}/${wlmwldata.id}`} color="info" size="sm">
                        <FontAwesomeIcon icon="eye" />{' '}
                        <span className="d-none d-md-inline">
                          <Translate contentKey="entity.action.view">View</Translate>
                        </span>
                      </Button>
                      <Button
                        tag={Link}
                        to={`${match.url}/${wlmwldata.id}/edit?page=${paginationState.activePage}&sort=${paginationState.sort},${paginationState.order}`}
                        color="primary"
                        size="sm"
                      >
                        <FontAwesomeIcon icon="pencil-alt" />{' '}
                        <span className="d-none d-md-inline">
                          <Translate contentKey="entity.action.edit">Edit</Translate>
                        </span>
                      </Button>
                      <Button
                        tag={Link}
                        to={`${match.url}/${wlmwldata.id}/delete?page=${paginationState.activePage}&sort=${paginationState.sort},${paginationState.order}`}
                        color="danger"
                        size="sm"
                      >
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
              <Translate contentKey="sampleHrApp.wlmwldata.home.notFound">No Wlmwldata found</Translate>
            </div>
          )
        )}
      </div>
      {props.totalItems ? (
        <div className={wlmwldataList && wlmwldataList.length > 0 ? '' : 'd-none'}>
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

const mapStateToProps = ({ wlmwldata }: IRootState) => ({
  wlmwldataList: wlmwldata.entities,
  loading: wlmwldata.loading,
  totalItems: wlmwldata.totalItems,
});

const mapDispatchToProps = {
  getEntities,
};

type StateProps = ReturnType<typeof mapStateToProps>;
type DispatchProps = typeof mapDispatchToProps;

export default connect(mapStateToProps, mapDispatchToProps)(Wlmwldata);
