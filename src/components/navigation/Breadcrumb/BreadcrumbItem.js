import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import { customPropTypes, getElementType } from '../../../lib';
import { Flex, Margin, Width } from '../../common';

export default class BreadcrumbItem extends React.Component {
  static displayName = 'BreadcrumbItem';

  static propTypes = {
    active: PropTypes.bool,
    as: customPropTypes.customOrStringElement('li'),
    children: PropTypes.node,
    className: PropTypes.string,
    disabled: PropTypes.bool,
    flex: Flex.propTypes,
    href: PropTypes.string,
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
      margin,
      width,
      ...rest
    } = this.props;

    const classes = classnames(
      className,
      Flex.getClasses(flex),
      Margin.getClasses(margin),
      Width.getClasses(width),
      {
        'uk-disabled': disabled,
      },
    );

    const Element = getElementType(BreadcrumbItem, as);
    const InnerElement = active ? 'span' : 'a';
    return (
      <Element {...rest} className={classes || undefined}>
        <InnerElement href={href}>{children}</InnerElement>
      </Element>
    );
  }
}
