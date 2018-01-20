import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import { getElementType, getOptionsString } from '../../lib';
import { BlockElement } from '../Base';
import CoverContainer from './CoverContainer';

export default class Cover extends BlockElement {
  static meta = {
    name: 'Cover',
  };

  static propTypes = {
    ...BlockElement.propTypes,
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
      inheritedAttributes,
      inheritedClasses,
      inheritedStyle,
      unhandledProps,
    } = this.getInheritedProps(this.props);

    const {
      automute,
      children,
      className,
      height,
      width,
      ...rest
    } = unhandledProps;

    const classes = classnames(className, inheritedClasses);

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
        style={inheritedStyle}
        data-uk-cover={componentOptions}
        {...inheritedAttributes}
      >
        {children}
      </Element>
    );
  }
}
