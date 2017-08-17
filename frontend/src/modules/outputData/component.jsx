import React, { Component } from 'react';
import PropTypes from 'prop-types';
import style from './style.scss';

const defaultProps = {
  result: '',
};

const propTypes = {
  result: PropTypes.string,
};


class OutputData extends Component {
  componentWillMount() {

  }
  render() {
    return (
      <textarea className="outputTextArea" value={this.props.result} disabled />
    );
  }
}

OutputData.defaultProps = defaultProps;
OutputData.propTypes = propTypes;

export default OutputData;
