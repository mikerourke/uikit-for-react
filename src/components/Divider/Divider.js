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
    as: PropTypes.oneOf(['hr', 'div']),
    className: PropTypes.string,
    icon: PropTypes.bool,
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
