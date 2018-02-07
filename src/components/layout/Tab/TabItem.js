import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import { isObject } from 'lodash';
import { customPropTypes, getElementType } from '../../../lib';
import { Flex, Inverse, Margin, Width } from '../../common';

export default class TabItem extends React.Component {
  static displayName = 'TabItem';

  static propTypes = {
    active: PropTypes.bool,
    as: customPropTypes.customOrStringElement('li'),
    children: PropTypes.node.isRequired,
    className: PropTypes.string,
    disabled: PropTypes.bool,
    flex: Flex.propTypes,
    href: PropTypes.string,
    inverse: Inverse.propTypes,
    margin: Margin.propTypes,
    width: Width.propTypes,
  };

  static defaultProps = {
    active: false,
    as: 'li',
    className: '',
    disabled: false,
    href: '#',
  };

  render() {
    const {
      active,
      as,
      children,
      className,
      disabled,
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
      {
        'uk-active': active,
        'uk-disabled': disabled,
      },
    );

    const Element = getElementType(TabItem, as);
    return (
      <Element {...rest} className={classes}>
        {isObject(children) ? children : <a href={href}>{children}</a>}
      </Element>
    );
  }
}
