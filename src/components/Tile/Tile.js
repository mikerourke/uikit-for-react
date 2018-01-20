import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import { buildClassName } from '../../lib';
import { BlockElement } from '../Base';

export default class Tile extends BlockElement {
  static meta = {
    name: 'Tile',
    ukClass: 'uk-label',
  };

  static propTypes = {
    ...BlockElement.propTypes,
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
      inheritedAttributes,
      inheritedClasses,
      inheritedStyle,
      unhandledProps,
    } = this.getInheritedProps(this.props);

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
      inheritedClasses,
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
        style={inheritedStyle}
        {...inheritedAttributes}
      >
        {children}
      </span>
    );
  }
}
