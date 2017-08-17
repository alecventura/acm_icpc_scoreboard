import { connect } from 'react-redux';
import component from './component';
import { handleChange, handleSubmit } from './action';

const mapStateToProps = state => ({
  inputData: state.inputData.inputData,
});

const mapDispatchToProps = ({ handleChange, handleSubmit });

export default connect(mapStateToProps, mapDispatchToProps)(component);
