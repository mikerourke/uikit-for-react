import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import { buildClassName, restrictToChildTypes } from '../../lib';
import { BlockElement } from '../Base';
import IconNavItem from './IconNavItem';

export default class IconNav extends BlockElement {
  static displayName = 'IconNav';

  static propTypes = {
    ...BlockElement.propTypes,
    children: restrictToChildTypes(IconNavItem),
    className: PropTypes.string,
    vertical: PropTypes.bool,
  };

  static defaultProps = {
    ...BlockElement.defaultProps,
    className: null,
    vertical: false,
  };

  static Item = IconNavItem;

  render() {
    const { children, className, vertical, ...rest } = this.props;

    const ukClass = 'uk-iconnav';
    const classes = classnames(className, ukClass, {
      [buildClassName(ukClass, 'vertical')]: vertical,
    });

    return (
      <BlockElement {...rest} as="ul" className={classes || undefined}>
        {children}
      </BlockElement>
    );
  }
}
