import React from 'react';
import PropTypes from 'prop-types';
import style from './style.scss';

const defaultProps = {};

const propTypes = {
  children: PropTypes.element.isRequired,
};

const MainLayout = ({ children, main }) => (
  <div>
    {children}
  </div>
);

MainLayout.defaultProps = defaultProps;
MainLayout.propTypes = propTypes;

export default MainLayout;
