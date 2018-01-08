import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import { buildClassName } from '../../lib';

class BreadcrumbItem extends React.Component {
  static meta = {
    name: 'BreadcrumbItem',
  };

  static propTypes = {
    /** Set the item to an active state. */
    active: PropTypes.bool,

    /** Contents to display in the element. */
    children: PropTypes.node,

    /** Disable the item in the list. */
    disabled: PropTypes.bool,

    /** Additional classes to apply to element. */
    className: PropTypes.string,

    /** Path for the inner component link */
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
      {
        [buildClassName('disabled')]: (disabled),
      },
    );

    const InnerElement = (active) ? 'span' : 'a';
    return (
      <li
        {...rest}
        className={classes || undefined}
      >
        <InnerElement href={href}>
          {children}
        </InnerElement>
      </li>
    );
  }
}

export default BreadcrumbItem;
