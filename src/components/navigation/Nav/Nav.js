import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import { isNil } from 'lodash';
import { buildClassName, getOptionsString, HTML, UIK } from '../../../lib';
import { BlockElement } from '../../base';
import NavItem from './NavItem';

export default class Nav extends React.Component {
  static displayName = 'Nav';

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
    ...BlockElement.defaultProps,
    activeIndex: 0,
    accordion: false,
    center: false,
    className: '',
    collapsible: false,
    hideOpenAnimation: false,
    multiple: false,
    primary: false,
  };

  static Item = NavItem;

  render() {
    const {
      accordion,
      animation,
      center,
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
    } = this.props;

    const ukClass = 'uk-nav';
    const classes = classnames(className, ukClass, {
      [buildClassName(ukClass, 'center')]: center,
      [buildClassName(ukClass, 'default')]: primary === false,
      [buildClassName(ukClass, 'parent', 'icon')]: accordion,
      [buildClassName(ukClass, 'primary')]: primary === true,
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
      <BlockElement
        {...rest}
        as="ul"
        className={classes}
        data-uk-nav={accordion ? componentOptions : undefined}
      />
    );
  }
}
