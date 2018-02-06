import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import { isObject } from 'lodash';
import { buildClassName, customPropTypes, getElementType } from '../../../lib';

export default class SubNavItem extends React.Component {
  static displayName = 'SubNavItem';

  static propTypes = {
    active: PropTypes.bool,
    as: customPropTypes.customOrStringElement('li'),
    children: PropTypes.node.isRequired,
    className: PropTypes.string,
    href: PropTypes.string,
  };

  static defaultProps = {
    active: false,
    as: 'li',
    className: '',
    href: '#',
  };

  render() {
    const { active, as, children, className, href, ...rest } = this.props;

    const classes = classnames(className, {
      [buildClassName('active')]: active,
    });

    const Element = getElementType(SubNavItem, this.props);
    return (
      <Element {...rest} className={classes}>
        {isObject(children) ? children : <a href={href}>{children}</a>}
      </Element>
    );
  }
}
