import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import * as errorActions from "./actions/error-actions.js";

function mapStateToProps(state) {
  return {
    redux: state
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: {
      error: bindActionCreators(errorActions, dispatch)
    }
  };
}

export default function(component) {
  return connect(
    mapStateToProps,
    mapDispatchToProps
  )(component);
}
