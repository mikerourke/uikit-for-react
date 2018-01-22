import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import { buildClassName, restrictToChildTypes } from '../../lib';
import { BlockElement } from '../Base';
import ListItem from './ListItem';

export default class List extends BlockElement {
  static displayName = 'List';

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
    ...BlockElement.defaultProps,
    bullet: false,
    className: null,
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

    const ukClass = 'uk-list';
    const classes = classnames(className, ukClass, {
      [buildClassName(ukClass, 'bullet')]: bullet,
      [buildClassName(ukClass, 'divider')]: divider,
      [buildClassName(ukClass, 'large')]: large,
      [buildClassName(ukClass, 'striped')]: striped,
    });

    return (
      <BlockElement {...rest} as="ul" className={classes || undefined}>
        {children}
      </BlockElement>
    );
  }
}
