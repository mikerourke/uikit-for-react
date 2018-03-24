import React from 'react';
import UIkit from 'uikit';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import isNil from 'lodash/isNil';
import noop from 'lodash/noop';
import {
  customPropTypes,
  generateSelector,
  getBaseRef,
  getOptionsString,
  joinListProp,
  HTML,
  UIK,
} from '../../../lib';
import Base from '../../base';

export default class Scrollspy extends React.Component {
  static displayName = 'Scrollspy';

  static propTypes = {
    ...Base.propTypes,
    animation: PropTypes.oneOfType([
      PropTypes.oneOf(UIK.ANIMATIONS),
      PropTypes.arrayOf(UIK.ANIMATIONS),
    ]),
    as: customPropTypes.customOrStringElement(HTML.BLOCK_ELEMENTS),
    children: PropTypes.node,
    delay: PropTypes.number,
    hidden: PropTypes.bool,
    offsetLeft: PropTypes.number,
    offsetTop: PropTypes.number,
    onInview: PropTypes.func,
    onOutview: PropTypes.func,
    repeat: PropTypes.bool,
  };

  static defaultProps = {
    ...Base.defaultProps,
    animation: 'uk-scrollspy-inview',
    as: 'div',
    delay: 0,
    hidden: true,
    offsetLeft: 0,
    offsetTop: 0,
    onInview: noop,
    onOutview: noop,
  };

  constructor() {
    super();
    this.selector = generateSelector();
  }

  componentDidMount() {
    const ref = this.getRef();
    UIkit.util.on(ref, 'inview', this.props.onInview);
    UIkit.util.on(ref, 'outview', this.props.onOutview);
  }

  getRef = () => (isNil(this.ref) ? `.${this.selector}` : this.ref);

  handleRef = element => {
    if (!element) return;
    this.ref = getBaseRef(element);
  };

  render() {
    const {
      animation,
      className,
      delay,
      hidden,
      offsetLeft,
      offsetTop,
      repeat,
      ...rest
    } = this.props;

    const classes = classnames(className, 'uk-scrollspy', this.selector);

    const componentOptions = getOptionsString({
      cls: joinListProp(animation),
      delay,
      hidden,
      offsetLeft,
      offsetTop,
      repeat,
    });

    return (
      <Base
        {...rest}
        baseRef={this.handleRef}
        className={classes}
        component={Scrollspy}
        data-uk-scrollspy={componentOptions}
      />
    );
  }
}
