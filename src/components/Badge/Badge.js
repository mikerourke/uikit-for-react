import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import { getElementType } from '../../lib';

class Badge extends React.Component {
  static meta = {
    name: 'Badge',
    ukClass: 'uk-badge',
  };

  static propTypes = {
    /** HTML element to use for the component. */
    as: PropTypes.oneOf(['a', 'span']),

    /** Contents to display in the element. */
    children: PropTypes.node.isRequired,

    /** Additional classes to apply to element. */
    className: PropTypes.string,
  };

  static defaultProps = {
    as: 'span',
    className: '',
  };

  render() {
    const {
      as,
      children,
      className,
      ...rest
    } = this.props;

    const classes = classnames(
      className,
      Badge.meta.ukClass,
    );

    const Element = getElementType(Badge, as, rest);
    return (
      <Element
        {...rest}
        className={classes}
      >
        {children}
      </Element>
    );
  }
}

export default Badge;
