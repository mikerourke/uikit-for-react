import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import { restrictToChildTypes } from '../../lib';
import { BlockElement } from '../Base';
import BreadcrumbItem from './BreadcrumbItem';

export default class Breadcrumb extends BlockElement {
  static meta = {
    name: 'Breadcrumb',
    ukClass: 'uk-breadcrumb',
  };

  static propTypes = {
    ...BlockElement.propTypes,
    children: restrictToChildTypes(BreadcrumbItem),
    className: PropTypes.string,
  };

  static Item = BreadcrumbItem;

  render() {
    const {
      inheritedAttributes,
      inheritedClasses,
      inheritedStyle,
      unhandledProps,
    } = this.getInheritedProps(this.props);

    const { children, className, ...rest } = unhandledProps;

    const classes = classnames(
      className,
      inheritedClasses,
      Breadcrumb.meta.ukClass,
    );

    return (
      <ul
        {...rest}
        className={classes || undefined}
        style={inheritedStyle}
        {...inheritedAttributes}
      >
        {children}
      </ul>
    );
  }
}
