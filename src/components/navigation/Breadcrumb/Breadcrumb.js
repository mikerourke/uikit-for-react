import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import { restrictToChildTypes } from '../../../lib';
import { BlockElement } from '../../base';
import BreadcrumbItem from './BreadcrumbItem';

export default class Breadcrumb extends React.Component {
  static displayName = 'Breadcrumb';

  static propTypes = {
    ...BlockElement.propTypes,
    children: restrictToChildTypes(BreadcrumbItem),
    className: PropTypes.string,
  };

  static defaultProps = {
    ...BlockElement.defaultProps,
    className: null,
  };

  static Item = BreadcrumbItem;

  render() {
    const { className, ...rest } = this.props;
    const classes = classnames(className, 'uk-breadcrumb');
    return <BlockElement {...rest} as="ul" className={classes} />;
  }
}
