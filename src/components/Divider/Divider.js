import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import { buildClassName } from '../../lib';
import { BlockElement } from '../Base';

export default class Divider extends BlockElement {
  static meta = {
    name: 'Divider',
    ukClass: 'uk-divider',
  };

  static propTypes = {
    ...BlockElement.propTypes,
    className: PropTypes.string,
    icon: PropTypes.bool,
    small: PropTypes.bool,
  };

  static defaultProps = {
    icon: false,
    small: false,
  };

  render() {
    const {
      inheritedAttributes,
      inheritedClasses,
      inheritedStyle,
      unhandledProps,
    } = this.getInheritedProps(this.props);

    const {
      className,
      icon,
      small,
      ...rest
    } = unhandledProps;

    const classes = classnames(
      className,
      inheritedClasses,
      {
        [buildClassName(Divider.meta.className, 'icon')]: (icon),
        [buildClassName(Divider.meta.className, 'small')]: (small),
      },
    );

    return (
      <hr
        {...rest}
        className={classes || undefined}
        style={inheritedStyle}
        {...inheritedAttributes}
      />
    );
  }
}
