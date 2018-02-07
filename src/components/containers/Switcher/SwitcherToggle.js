import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import { isString } from 'lodash';
import { customPropTypes, getElementType, HTML } from '../../../lib';
import { Flex, Inverse, Margin, Width } from '../../common';

export default class SwitcherToggle extends React.Component {
  static displayName = 'SwitcherToggle';

  static propTypes = {
    as: customPropTypes.customOrStringElement(HTML.BLOCK_ELEMENTS),
    children: PropTypes.node,
    className: PropTypes.string,
    flex: Flex.propTypes,
    href: PropTypes.string,
    inverse: Inverse.propTypes,
    margin: Margin.propTypes,
    width: Width.propTypes,
  };

  static defaultProps = {
    as: 'li',
    className: '',
    href: '#',
  };

  render() {
    const {
      as,
      className,
      children,
      flex,
      href,
      inverse,
      margin,
      width,
      ...rest
    } = this.props;

    const classes = classnames(
      className,
      Flex.getClasses(flex),
      Inverse.getClasses(inverse),
      Margin.getClasses(margin),
      Width.getClasses(width),
    );

    const isAsString = isString(as);
    const Element = getElementType(SwitcherToggle, as);
    return (
      <Element {...rest} className={classes || undefined}>
        {isAsString ? <a href={href}>{children}</a> : children}
      </Element>
    );
  }
}
