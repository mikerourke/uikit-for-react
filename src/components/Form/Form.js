import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import { buildClassName } from '../../lib';
import { BlockElement } from '../Base';

export default class Form extends React.Component {
  static displayName = 'Form';

  static propTypes = {
    ...BlockElement.propTypes,
    as: BlockElement.asPropType,
    children: PropTypes.node.isRequired,
    className: PropTypes.string,
    horizontal: PropTypes.bool,
    stacked: PropTypes.bool,
  };

  static defaultProps = {
    ...BlockElement.defaultProps,
    as: 'div',
    className: null,
    horizontal: false,
    stacked: false,
  };

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
      horizontal,
      stacked,
      ...rest
    } = unhandledProps;

    const ukClass = 'uk-form';
    const classes = classnames(className, inheritedClasses, ukClass, {
      [buildClassName(ukClass, 'horizontal')]: horizontal,
      [buildClassName(ukClass, 'stacked')]: stacked,
    });

    return (
      <form
        {...rest}
        className={classes || undefined}
        style={inheritedStyle}
        {...inheritedAttributes}
      >
        {children}
      </form>
    );
  }
}
