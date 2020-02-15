import { connect } from "react-redux";
import { bindActionCreators } from "redux";

function mapStateToProps(state) {
  return {
    globals: state
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: {}
  };
}

export default function(component) {
  return connect(mapStateToProps, mapDispatchToProps)(component);
}
