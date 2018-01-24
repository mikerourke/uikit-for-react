import React from 'react';
import UIkit from 'uikit';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import { noop } from 'lodash';
import { getElementType, getOptionsString, joinListProp, UIK } from '../../lib';
import { BlockElement } from '../Base';

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
    UIkit.util.on(this.ref, 'inview', this.props.onInview);
    UIkit.util.on(this.ref, 'outview', this.props.onOutview);
  }

  handleRef = element => (this.ref = element);

  render() {
    const { animation, ...propsToParse } = this.props;
    const {
      inheritedAttributes,
      inheritedClasses,
      inheritedStyle,
      unhandledProps,
    } = BlockElement.getInheritedProps(propsToParse);

    const {
      children,
      className,
      delay,
      hidden,
      offsetLeft,
      offsetTop,
      onInview,
      onOutview,
      repeat,
      ...rest
    } = unhandledProps;

    const classes = classnames(className, inheritedClasses, 'uk-scrollspy');

    const componentOptions = getOptionsString({
      cls: joinListProp(animation),
      delay,
      hidden,
      offsetLeft,
      offsetTop,
      repeat,
    });

    const Element = getElementType(Scrollspy, this.props);
    return (
      <Element
        {...rest}
        className={classes || undefined}
        ref={this.handleRef}
        style={inheritedStyle}
        data-uk-scrollspy={componentOptions}
        {...inheritedAttributes}
      >
        {children}
      </Element>
    );
  }
}
