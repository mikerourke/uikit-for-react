import React from 'react';
import UIkit from 'uikit';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import { isNil, noop } from 'lodash';
import {
  customPropTypes,
  generateSelector,
  getBaseRef,
  getElementType,
  getOptionsString,
  joinListProp,
  HTML,
  UIK,
} from '../../../lib';

export default class Scrollspy extends React.Component {
  static displayName = 'Scrollspy';

  static propTypes = {
    animation: PropTypes.oneOfType([
      PropTypes.oneOf(UIK.ANIMATIONS),
      PropTypes.arrayOf(UIK.ANIMATIONS),
    ]),
    as: customPropTypes.customOrStringElement(HTML.BLOCK_ELEMENTS),
    children: PropTypes.node,
    className: PropTypes.string,
    delay: PropTypes.number,
    hidden: PropTypes.bool,
    offsetLeft: PropTypes.number,
    offsetTop: PropTypes.number,
    onInview: PropTypes.func,
    onOutview: PropTypes.func,
    repeat: PropTypes.bool,
  };

  static defaultProps = {
    animation: 'uk-scrollspy-inview',
    as: 'div',
    className: '',
    delay: 0,
    hidden: true,
    offsetLeft: 0,
    offsetTop: 0,
    onInview: noop,
    onOutview: noop,
    repeat: null,
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
      as,
      className,
      delay,
      hidden,
      offsetLeft,
      offsetTop,
      onInview,
      onOutview,
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

    const Element = getElementType(Scrollspy, as);
    return (
      <Element
        {...rest}
        className={classes}
        ref={this.handleRef}
        data-uk-scrollspy={componentOptions}
      />
    );
  }
}
