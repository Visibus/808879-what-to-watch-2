import {compose} from "recompose";
import {bindActionCreators} from "redux";
import {connect} from "react-redux";
import apiDispatcher from "../../reducer/api-dispatcher/api-dispatcher";

const TEXT_LENGHT_MIN = 50;
const TEXT_LENGHT_MAX = 400;

const withFormSubmit = (Component) => {
  class WithFormSubmit extends React.PureComponent {
    constructor(props) {
      super(props);

      this._handleFormChange = this._handleFormChange.bind(this);
      this._handleFormSubmit = this._handleFormSubmit.bind(this);

      this.state = {
        error: ``,
        isFormValid: false,
        isBlocking: false,
      };
    }

    componentDidMount() {
      this.setState({
        error: ``,
        isFormValid: false,
        isBlocking: false,
      });
    }
    componentWillUnmount() {
      this.setState({
        isFormValid: false,
        idBlocking: false,
        error: ``,
      });
      this._handleFormChange = null;
      this._handleFormSubmit = null;
    }

    _handleFormChange(rating, text) {
      this.setState(() => {
        let valid = false;
        let error = ``;

        if (text.length < TEXT_LENGHT_MIN) {
          error = `Количество символов должно быть более 50-ти`;
        } else if (text.length > TEXT_LENGHT_MAX) {
          error = `Количество символов должно быть менее 400`;
        } else {
          valid = true;
        }

        return {
          error,
          isFormValid: valid
        };
      });
    }

    _handleFormSubmit(rating, comment) {
      const {id, uploadReview, history} = this.props;
      const {isFormValid} = this.state;

      if (isFormValid) {
        this.setState({
          isBlocking: true,
        });
        uploadReview({rating, comment}, id)
          .then((response) => {
            if (response) {
              if (response.data) {
                return history.push(`/films/${id}`);
              }
            }
            return null;
          })
          .catch((error) => {
            const errorObject = JSON.parse(JSON.stringify(error));
            this.setState({
              error: errorObject.message,
              isBlocking: false,
            });
            return;
          });
      }
    }

    render() {
      const {isFormValid, error, isBlocking} = this.state;
      const {errorLoadingReview} = this.props;

      return <Component
        {...this.props}
        error={error}
        isFormValid={isFormValid}
        onChange={this._handleFormChange}
        onSubmit={this._handleFormSubmit}
        errorLoadingReview={errorLoadingReview}
        isBlocking={isBlocking}
      />;
    }
  }

  WithFormSubmit.propTypes = {
    id: PropTypes.number.isRequired,
    uploadReview: PropTypes.func.isRequired,
    errorLoadingReview: PropTypes.string.isRequired,
    history: PropTypes.shape({
      push: PropTypes.func
    }),
  };
  return WithFormSubmit;
};

const mapStateToProps = (state) => ({
  errorLoadingReview: state.errorLoadingReview,
});

const mapDispatchToProps = (dispatch) => ({
  uploadReview: bindActionCreators(apiDispatcher.postReview, dispatch),
});

export {withFormSubmit};
export default compose(connect(mapStateToProps, mapDispatchToProps), withFormSubmit);
