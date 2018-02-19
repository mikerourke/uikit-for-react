import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import { isObject } from 'lodash';
import { customPropTypes, getElementType } from '../../../lib';
import { Flex, Inverse, Margin, Text, Utility, Width } from '../../common';

export default class SubNavItem extends React.Component {
  static displayName = 'SubNavItem';

  static propTypes = {
    active: PropTypes.bool,
    as: customPropTypes.customOrStringElement('li'),
    children: PropTypes.node,
    className: PropTypes.string,
    flex: Flex.propTypes,
    inverse: Inverse.propTypes,
    href: PropTypes.string,
    margin: Margin.propTypes,
    text: Text.propTypes,
    utility: Utility.propTypes,
    width: Width.propTypes,
  };

  static defaultProps = {
    active: false,
    as: 'li',
    className: '',
    href: '#',
  };

  render() {
    const {
      active,
      as,
      children,
      className,
      flex,
      inverse,
      href,
      margin,
      text,
      utility,
      width,
      ...rest
    } = this.props;

    const classes = classnames(
      className,
      Flex.getClasses(flex),
      Inverse.getClasses(inverse),
      Margin.getClasses(margin),
      Text.getClasses(text),
      Utility.getClasses(utility),
      Width.getClasses(width),
      {
        'uk-active': active,
      },
    );

    const Element = getElementType(SubNavItem, as);
    return (
      <Element {...rest} className={classes || undefined}>
        {isObject(children) ? children : <a href={href}>{children}</a>}
      </Element>
    );
  }
}
