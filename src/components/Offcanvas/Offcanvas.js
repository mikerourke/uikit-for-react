import React from 'react';
import UIkit from 'uikit';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import { noop } from 'lodash';
import { getOptionsString } from '../../lib';
import { BlockElement } from '../Base';
import Grid from '../Grid';

export default class Offcanvas extends React.Component {
  static displayName = 'Offcanvas';

  static propTypes = {
    ...BlockElement.propTypes,
    as: PropTypes.instanceOf(Grid),
    children: PropTypes.node.isRequired,
    className: PropTypes.string,
    flip: PropTypes.bool,
    mode: PropTypes.oneOf(['none', 'push', 'reveal', 'slide']),
    onBeforeHide: PropTypes.func,
    onBeforeShow: PropTypes.func,
    onHidden: PropTypes.func,
    onHide: PropTypes.func,
    onShow: PropTypes.func,
    onShown: PropTypes.func,
    overlay: PropTypes.bool,
    selectorContainer: PropTypes.string,
  };

  static defaultProps = {
    ...BlockElement.defaultProps,
    className: null,
    flip: false,
    mode: null,
    onBeforeHide: noop,
    onBeforeShow: noop,
    onHidden: noop,
    onHide: noop,
    onShow: noop,
    onShown: noop,
    overlay: false,
    selectorContainer: null,
  };

  componentDidMount() {
    UIkit.util.on(this.ref, 'beforehide', this.props.onBeforeHide);
    UIkit.util.on(this.ref, 'beforeshow', this.props.onBeforeShow);
    UIkit.util.on(this.ref, 'hidden', this.props.onHidden);
    UIkit.util.on(this.ref, 'hide', this.props.onHide);
    UIkit.util.on(this.ref, 'show', this.props.onShow);
    UIkit.util.on(this.ref, 'shown', this.props.onShown);
  }

  handleRef = element => (this.ref = element);

  render() {
    const {
      inheritedAttributes,
      inheritedClasses,
      inheritedStyle,
      unhandledProps,
    } = BlockElement.getInheritedProps(this.props);

    const {
      children,
      className,
      flip,
      mode,
      onBeforeHide,
      onBeforeShow,
      onHidden,
      onHide,
      onShow,
      onShown,
      overlay,
      selectorContainer,
      ...rest
    } = unhandledProps;

    const classes = classnames(className, inheritedClasses);

    const componentOptions = getOptionsString({
      container: selectorContainer,
      flip,
      mode,
      overlay,
    });

    return (
      <form
        {...rest}
        className={classes || undefined}
        ref={this.handleRef}
        style={inheritedStyle}
        data-uk-offcanvas={componentOptions}
        {...inheritedAttributes}
      >
        {children}
      </form>
    );
  }
}
