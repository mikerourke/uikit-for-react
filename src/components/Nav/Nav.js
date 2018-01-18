import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import { isNil } from 'lodash';
import {
  buildClassName,
  buildObjectOrValueClassNames,
  commonPropTypes,
  getOptionsString,
  getIfHasChildType,
  HTML,
  UIK,
} from '../../lib';

class Nav extends React.Component {
  static meta = {
    name: 'Nav',
    ukClass: 'uk-nav',
  };

  static propTypes = {
    activeIndex: PropTypes.number,
    accordion: PropTypes.bool,
    animation: PropTypes.oneOfType([
      PropTypes.oneOf(UIK.ANIMATIONS),
      PropTypes.arrayOf(UIK.ANIMATIONS),
      PropTypes.shape({
        in: commonPropTypes.animationName,
        out: commonPropTypes.animationName,
        duration: PropTypes.number,
      }),
    ]),
    center: PropTypes.bool,
    children: PropTypes.node.isRequired,
    className: PropTypes.string,
    hideOpenAnimation: PropTypes.bool,
    margin: commonPropTypes.margin,
    padding: commonPropTypes.padding,
    primary: PropTypes.bool,
    selectorTargets: PropTypes.string,
    selectorToggle: PropTypes.string,
    selectorContent: PropTypes.string,
    collapsible: PropTypes.bool,
    multiple: PropTypes.bool,
    transition: PropTypes.oneOf(HTML.CSS_EASING),
  };

  handleRef = element => (this.ref = element);

  render() {
    const {
      accordion,
      animation,
      center,
      children,
      className,
      hideOpenAnimation,
      margin,
      padding,
      primary,
      selectorTargets,
      selectorToggle,
      selectorContent,
      collapsible,
      multiple,
      transition,
      ...rest
    } = this.props;

    const classes = classnames(
      className,
      Nav.meta.ukClass,
      buildObjectOrValueClassNames('margin', margin),
      buildObjectOrValueClassNames('padding', padding),
      {
        [buildClassName(Nav.meta.ukClass, 'center')]: (center),
        [buildClassName(Nav.meta.ukClass, 'default')]: (isNil(primary)),
        [buildClassName(Nav.meta.ukClass, 'parent', 'icon')]: (accordion),
        [buildClassName(Nav.meta.ukClass, 'primary')]: (primary),
      },
    );

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
        data-uk-nav={(accordion) ? componentOptions : undefined}
      >
        {children}
      </ul>
    );
  }
}

export default Nav;
