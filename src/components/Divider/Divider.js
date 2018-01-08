import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import {
  buildClassName,
  getElementType,
} from '../../lib';

class Divider extends React.Component {
  static meta = {
    name: 'Divider',
    ukClass: 'uk-divider',
  };

  static propTypes = {
    /** HTML element to use for the component. */
    as: PropTypes.oneOf(['hr', 'div']),

    /** Additional classes to apply to element. */
    className: PropTypes.string,

    /** Adds an icon to the divider. */
    icon: PropTypes.bool,

    /** Create a smaller divider. */
    small: PropTypes.bool,
  };

  static defaultProps = {
    as: 'hr',
    className: '',
  };

  render() {
    const {
      as,
      className,
      icon,
      small,
      ...rest
    } = this.props;

    const classes = classnames(
      className,
      buildClassName(Divider.meta.className, 'icon', icon),
      buildClassName(Divider.meta.className, 'small', small),
    );

    const Element = getElementType(Divider, as, rest);
    return (
      <Element
        {...rest}
        className={classes || undefined}
      />
    );
  }
}

export default Divider;
