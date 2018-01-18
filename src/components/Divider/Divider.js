import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import { buildClassName } from '../../lib';
import { Block } from '../Base';

export default class Divider extends Block {
  static meta = {
    name: 'Divider',
    ukClass: 'uk-divider',
  };

  static propTypes = {
    ...Block.propTypes,
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
      attributes,
      blockClasses,
      blockStyle,
      unhandledProps,
    } = this.getBlockElements(this.props);

    const {
      className,
      icon,
      small,
      ...rest
    } = unhandledProps;

    const classes = classnames(
      className,
      blockClasses,
      {
        [buildClassName(Divider.meta.className, 'icon')]: (icon),
        [buildClassName(Divider.meta.className, 'small')]: (small),
      },
    );

    return (
      <hr
        {...rest}
        className={classes || undefined}
        style={blockStyle}
        {...attributes}
      />
    );
  }
}
