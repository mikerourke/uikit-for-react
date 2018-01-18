// TODO: Finish this, this thing is a beast.
import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import { omit } from 'lodash';
import {
  buildClassName,
  getOptionsString, joinListProp,
  restrictToChildTypes,
  UIK,
} from '../../lib';
import { Block } from '../Base';

export default class Navbar extends Block {
  static meta = {
    name: 'Navbar',
    ukClass: 'uk-navbar',
  };

  static propTypes = {
    ...omit(Block.propTypes, 'as'),
    boundaryAlign: PropTypes.bool,
    children: restrictToChildTypes(),
    className: PropTypes.string,
    delayHide: PropTypes.number,
    delayShow: PropTypes.number,
    dropbar: PropTypes.bool,
    dropbarMode: PropTypes.oneOf(['push', 'slide']),
    dropdownAlign: PropTypes.oneOf(UIK.HORIZONTAL_POSITIONS),
    duration: PropTypes.number,
    mode: PropTypes.oneOfType([
      PropTypes.oneOf(UIK.MODES),
      PropTypes.arrayOf(UIK.MODES),
    ]),
    offset: PropTypes.number,
    selectorBoundary: PropTypes.string,
    transparent: PropTypes.bool,
  };

  static defaultProps = {
    boundaryAlign: false,
    dropbar: false,
    transparent: false,
  };

  render() {
    const {
      attributes,
      blockClasses,
      blockStyle,
      unhandledProps,
    } = this.getBlockElements(this.props);

    const {
      boundaryAlign,
      children,
      className,
      delayHide,
      delayShow,
      dropbar,
      dropbarMode,
      dropdownAlign,
      duration,
      mode,
      offset,
      selectorBoundary,
      ...rest
    } = unhandledProps;

    const classes = classnames(
      className,
      blockClasses,
      buildClassName(Navbar.meta.ukClass, 'container'),
    );

    const componentOptions = getOptionsString({
      align: dropdownAlign,
      boundary: selectorBoundary,
      boundaryAlign,
      delayHide,
      delayShow,
      dropbar,
      dropbarMode,
      duration,
      mode: joinListProp(mode, ','),
      offset,
    });

    return (
      <nav
        {...rest}
        className={classes || undefined}
        style={blockStyle}
        data-uk-navbar={componentOptions}
        {...attributes}
      >
        {children}
      </nav>
    );
  }
}
