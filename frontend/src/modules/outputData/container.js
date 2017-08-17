import { connect } from 'react-redux';
import component from './component';

const mapStateToProps = state => ({
  result: state.inputData.result
});

const mapDispatchToProps = ({});

export default connect(mapStateToProps, mapDispatchToProps)(component);