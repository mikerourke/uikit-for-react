import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import { omit } from 'lodash';
import { buildClassName } from '../../lib';
import { Block } from '../Base';

export default class Panel extends Block {
  static meta = {
    name: 'Panel',
    ukClass: 'uk-panel',
  };

  static propTypes = {
    ...omit(Block.propTypes, 'as'),
    children: PropTypes.node.isRequired,
    className: PropTypes.string,
    scrollable: PropTypes.bool,
  };

  static defaultProps = {
    scrollable: false,
  };

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
      scrollable,
      ...rest
    } = unhandledProps;

    const classes = classnames(
      className,
      blockClasses,
      Panel.meta.ukClass,
      {
        [buildClassName(Panel.meta.ukClass, 'scrollable')]: (scrollable),
      },
    );

    return (
      <div
        {...rest}
        className={classes || undefined}
        style={blockStyle}
        {...attributes}
      >
        {children}
      </div>
    );
  }
}
