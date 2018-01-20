// TODO: Finish this component.
import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import { BlockElement } from '../Base';

export default class OffcanvasContent extends BlockElement {
  static meta = {
    name: 'OffcanvasContent',
  };

  static propTypes = {
    ...BlockElement.propTypes,
    children: PropTypes.node.isRequired,
    className: PropTypes.string,
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
      ...rest
    } = unhandledProps;

    const classes = classnames(
      className,
      inheritedClasses,
      OffcanvasContent.meta.ukClass,
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
