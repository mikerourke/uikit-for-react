// TODO: Finish this, this thing is a beast.
import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import {
  buildClassName,
  getOptionsString, joinListProp,
  restrictToChildTypes,
  UIK,
} from '../../lib';
import { BlockElement } from '../Base';

export default class Navbar extends BlockElement {
  static meta = {
    name: 'Navbar',
    ukClass: 'uk-navbar',
  };

  static propTypes = {
    ...BlockElement.propTypes,
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
      inheritedAttributes,
      inheritedClasses,
      inheritedStyle,
      unhandledProps,
    } = this.getInheritedProps(this.props);

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
      inheritedClasses,
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
        style={inheritedStyle}
        data-uk-navbar={componentOptions}
        {...inheritedAttributes}
      >
        {children}
      </nav>
    );
  }
}
