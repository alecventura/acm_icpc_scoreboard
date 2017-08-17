import React, { Component } from 'react';
import PropTypes from 'prop-types';
import style from './style.scss';

const defaultProps = {
  handleSubmit: () => {},
  handleChange: () => {}
};

const propTypes = {
  handleSubmit: PropTypes.func.isRequired,
  handleChange: PropTypes.func.isRequired,
};


class InputData extends Component {
  constructor(props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(e){    
    e.preventDefault();
    this.props.handleSubmit(this.props.inputData);
  }
  render () {
    return (
      <form onSubmit={this.handleSubmit} className="inputForm">
        <textarea onChange={this.props.handleChange} />
        <input type="submit" value="Process" />
    </form>
    )
  }
}

InputData.defaultProps = defaultProps;
InputData.propTypes = propTypes;

export default InputData;