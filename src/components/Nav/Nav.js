import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import { buildClassName, getOptionsString, HTML, UIK } from '../../lib';
import { BlockElement } from '../Base';
import NavItem from './NavItem';

export default class Nav extends BlockElement {
  static meta = {
    name: 'Nav',
    ukClass: 'uk-nav',
  };

  static propTypes = {
    ...BlockElement.propTypes,
    activeIndex: PropTypes.number,
    accordion: PropTypes.bool,
    animation: PropTypes.oneOfType([
      PropTypes.oneOf(UIK.ANIMATIONS),
      PropTypes.arrayOf(UIK.ANIMATIONS),
      PropTypes.shape({
        in: PropTypes.oneOfType([
          PropTypes.oneOf(UIK.ANIMATIONS),
          PropTypes.arrayOf(UIK.ANIMATIONS),
        ]),
        out: PropTypes.oneOfType([
          PropTypes.oneOf(UIK.ANIMATIONS),
          PropTypes.arrayOf(UIK.ANIMATIONS),
        ]),
        duration: PropTypes.number,
      }),
    ]),
    center: PropTypes.bool,
    children: PropTypes.node.isRequired,
    className: PropTypes.string,
    collapsible: PropTypes.bool,
    hideOpenAnimation: PropTypes.bool,
    multiple: PropTypes.bool,
    primary: PropTypes.bool,
    selectorContent: PropTypes.string,
    selectorTargets: PropTypes.string,
    selectorToggle: PropTypes.string,
    transition: PropTypes.oneOf(HTML.CSS_EASING),
  };

  static defaultProps = {
    accordion: false,
    center: false,
    collapsible: false,
    hideOpenAnimation: false,
    multiple: false,
    primary: false,
  };

  static Item = NavItem;

  handleRef = element => (this.ref = element);

  render() {
    const {
      inheritedAttributes,
      inheritedClasses,
      inheritedStyle,
      unhandledProps,
    } = this.getInheritedProps(this.props);

    const {
      accordion,
      animation,
      center,
      children,
      className,
      collapsible,
      hideOpenAnimation,
      multiple,
      primary,
      selectorContent,
      selectorTargets,
      selectorToggle,
      transition,
      ...rest
    } = unhandledProps;

    const classes = classnames(className, inheritedClasses, Nav.meta.ukClass, {
      [buildClassName(Nav.meta.ukClass, 'center')]: center,
      [buildClassName(Nav.meta.ukClass, 'default')]: primary === false,
      [buildClassName(Nav.meta.ukClass, 'parent', 'icon')]: accordion,
      [buildClassName(Nav.meta.ukClass, 'primary')]: primary === true,
    });

    const componentOptions = getOptionsString({
      animation,
      collapsible,
      content: selectorContent,
      multiple,
      targets: selectorTargets,
      toggle: selectorToggle,
      transition,
    });

    return (
      <ul
        {...rest}
        className={classes}
        ref={this.handleRef}
        style={inheritedStyle}
        data-uk-nav={accordion ? componentOptions : undefined}
        {...inheritedAttributes}
      >
        {children}
      </ul>
    );
  }
}
