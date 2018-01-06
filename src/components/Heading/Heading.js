import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import { isNil, isString } from 'lodash';
import {
  buildClassName,
  buildObjectOrValueClassNames,
  getElementType,
  HTML,
} from '../../lib';
import Text from '../Text';

class Heading extends React.Component {
  static meta = {
    name: 'Heading',
    ukClass: 'uk-heading',
  };

  static propTypes = {
    /** HTML element to use for the component. */
    as: PropTypes.oneOf(HTML.HEADING_ELEMENTS),

    bullet: PropTypes.bool,

    /** Contents to display in the element. */
    children: PropTypes.node.isRequired,

    /** Additional classes to apply to element. */
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
    className: '',
  };

  render() {
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
    } = this.props;

    const classes = classnames(
      className,
      Heading.meta.ukClass,
      buildClassName('heading', 'bullet', bullet),
      buildClassName('heading', 'divider', divider),
      buildClassName(headingClass),
      buildClassName('heading', 'hero', hero),
      buildClassName('heading', 'line', line),
      buildClassName('heading', 'primary', primary),
    );

    return (
      <Text
        {...rest}
        as={as}
        className={classes}
        horizontalAlign={(isString(line)) ? line : undefined}
      >
        {(!isNil(line)) ? <span>{children}</span> : children}
      </Text>
    );
  }
}

export default Heading;
