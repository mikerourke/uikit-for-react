import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import { customPropTypes, getElementType } from '../../../lib';
import { Flex, Inverse, Margin, Text, Utility, Width } from '../../common';

export default class DotNavItem extends React.Component {
  static displayName = 'DotNavItem';

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
  };

  render() {
    const {
      active,
      as,
      children,
      className,
      flex,
      href,
      inverse,
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

    const Element = getElementType(DotNavItem, as);
    return (
      <Element {...rest} className={classes || undefined}>
        <a href={href}>{children}</a>
      </Element>
    );
  }
}
