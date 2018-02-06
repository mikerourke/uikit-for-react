import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import { customPropTypes, getElementType } from '../../../lib';
import BreadcrumbItem from './BreadcrumbItem';

export default class Breadcrumb extends React.Component {
  static displayName = 'Breadcrumb';

  static propTypes = {
    as: customPropTypes.customOrStringElement('ul'),
    children: customPropTypes.restrictToChildTypes(BreadcrumbItem),
    className: PropTypes.string,
  };

  static defaultProps = {
    as: 'ul',
    className: '',
  };

  static Item = BreadcrumbItem;

  render() {
    const { as, className, ...rest } = this.props;
    const classes = classnames(className, 'uk-breadcrumb');
    const Element = getElementType(Breadcrumb, as);
    return <Element {...rest} className={classes} />;
  }
}
