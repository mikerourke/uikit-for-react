import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import Root from '../Root';
import BreadcrumbItem from './BreadcrumbItem';
import { sharedPropTypes } from '../props';

class Breadcrumb extends Root {
  static meta = {
    name: 'Breadcrumb',
    ukClass: 'uk-breadcrumb',
  };

  static propTypes = {
    margin: sharedPropTypes.margin,
    /** Contents to display in the element. */
    children: PropTypes.node.isRequired,

    /** Additional classes to apply to element. */
    className: PropTypes.string,
  };

  static defaultProps = {
    className: '',
  };

  static Item = BreadcrumbItem;

  render() {
    const {
      children,
      className,
      ...rest
    } = this.props;

    const classes = classnames(
      className,
      Breadcrumb.meta.ukClass,
      this.getRootClassNames(),
    );

    return (
      <ul
        {...this.getValidProps(rest)}
        className={classes}
      >
        {children}
      </ul>
    );
  }
}

export default Breadcrumb;
