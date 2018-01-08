import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import { isNil, isString } from 'lodash';
import {
  buildClassName,
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

    /** Apply a bullet to the heading. */
    bullet: PropTypes.bool,

    /** Contents to display in the element. */
    children: PropTypes.node.isRequired,

    /** Additional classes to apply to element. */
    className: PropTypes.string,

    /** Add a divider line underneath the heading. */
    divider: PropTypes.bool,

    /** UIkit class to apply to component to override it's default styling. */
    headingClass: PropTypes.oneOf(HTML.HEADING_ELEMENTS),

    /** Further enlarge or highlight the heading. */
    hero: PropTypes.bool,

    /**
     * Apply a vertically centered line to the heading. You can specify either true, which aligns
     *    the heading text to the left, or "center" or "right" to specify where to align the
     *    heading text.
     */
    line: PropTypes.oneOfType([
      PropTypes.bool,
      PropTypes.oneOf(['center', 'right']),
    ]),

    /** Emphasize a heading with an alternative styling. */
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
        horizontalAlign={(isString(line)) ? line : undefined}
      >
        {(!isNil(line)) ? <span>{children}</span> : children}
      </Text>
    );
  }
}

export default Heading;
