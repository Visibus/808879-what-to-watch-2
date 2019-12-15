const TAB_DETAILS = `Details`;

const withTabs = (Component) => {
  class WithTabs extends React.PureComponent {
    constructor(props) {
      super(props);

      this.state = {
        currentTab: TAB_DETAILS,
      };

      this._handlerMouseClickChild = this._handlerMouseClickChild.bind(this);
    }

    componentWillUnmount() {
      this.currentTab = TAB_DETAILS;
      this.onMouseClickChild = null;
    }

    _handlerMouseClickChild(tabName) {
      this.setState({
        currentTab: tabName,
      });
    }

    render() {
      return <Component
        {...this.props}
        currentTab={this.state.currentTab}
        onMouseClickChild={this._handlerMouseClickChild}
      />;
    }
  }

  WithTabs.propTypes = {};

  return WithTabs;
};

export default withTabs;
