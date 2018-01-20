import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import { buildClassName, restrictToChildTypes } from '../../lib';
import { BlockElement } from '../Base';
import SubnavItem from './SubnavItem';

export default class Subnav extends BlockElement {
  static meta = {
    name: 'Subnav',
    ukClass: 'uk-subnav',
  };

  static propTypes = {
    ...BlockElement.propTypes,
    children: restrictToChildTypes(SubnavItem),
    className: PropTypes.string,
    divider: PropTypes.bool,
    pill: PropTypes.bool,
  };

  static defaultProps = {
    divider: false,
    pill: false,
  };

  static Item = SubnavItem;

  render() {
    const {
      inheritedAttributes,
      inheritedClasses,
      inheritedStyle,
      unhandledProps,
    } = this.getInheritedProps(this.props);

    const { children, className, divider, pill, ...rest } = unhandledProps;

    const classes = classnames(
      className,
      inheritedClasses,
      Subnav.meta.ukClass,
      {
        [buildClassName('subnav', 'divider')]: divider,
        [buildClassName('subnav', 'pill')]: pill,
      },
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
