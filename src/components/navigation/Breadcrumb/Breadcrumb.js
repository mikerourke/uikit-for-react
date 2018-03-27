import React from 'react';
import classnames from 'classnames';
import { customPropTypes } from '../../../lib';
import Base from '../../base';
import BreadcrumbItem from './BreadcrumbItem';

export default class Breadcrumb extends React.Component {
  static displayName = 'Breadcrumb';

  static propTypes = {
    ...Base.propTypes,
    as: customPropTypes.customOrStringElement('ul'),
    children: customPropTypes.restrictToChildTypes(BreadcrumbItem),
  };

  static defaultProps = {
    ...Base.defaultProps,
    as: 'ul',
  };

  static Item = BreadcrumbItem;

  render() {
    const { className, ...rest } = this.props;
    const classes = classnames(className, 'uk-breadcrumb');
    return <Base {...rest} className={classes} component={Breadcrumb} />;
  }
}
