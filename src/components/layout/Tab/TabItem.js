import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import { isObject } from 'lodash';
import { buildClassName, customPropTypes, getElementType } from '../../../lib';

export default class TabItem extends React.Component {
  static displayName = 'TabItem';

  static propTypes = {
    active: PropTypes.bool,
    as: customPropTypes.customOrStringElement('li'),
    children: PropTypes.node.isRequired,
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
      [buildClassName('active')]: active,
      [buildClassName('disabled')]: disabled,
    });

    const Element = getElementType(TabItem, this.props);
    return (
      <Element {...rest} className={classes}>
        {isObject(children) ? children : <a href={href}>{children}</a>}
      </Element>
    );
  }
}
