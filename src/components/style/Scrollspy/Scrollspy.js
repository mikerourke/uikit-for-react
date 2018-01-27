import React from 'react';
import UIkit from 'uikit';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import { isNil, noop } from 'lodash';
import { getOptionsString, joinListProp, UIK } from '../../../lib/index';
import { BlockElement } from '../../base/index';

export default class Scrollspy extends React.Component {
  static displayName = 'Scrollspy';

  static propTypes = {
    ...BlockElement.propTypes,
    animation: PropTypes.oneOfType([
      PropTypes.oneOf(UIK.ANIMATIONS),
      PropTypes.arrayOf(UIK.ANIMATIONS),
    ]),
    as: BlockElement.asPropType,
    children: PropTypes.node.isRequired,
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
    className: null,
    delay: 0,
    hidden: true,
    offsetLeft: 0,
    offsetTop: 0,
    onInview: noop,
    onOutview: noop,
    repeat: null,
  };

  componentDidMount() {
    if (!this.ref) return;
    UIkit.util.on(this.ref, 'inview', this.props.onInview);
    UIkit.util.on(this.ref, 'outview', this.props.onOutview);
  }

  handleRef = element => {
    if (!element) return;
    this.ref = isNil(element.ref) ? element : element.ref;
  };

  render() {
    const {
      animation,
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
      <BlockElement
        {...rest}
        className={classes || undefined}
        ref={this.handleRef}
        data-uk-scrollspy={componentOptions}
      />
    );
  }
}
