import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import { buildClassName } from '../../lib';
import { BlockElement } from '../Base';

export default class Panel extends BlockElement {
  static meta = {
    name: 'Panel',
    ukClass: 'uk-panel',
  };

  static propTypes = {
    ...BlockElement.propTypes,
    children: PropTypes.node.isRequired,
    className: PropTypes.string,
    scrollable: PropTypes.bool,
  };

  static defaultProps = {
    scrollable: false,
  };

  render() {
    const {
      inheritedAttributes,
      inheritedClasses,
      inheritedStyle,
      unhandledProps,
    } = this.getInheritedProps(this.props);

    const {
      children,
      className,
      scrollable,
      ...rest
    } = unhandledProps;

    const classes = classnames(
      className,
      inheritedClasses,
      Panel.meta.ukClass,
      {
        [buildClassName(Panel.meta.ukClass, 'scrollable')]: (scrollable),
      },
    );

    return (
      <div
        {...rest}
        className={classes || undefined}
        style={inheritedStyle}
        {...inheritedAttributes}
      >
        {children}
      </div>
    );
  }
}
