import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import { isString } from 'lodash';
import {
  buildClassName,
  HTML,
} from '../../lib';
import { BlockElement } from '../Base';
import Text from '../Text';

export default class Heading extends BlockElement {
  static meta = {
    name: 'Heading',
    ukClass: 'uk-heading',
  };

  static propTypes = {
    ...BlockElement.propTypes,
    as: PropTypes.oneOf(HTML.HEADING_ELEMENTS),
    bullet: PropTypes.bool,
    children: PropTypes.node.isRequired,
    className: PropTypes.string,
    divider: PropTypes.bool,
    headingClass: PropTypes.oneOf(HTML.HEADING_ELEMENTS),
    hero: PropTypes.bool,
    line: PropTypes.oneOfType([
      PropTypes.bool,
      PropTypes.oneOf(['center', 'right']),
    ]),
    primary: PropTypes.bool,
  };

  static defaultProps = {
    as: 'h1',
    bullet: false,
    divider: false,
    hero: false,
    line: false,
    primary: false,
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
      bullet,
      children,
      className,
      divider,
      headingClass,
      hero,
      line,
      primary,
      ...rest
    } = unhandledProps;

    const classes = classnames(
      className,
      inheritedClasses,
      Heading.meta.ukClass,
      buildClassName(headingClass),
      buildClassName(Heading.meta.ukClass, 'line', line),
      {
        [buildClassName(Heading.meta.ukClass, 'bullet')]: (bullet),
        [buildClassName(Heading.meta.ukClass, 'divider')]: (divider),
        [buildClassName(Heading.meta.ukClass, 'hero')]: (hero),
        [buildClassName(Heading.meta.ukClass, 'primary')]: (primary),
      },
    );

    return (
      <Text
        {...rest}
        as={as}
        className={classes || undefined}
        style={inheritedStyle}
        horizontalAlign={(isString(line)) ? line : undefined}
        {...inheritedAttributes}
      >
        {(line === true) ? <span>{children}</span> : children}
      </Text>
    );
  }
}
