import React from 'react';
import UIkit from 'uikit';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import { isNil, noop } from 'lodash';
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
    if (!this.ref) return;
    UIkit.util.on(this.ref, 'beforehide', this.props.onBeforeHide);
    UIkit.util.on(this.ref, 'beforeshow', this.props.onBeforeShow);
    UIkit.util.on(this.ref, 'hidden', this.props.onHidden);
    UIkit.util.on(this.ref, 'hide', this.props.onHide);
    UIkit.util.on(this.ref, 'show', this.props.onShow);
    UIkit.util.on(this.ref, 'shown', this.props.onShown);
  }

  handleRef = element => {
    if (!element) return;
    this.ref = isNil(element.ref) ? element : element.ref;
  };

  render() {
    const {
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
    } = this.props;

    const componentOptions = getOptionsString({
      container: selectorContainer,
      flip,
      mode,
      overlay,
    });

    return (
      <BlockElement
        {...rest}
        as="form"
        ref={this.handleRef}
        data-uk-offcanvas={componentOptions}
      />
    );
  }
}
