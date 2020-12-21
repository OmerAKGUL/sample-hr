import React from 'react';
import MenuItem from 'app/shared/layout/menus/menu-item';
import { DropdownItem } from 'reactstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Translate, translate } from 'react-jhipster';
import { NavLink as Link } from 'react-router-dom';
import { NavDropdown } from './menu-components';

export const EntitiesMenu = props => (
  <NavDropdown
    icon="th-list"
    name={translate('global.menu.entities.main')}
    id="entity-menu"
    style={{ maxHeight: '80vh', overflow: 'auto' }}
  >
    <MenuItem icon="asterisk" to="/modules">
      <Translate contentKey="global.menu.entities.modules" />
    </MenuItem>
    <MenuItem icon="asterisk" to="/region">
      <Translate contentKey="global.menu.entities.region" />
    </MenuItem>
    <MenuItem icon="asterisk" to="/country">
      <Translate contentKey="global.menu.entities.country" />
    </MenuItem>
    <MenuItem icon="asterisk" to="/location">
      <Translate contentKey="global.menu.entities.location" />
    </MenuItem>
    <MenuItem icon="asterisk" to="/department">
      <Translate contentKey="global.menu.entities.department" />
    </MenuItem>
    <MenuItem icon="asterisk" to="/task">
      <Translate contentKey="global.menu.entities.task" />
    </MenuItem>
    <MenuItem icon="asterisk" to="/employee">
      <Translate contentKey="global.menu.entities.employee" />
    </MenuItem>
    <MenuItem icon="asterisk" to="/job">
      <Translate contentKey="global.menu.entities.job" />
    </MenuItem>
    <MenuItem icon="asterisk" to="/job-history">
      <Translate contentKey="global.menu.entities.jobHistory" />
    </MenuItem>
    <MenuItem icon="asterisk" to="/wlmwltype">
      <Translate contentKey="global.menu.entities.wlmwltype" />
    </MenuItem>
    <MenuItem icon="asterisk" to="/wlmwldata">
      <Translate contentKey="global.menu.entities.wlmwldata" />
    </MenuItem>
    <MenuItem icon="asterisk" to="/afdatafilter">
      <Translate contentKey="global.menu.entities.afdatafilter" />
    </MenuItem>
    <MenuItem icon="asterisk" to="/afetljobtype">
      <Translate contentKey="global.menu.entities.afetljobtype" />
    </MenuItem>
    <MenuItem icon="asterisk" to="/afform">
      <Translate contentKey="global.menu.entities.afform" />
    </MenuItem>
    <MenuItem icon="asterisk" to="/afformdatafilter">
      <Translate contentKey="global.menu.entities.afformdatafilter" />
    </MenuItem>
    <MenuItem icon="asterisk" to="/afmenuchild">
      <Translate contentKey="global.menu.entities.afmenuchild" />
    </MenuItem>
    <MenuItem icon="asterisk" to="/afmenuitem">
      <Translate contentKey="global.menu.entities.afmenuitem" />
    </MenuItem>
    <MenuItem icon="asterisk" to="/afmsg">
      <Translate contentKey="global.menu.entities.afmsg" />
    </MenuItem>
    <MenuItem icon="asterisk" to="/afparamval">
      <Translate contentKey="global.menu.entities.afparamval" />
    </MenuItem>
    <MenuItem icon="asterisk" to="/afsauthentication">
      <Translate contentKey="global.menu.entities.afsauthentication" />
    </MenuItem>
    <MenuItem icon="asterisk" to="/afsauthorization">
      <Translate contentKey="global.menu.entities.afsauthorization" />
    </MenuItem>
    <MenuItem icon="asterisk" to="/afsrole">
      <Translate contentKey="global.menu.entities.afsrole" />
    </MenuItem>
    <MenuItem icon="asterisk" to="/afsroleuser">
      <Translate contentKey="global.menu.entities.afsroleuser" />
    </MenuItem>
    <MenuItem icon="asterisk" to="/afschedule">
      <Translate contentKey="global.menu.entities.afschedule" />
    </MenuItem>
    <MenuItem icon="asterisk" to="/afsysmodule">
      <Translate contentKey="global.menu.entities.afsysmodule" />
    </MenuItem>
    <MenuItem icon="asterisk" to="/afsystem">
      <Translate contentKey="global.menu.entities.afsystem" />
    </MenuItem>
    <MenuItem icon="asterisk" to="/afwfaction">
      <Translate contentKey="global.menu.entities.afwfaction" />
    </MenuItem>
    <MenuItem icon="asterisk" to="/afwfstate">
      <Translate contentKey="global.menu.entities.afwfstate" />
    </MenuItem>
    <MenuItem icon="asterisk" to="/afwprocaction">
      <Translate contentKey="global.menu.entities.afwprocaction" />
    </MenuItem>
    <MenuItem icon="asterisk" to="/afwprocess">
      <Translate contentKey="global.menu.entities.afwprocess" />
    </MenuItem>
    <MenuItem icon="asterisk" to="/afworkflow">
      <Translate contentKey="global.menu.entities.afworkflow" />
    </MenuItem>
    <MenuItem icon="asterisk" to="/itxaccounttype">
      <Translate contentKey="global.menu.entities.itxaccounttype" />
    </MenuItem>
    <MenuItem icon="asterisk" to="/itxaccounttinfo">
      <Translate contentKey="global.menu.entities.itxaccounttinfo" />
    </MenuItem>
    <MenuItem icon="asterisk" to="/itxcity">
      <Translate contentKey="global.menu.entities.itxcity" />
    </MenuItem>
    <MenuItem icon="asterisk" to="/itxcountry">
      <Translate contentKey="global.menu.entities.itxcountry" />
    </MenuItem>
    <MenuItem icon="asterisk" to="/itxcurrency">
      <Translate contentKey="global.menu.entities.itxcurrency" />
    </MenuItem>
    <MenuItem icon="asterisk" to="/itxcustaddress">
      <Translate contentKey="global.menu.entities.itxcustaddress" />
    </MenuItem>
    <MenuItem icon="asterisk" to="/itxcustadressinfo">
      <Translate contentKey="global.menu.entities.itxcustadressinfo" />
    </MenuItem>
    <MenuItem icon="asterisk" to="/itxcustinfo">
      <Translate contentKey="global.menu.entities.itxcustinfo" />
    </MenuItem>
    <MenuItem icon="asterisk" to="/itxcusttype">
      <Translate contentKey="global.menu.entities.itxcusttype" />
    </MenuItem>
    <MenuItem icon="asterisk" to="/itxdictionary">
      <Translate contentKey="global.menu.entities.itxdictionary" />
    </MenuItem>
    <MenuItem icon="asterisk" to="/itxorgbranch">
      <Translate contentKey="global.menu.entities.itxorgbranch" />
    </MenuItem>
    <MenuItem icon="asterisk" to="/itxorganization">
      <Translate contentKey="global.menu.entities.itxorganization" />
    </MenuItem>
    <MenuItem icon="asterisk" to="/itxtxnqueue">
      <Translate contentKey="global.menu.entities.itxtxnqueue" />
    </MenuItem>
    <MenuItem icon="asterisk" to="/itxtxntype">
      <Translate contentKey="global.menu.entities.itxtxntype" />
    </MenuItem>
    <MenuItem icon="asterisk" to="/iwlimportqueue">
      <Translate contentKey="global.menu.entities.iwlimportqueue" />
    </MenuItem>
    <MenuItem icon="asterisk" to="/meconfig">
      <Translate contentKey="global.menu.entities.meconfig" />
    </MenuItem>
    <MenuItem icon="asterisk" to="/meinvestproc">
      <Translate contentKey="global.menu.entities.meinvestproc" />
    </MenuItem>
    <MenuItem icon="asterisk" to="/meinvestprofile">
      <Translate contentKey="global.menu.entities.meinvestprofile" />
    </MenuItem>
    <MenuItem icon="asterisk" to="/mematchmethod">
      <Translate contentKey="global.menu.entities.mematchmethod" />
    </MenuItem>
    <MenuItem icon="asterisk" to="/mematchresult">
      <Translate contentKey="global.menu.entities.mematchresult" />
    </MenuItem>
    <MenuItem icon="asterisk" to="/mematchresultctx">
      <Translate contentKey="global.menu.entities.mematchresultctx" />
    </MenuItem>
    <MenuItem icon="asterisk" to="/memethodparam">
      <Translate contentKey="global.menu.entities.memethodparam" />
    </MenuItem>
    <MenuItem icon="asterisk" to="/memtdconfig">
      <Translate contentKey="global.menu.entities.memtdconfig" />
    </MenuItem>
    <MenuItem icon="asterisk" to="/memtdwlcriteria">
      <Translate contentKey="global.menu.entities.memtdwlcriteria" />
    </MenuItem>
    <MenuItem icon="asterisk" to="/wlmwldatalog">
      <Translate contentKey="global.menu.entities.wlmwldatalog" />
    </MenuItem>
    <MenuItem icon="asterisk" to="/jhiuser">
      <Translate contentKey="global.menu.entities.jhiuser" />
    </MenuItem>
    {/* jhipster-needle-add-entity-to-menu - JHipster will add entities to the menu here */}
  </NavDropdown>
);
