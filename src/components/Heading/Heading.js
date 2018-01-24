import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import { isString } from 'lodash';
import { buildClassName, HTML } from '../../lib';
import { BlockElement } from '../Base';
import Text from '../Text';

export default class Heading extends React.Component {
  static displayName = 'Heading';

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
    ...BlockElement.defaultProps,
    as: 'h1',
    bullet: false,
    className: null,
    divider: false,
    headingClass: null,
    hero: false,
    line: false,
    primary: false,
  };

  render() {
    const { as, ...propsToParse } = this.props;
    const {
      inheritedAttributes,
      inheritedClasses,
      inheritedStyle,
      unhandledProps,
    } = BlockElement.getInheritedProps(propsToParse);

    const {
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

    const ukClass = 'uk-heading';
    const classes = classnames(
      className,
      inheritedClasses,
      ukClass,
      buildClassName(headingClass),
      buildClassName(ukClass, 'line', line),
      {
        [buildClassName(ukClass, 'bullet')]: bullet,
        [buildClassName(ukClass, 'divider')]: divider,
        [buildClassName(ukClass, 'hero')]: hero,
        [buildClassName(ukClass, 'primary')]: primary,
      },
    );

    return (
      <Text
        {...rest}
        as={as}
        className={classes || undefined}
        horizontalAlign={isString(line) ? line : undefined}
        style={inheritedStyle}
        {...inheritedAttributes}
      >
        {line === true ? <span>{children}</span> : children}
      </Text>
    );
  }
}
