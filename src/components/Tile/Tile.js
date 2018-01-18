import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import { buildClassName } from '../../lib';
import { Block } from '../Base';

export default class Tile extends Block {
  static meta = {
    name: 'Tile',
    ukClass: 'uk-label',
  };

  static propTypes = {
    ...Block.propTypes,
    children: PropTypes.node.isRequired,
    className: PropTypes.string,
    muted: PropTypes.bool,
    primary: PropTypes.bool,
    secondary: PropTypes.bool,
  };

  static defaultProps = {
    muted: false,
    primary: false,
    secondary: false,
  };

  render() {
    const {
      attributes,
      blockClasses,
      blockStyle,
      unhandledProps,
    } = this.getBlockElements(this.props);

    const {
      children,
      className,
      muted,
      primary,
      secondary,
      ...rest
    } = unhandledProps;

    const classes = classnames(
      className,
      blockClasses,
      Tile.meta.ukClass,
      {
        [buildClassName(Tile.meta.ukClass, 'default')]: (!muted && !primary && !secondary),
        [buildClassName(Tile.meta.ukClass, 'muted')]: (muted),
        [buildClassName(Tile.meta.ukClass, 'primary')]: (primary),
        [buildClassName(Tile.meta.ukClass, 'secondary')]: (secondary),
      },
    );

    return (
      <span
        {...rest}
        className={classes}
        style={blockStyle}
        {...attributes}
      >
        {children}
      </span>
    );
  }
}
