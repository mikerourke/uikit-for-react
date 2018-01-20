import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import { buildClassName } from '../../lib';
import { Block } from '../Base';
import Grid from '../Grid';

export default class Form extends Block {
  static meta = {
    name: 'Form',
  };

  static propTypes = {
    ...Block.propTypes,
    as: PropTypes.instanceOf(Grid),
    children: PropTypes.node.isRequired,
    className: PropTypes.string,
    horizontal: PropTypes.bool,
    stacked: PropTypes.bool,
  };

  static defaultProps = {
    horizontal: false,
    stacked: false,
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
      horizontal,
      stacked,
      ...rest
    } = unhandledProps;

    const classes = classnames(
      className,
      blockClasses,
      Form.meta.ukClass,
      {
        [buildClassName(Form.meta.ukClass, 'horizontal')]: (horizontal),
        [buildClassName(Form.meta.ukClass, 'stacked')]: (stacked),
      },
    );

    return (
      <form
        {...rest}
        className={classes || undefined}
        style={blockStyle}
        {...attributes}
      >
        {children}
      </form>
    );
  }
}
