import Enzyme, {shallow, mount} from "enzyme";
import Adapter from "enzyme-adapter-react-16";

window.React = require(`react`);
window.PropTypes = require(`prop-types`);
window.renderer = require(`react-test-renderer`);
window.shallow = shallow;
window.mount = mount;
window.PureComponent = require(`react`);

Enzyme.configure({adapter: new Adapter()});
