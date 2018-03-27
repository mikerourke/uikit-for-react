import React from 'react';
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
  addEventInvoker,
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
    as: 'div',
    onInview: noop,
    onOutview: noop,
  };

  constructor() {
    super();
    this.selector = generateSelector();
  }

  componentDidMount() {
    const ref = this.getRef();
    addEventInvoker(ref, 'inview', 'onInview', this.props);
    addEventInvoker(ref, 'outview', 'onOutview', this.props);
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
        uk-scrollspy={componentOptions}
      />
    );
  }
}
