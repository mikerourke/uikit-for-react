import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import BreadcrumbItem from './BreadcrumbItem';

class Breadcrumb extends React.Component {
  static meta = {
    name: 'Breadcrumb',
    ukClass: 'uk-breadcrumb',
  };

  static propTypes = {
    children: PropTypes.node.isRequired,
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
    );

    return (
      <ul
        {...rest}
        className={classes || undefined}
      >
        {children}
      </ul>
    );
  }
}

export default Breadcrumb;
