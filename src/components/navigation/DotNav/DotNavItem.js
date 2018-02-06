import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import { buildClassName, customPropTypes, getElementType } from '../../../lib';

export default class DotNavItem extends React.Component {
  static displayName = 'DotNavItem';

  static propTypes = {
    active: PropTypes.bool,
    as: customPropTypes.customOrStringElement('li'),
    children: PropTypes.node,
    className: PropTypes.string,
    href: PropTypes.string,
  };

  static defaultProps = {
    active: false,
    as: 'li',
    className: '',
  };

  render() {
    const { active, as, children, className, href, ...rest } = this.props;

    const classes = classnames(className, {
      [buildClassName('active')]: active,
    });

    const Element = getElementType(DotNavItem, as);
    return (
      <Element {...rest} className={classes}>
        <a href={href}>{children}</a>
      </Element>
    );
  }
}
