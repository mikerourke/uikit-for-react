import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import {
  buildClassName,
  getElementType,
} from '../../lib';
import Root from '../Root';

class Divider extends Root {
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
      buildClassName('divider', 'icon', icon),
      buildClassName('divider', 'small', small),
      this.getRootClassNames(),
    );

    const Element = getElementType(Divider, as);
    return (
      <Element
        {...this.getValidProps(rest)}
        className={classes}
      />
    );
  }
}

export default Divider;
