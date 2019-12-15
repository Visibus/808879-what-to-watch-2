import {connect} from "react-redux";
import {Redirect} from "react-router-dom";

const withAuth = ((Component) => {
  const WithAuth = (props) => {
    const {isAuthorizationRequired} = props;
    if (isAuthorizationRequired) {
      return <Redirect to="/login" />;
    } else {
      return <Component
        {...props}
      />;
    }
  };

  WithAuth.propTypes = {
    isAuthorizationRequired: PropTypes.bool.isRequired,
  };

  const mapStateToProps = (state, ownProps) => Object.assign({}, ownProps, {
    isAuthorizationRequired: state.isAuthorizationRequired,
  });

  return connect(mapStateToProps, null)(WithAuth);
});

export default withAuth;
