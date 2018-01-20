// TODO: Finish this component.
import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import { omit } from 'lodash';
import { Block } from '../Base';

export default class OffcanvasContent extends Block {
  static meta = {
    name: 'OffcanvasContent',
  };

  static propTypes = {
    ...omit(Block.propTypes, 'as'),
    children: PropTypes.node.isRequired,
    className: PropTypes.string,
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
      ...rest
    } = unhandledProps;

    const classes = classnames(
      className,
      blockClasses,
      OffcanvasContent.meta.ukClass,
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
