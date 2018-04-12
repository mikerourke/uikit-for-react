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
  UIK,
} from '../../lib';
import Base from '../Base';
import Ref from '../Ref';

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
    this.ref = null;
  }

  componentDidMount() {
    addEventInvoker(this.ref, 'inview', 'onInview', this.props);
    addEventInvoker(this.ref, 'outview', 'onOutview', this.props);
  }

  handleRef = element => (this.ref = element);

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
      <Ref innerRef={this.handleRef}>
        <Base
          {...rest}
          className={classes}
          component={Scrollspy}
          uk-scrollspy={componentOptions}
        />
      </Ref>
    );
  }
}
