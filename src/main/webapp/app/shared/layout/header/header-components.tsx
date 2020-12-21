import React from 'react';
import { Translate } from 'react-jhipster';

import { NavItem, NavLink, NavbarBrand } from 'reactstrap';
import { NavLink as Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import appConfig from 'app/config/constants';

export const BrandIcon = props => (
  <div {...props} className="brand-icon">
    <img src="content/images/logo-jhipster.png" alt="Logo" />
  </div>
);

export const BrandVeloxappIcon = props => (
  <div {...props} className="brandVeloxapp-icon">
    <img src="content/images/logo-veloxapp.png" alt="Logo" />
  </div>
);

export const BrandClientIcon = props => (
  <div {...props} className="brandClient-icon">
    <img src="content/images/logo-client.png" alt="Logo" />
  </div>
);

export const Brand = props => (
  <NavbarBrand tag={Link} to="/" className="brand-logo">
    <BrandIcon />
    <span className="brand-title">
      <Translate contentKey="global.title">SampleHR</Translate>
    </span>
    <span className="navbar-version">{appConfig.VERSION}</span>
  </NavbarBrand>
);

export const BrandVeloxapp = props => (
  <NavbarBrand tag={Link} to="/" className="brandVeloxapp-logo">
    <BrandVeloxappIcon />
    <span className="navbar-version">{appConfig.VERSION}</span>
  </NavbarBrand>
);

export const BrandClient = props => (
  <NavbarBrand tag={Link} to="/" className="brandClient-logo">
    <BrandClientIcon />
  </NavbarBrand>
);

export const Home = props => (
  <NavItem>
    <NavLink tag={Link} to="/" className="d-flex align-items-center">
      <FontAwesomeIcon icon="home" />
      <span>
        <Translate contentKey="global.menu.home">Home</Translate>
      </span>
    </NavLink>
  </NavItem>
);
export const Modules = props => (
  <NavItem>
    <NavLink tag={Link} to="/modules" className="d-flex align-items-center">
      <FontAwesomeIcon icon="th-list" />
      <span>
        <Translate contentKey="global.menu.module">Modules</Translate>
      </span>
    </NavLink>
  </NavItem>
);
