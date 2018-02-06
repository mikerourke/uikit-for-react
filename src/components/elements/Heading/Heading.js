import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import { isString } from 'lodash';
import { buildClassName, customPropTypes, HTML } from '../../../lib';
import Text from '../../style/Text';

export default class Heading extends React.Component {
  static displayName = 'Heading';

  static propTypes = {
    as: customPropTypes.customOrStringElement(HTML.HEADING_ELEMENTS),
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

    const ukClass = 'uk-heading';
    const classes = classnames(
      className,
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
        className={classes}
        horizontalAlign={isString(line) ? line : undefined}
      >
        {line === true ? <span>{children}</span> : children}
      </Text>
    );
  }
}
