import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import { buildClassName } from '../../lib';
import Root from '../Root';

class BreadcrumbItem extends Root {
  static meta = {
    name: 'BreadcrumbItem',
  };

  static propTypes = {
    active: PropTypes.bool,

    /** Contents to display in the element. */
    children: PropTypes.node,

    disabled: PropTypes.bool,

    /** Additional classes to apply to element. */
    className: PropTypes.string,

    href: PropTypes.string,
  };

  static defaultProps = {
    className: '',
    href: '#',
  };

  render() {
    const {
      active,
      children,
      className,
      disabled,
      href,
      ...rest
    } = this.props;

    const classes = classnames(
      className,
      buildClassName('disabled', disabled),
      this.getRootClassNames(),
    );

    const InnerElement = (active) ? 'a' : 'span';
    return (
      <li
        {...this.getValidProps(rest)}
        className={classes}
      >
        <InnerElement href={href}>
          {children}
        </InnerElement>
      </li>
    );
  }
}

export default BreadcrumbItem;
