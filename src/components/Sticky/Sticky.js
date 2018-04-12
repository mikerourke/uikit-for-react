import React from 'react';
import PropTypes from 'prop-types';
import noop from 'lodash/noop';
import classnames from 'classnames';
import {
  addEventInvoker,
  customPropTypes,
  findChildByType,
  getOptionsString,
  HTML,
} from '../../lib';
import Base from '../Base';
import Navbar from '../Navbar';
import Ref from '../Ref';

export default class Sticky extends React.Component {
  static displayName = 'Sticky';

  static propTypes = {
    ...Base.propTypes,
    animation: PropTypes.oneOfType([PropTypes.bool, PropTypes.string]),
    as: customPropTypes.customOrStringElement(HTML.ALL_ELEMENTS),
    bottom: PropTypes.oneOfType([
      PropTypes.bool,
      PropTypes.number,
      PropTypes.string,
    ]),
    clsActive: PropTypes.string,
    clsInactive: PropTypes.string,
    media: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
    offset: PropTypes.number,
    onActive: PropTypes.func,
    onInactive: PropTypes.func,
    showOnUp: PropTypes.bool,
    target: PropTypes.bool,
    top: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
    widthElement: PropTypes.string,
  };

  static defaultProps = {
    ...Base.defaultProps,
    as: 'div',
    onActive: noop,
    onInactive: noop,
  };

  constructor(props) {
    super(props);
    this.ref = null;
  }

  componentDidMount() {
    addEventInvoker(this.ref, 'active', 'onActive', this.props);
    addEventInvoker(this.ref, 'inactive', 'onInactive', this.props);
  }

  getOptionsForNavbar() {
    const { children, clsActive, clsInactive, target } = this.props;

    const childNavbar = findChildByType(children, Navbar);
    if (!childNavbar) return {};

    return {
      clsActive: classnames(clsActive, 'uk-navbar-sticky'),
      clsInactive: childNavbar.props.transparent
        ? classnames(clsInactive, 'uk-navbar-transparent')
        : clsInactive,
      target: classnames(target, 'uk-navbar-container'),
    };
  }

  handleRef = element => (this.ref = element);

  render() {
    const {
      animation,
      bottom,
      clsActive,
      clsInactive,
      media,
      offset,
      showOnUp,
      target,
      top,
      widthElement,
      ...rest
    } = this.props;

    const componentOptions = getOptionsString({
      animation,
      bottom,
      clsActive,
      clsInactive,
      media,
      offset,
      showOnUp,
      target,
      top,
      widthElement,
      ...this.getOptionsForNavbar(),
    });

    return (
      <Ref innerRef={this.handleRef}>
        <Base {...rest} component={Sticky} uk-sticky={componentOptions} />
      </Ref>
    );
  }
}
