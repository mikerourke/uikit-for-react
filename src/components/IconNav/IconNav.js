import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import { buildClassName, restrictToChildTypes } from '../../lib';
import { BlockElement } from '../Base';
import IconNavItem from './IconNavItem';

export default class IconNav extends BlockElement {
  static meta = {
    name: 'IconNav',
    ukClass: 'uk-iconnav',
  };

  static propTypes = {
    ...BlockElement.propTypes,
    children: restrictToChildTypes(IconNavItem),
    className: PropTypes.string,
    vertical: PropTypes.bool,
  };

  static defaultProps = {
    vertical: false,
  };

  static Item = IconNavItem;

  render() {
    const { children, className, vertical, ...rest } = this.props;

    const classes = classnames(className, IconNav.meta.ukClass, {
      [buildClassName(IconNav.meta.ukClass, 'vertical')]: vertical,
    });

    return (
      <BlockElement {...rest} as="ul" className={classes || undefined}>
        {children}
      </BlockElement>
    );
  }
}
