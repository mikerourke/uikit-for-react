import React from 'react';
import UIkit from 'uikit';
import PropTypes from 'prop-types';
import { isNil, noop } from 'lodash';
import { getOptionsString } from '../../../lib';
import { EveryElement } from '../../base';

export default class Sticky extends React.Component {
  static displayName = 'Sticky';

  static propTypes = {
    ...EveryElement.propTypes,
    animation: PropTypes.oneOfType([PropTypes.bool, PropTypes.string]),
    as: EveryElement.asPropType,
    bottom: PropTypes.oneOfType([
      PropTypes.bool,
      PropTypes.number,
      PropTypes.string,
    ]),
    children: PropTypes.node.isRequired,
    className: PropTypes.string,
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
    ...EveryElement.defaultProps,
    animation: false,
    as: 'div',
    bottom: false,
    className: null,
    clsActive: null,
    clsInactive: null,
    media: null,
    offset: null,
    onActive: noop,
    onInactive: noop,
    showOnUp: false,
    target: false,
    top: null,
    widthElement: null,
  };

  componentDidMount() {
    if (!this.ref) return;
    UIkit.util.on(this.ref, 'active', this.props.onActive);
    UIkit.util.on(this.ref, 'inactive', this.props.onInactive);
  }

  handleRef = element => {
    if (!element) return;
    this.ref = isNil(element.ref) ? element : element.ref;
  };

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
    });

    return (
      <EveryElement
        {...rest}
        ref={this.handleRef}
        data-uk-sticky={componentOptions}
      />
    );
  }
}
