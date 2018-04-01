import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import noop from 'lodash/noop';
import {
  addEventInvoker,
  customPropTypes,
  getOptionsString,
  HTML,
  joinListProp,
  LibraryComponent,
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

  constructor(props) {
    super(props);
    this.libComp = new LibraryComponent('scrollspy');
  }

  componentDidMount() {
    const { cssSelector } = this.libComp;
    addEventInvoker(cssSelector, 'inview', 'onInview', this.props);
    addEventInvoker(cssSelector, 'outview', 'onOutview', this.props);
  }

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

    const classes = classnames(className, 'uk-scrollspy');

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
        {...this.libComp.appendProps(this.props)}
      />
    );
  }
}
