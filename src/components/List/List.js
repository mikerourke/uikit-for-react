import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import { buildClassName, restrictToChildTypes } from '../../lib';
import { BlockElement } from '../Base';
import ListItem from './ListItem';

export default class List extends BlockElement {
  static meta = {
    name: 'List',
    ukClass: 'uk-list',
  };

  static propTypes = {
    ...BlockElement.propTypes,
    bullet: PropTypes.bool,
    children: restrictToChildTypes(ListItem),
    className: PropTypes.string,
    divider: PropTypes.bool,
    large: PropTypes.bool,
    striped: PropTypes.bool,
  };

  static defaultProps = {
    bullet: false,
    divider: false,
    large: false,
    striped: false,
  };

  static Item = ListItem;

  render() {
    const {
      bullet,
      children,
      className,
      divider,
      large,
      striped,
      ...rest
    } = this.props;

    const classes = classnames(className, List.meta.ukClass, {
      [buildClassName(List.meta.ukClass, 'bullet')]: bullet,
      [buildClassName(List.meta.ukClass, 'divider')]: divider,
      [buildClassName(List.meta.ukClass, 'large')]: large,
      [buildClassName(List.meta.ukClass, 'striped')]: striped,
    });

    return (
      <BlockElement {...rest} as="ul" className={classes || undefined}>
        {children}
      </BlockElement>
    );
  }
}
