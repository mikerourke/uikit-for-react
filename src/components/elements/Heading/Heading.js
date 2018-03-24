import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import { isString } from 'lodash';
import { buildClassName, customPropTypes, HTML } from '../../../lib';
import Text from '../../style/Text';

export default class Heading extends React.Component {
  static displayName = 'Heading';

  static propTypes = {
    ...Text.propTypes,
    as: customPropTypes.customOrStringElement(HTML.HEADING_ELEMENTS),
    bullet: PropTypes.bool,
    children: PropTypes.node,
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
    ...Text.defaultProps,
    as: 'h1',
    bullet: false,
    className: '',
    divider: false,
    hero: false,
    line: false,
    primary: false,
  };

  render() {
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
    } = this.props;

    const hasLine = (isString(line) && line.length > 0) || line === true;

    const classes = classnames(
      className,
      'uk-heading',
      buildClassName(headingClass),
      {
        'uk-heading-bullet': bullet,
        'uk-heading-divider': divider,
        'uk-heading-line': hasLine,
        'uk-heading-hero': hero,
        'uk-heading-primary': primary,
      },
    );

    return (
      <Text
        {...rest}
        className={classes}
        align={isString(line) ? line : undefined}
      >
        {hasLine ? <span>{children}</span> : children}
      </Text>
    );
  }
}
