import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import { buildClassName, customPropTypes, getElementType } from '../../../lib';

export default class BreadcrumbItem extends React.Component {
  static displayName = 'BreadcrumbItem';

  static propTypes = {
    active: PropTypes.bool,
    as: customPropTypes.customOrStringElement('li'),
    children: PropTypes.node,
    className: PropTypes.string,
    disabled: PropTypes.bool,
    href: PropTypes.string,
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
      href,
      ...rest
    } = this.props;

    const classes = classnames(className, {
      [buildClassName('disabled')]: disabled,
    });

    const Element = getElementType(BreadcrumbItem, this.props);
    const InnerElement = active ? 'span' : 'a';
    return (
      <Element {...rest} className={classes}>
        <InnerElement href={href}>{children}</InnerElement>
      </Element>
    );
  }
}
