import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import { omit } from 'lodash';
import {
  buildClassName,
  restrictToChildTypes,
} from '../../lib';
import { Block } from '../Base';
import SubnavItem from './SubnavItem';

export default class Subnav extends Block {
  static meta = {
    name: 'Subnav',
    ukClass: 'uk-subnav',
  };

  static propTypes = {
    ...omit(Block.propTypes, 'as'),
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
      attributes,
      blockClasses,
      blockStyle,
      unhandledProps,
    } = this.getBlockElements(this.props);

    const {
      children,
      className,
      divider,
      pill,
      ...rest
    } = unhandledProps;

    const classes = classnames(
      className,
      blockClasses,
      Subnav.meta.ukClass,
      {
        [buildClassName('subnav', 'divider')]: (divider),
        [buildClassName('subnav', 'pill')]: (pill),
      },
    );

    return (
      <ul
        {...rest}
        className={classes || undefined}
        style={blockStyle}
        {...attributes}
      >
        {children}
      </ul>
    );
  }
}
