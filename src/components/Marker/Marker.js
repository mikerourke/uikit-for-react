import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import {
  getElementType,
  HTML,
} from '../../lib';
import { BlockElement } from '../Base';

export default class Marker extends BlockElement {
  static meta = {
    name: 'Marker',
  };

  static propTypes = {
    ...BlockElement.propTypes,
    as: PropTypes.oneOf(HTML.ALL_ELEMENTS),
    children: PropTypes.node.isRequired,
    className: PropTypes.string,
  };

  static defaultProps = {
    as: 'a',
  };

  render() {
    const {
      inheritedAttributes,
      inheritedClasses,
      inheritedStyle,
      unhandledProps,
    } = this.getInheritedProps(this.props);

    const {
      as,
      children,
      className,
      ...rest
    } = unhandledProps;

    const classes = classnames(
      className,
      inheritedClasses,
    );

    const Element = getElementType(Marker, this.props);
    return (
      <Element
        {...rest}
        className={classes || undefined}
        style={inheritedStyle}
        data-uk-marker
        {...inheritedAttributes}
      >
        {children}
      </Element>
    );
  }
}
