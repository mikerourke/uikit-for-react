import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import { customPropTypes } from '../../../lib';
import { BlockElement } from '../../base';
import BreadcrumbItem from './BreadcrumbItem';

export default class Breadcrumb extends React.Component {
  static displayName = 'Breadcrumb';

  static propTypes = {
    ...BlockElement.propTypes,
    children: customPropTypes.restrictToChildTypes(BreadcrumbItem),
    className: PropTypes.string,
  };

  static defaultProps = {
    ...BlockElement.defaultProps,
    className: '',
  };

  static Item = BreadcrumbItem;

  render() {
    const { className, ...rest } = this.props;
    const classes = classnames(className, 'uk-breadcrumb');
    return <BlockElement {...rest} as="ul" className={classes} />;
  }
}
