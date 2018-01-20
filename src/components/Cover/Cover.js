import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import {
  getElementType,
  getOptionsString,
} from '../../lib';
import { Block } from '../Base';
import CoverContainer from './CoverContainer';

export default class Cover extends Block {
  static meta = {
    name: 'Cover',
  };

  static propTypes = {
    ...Block.propTypes,
    as: PropTypes.oneOf(['img', 'video', 'iframe']),
    automute: PropTypes.bool,
    children: PropTypes.node.isRequired,
    className: PropTypes.string,
    height: PropTypes.number,
    width: PropTypes.number,
  };

  static Container = CoverContainer;

  render() {
    const {
      attributes,
      blockClasses,
      blockStyle,
      unhandledProps,
    } = this.getBlockElements(this.props);

    const {
      automute,
      children,
      className,
      height,
      width,
      ...rest
    } = unhandledProps;

    const classes = classnames(
      className,
      blockClasses,
    );

    const componentOptions = getOptionsString({
      automute,
      height,
      width,
    });

    const Element = getElementType(Cover, this.props);
    return (
      <Element
        {...rest}
        className={classes || undefined}
        style={blockStyle}
        data-uk-cover={componentOptions}
        {...attributes}
      >
        {children}
      </Element>
    );
  }
}

