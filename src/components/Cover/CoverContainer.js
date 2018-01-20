import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import { get } from 'lodash';
import { getElementType, getOptionsString, HTML } from '../../lib';
import { BlockElement } from '../Base';
import Cover from './Cover';

export default class CoverContainer extends BlockElement {
  static meta = {
    name: 'CoverContainer',
    ukClass: 'uk-cover-container',
  };

  static propTypes = {
    ...BlockElement.propTypes,
    as: PropTypes.oneOfType([
      PropTypes.oneOf(HTML.BLOCK_ELEMENTS),
      PropTypes.element,
      PropTypes.func,
    ]),
    children: PropTypes.instanceOf(Cover),
    className: PropTypes.string,
    responsive: PropTypes.shape({
      height: PropTypes.number,
      width: PropTypes.number,
    }),
    viewportOptions: PropTypes.shape({
      expand: PropTypes.bool,
      minHeight: PropTypes.number,
      offsetBottom: PropTypes.oneOfType([PropTypes.bool, PropTypes.number]),
      offsetTop: PropTypes.bool,
    }),
  };

  static defaultProps = {
    as: 'div',
    responsive: false,
  };

  render() {
    const {
      inheritedAttributes,
      inheritedClasses,
      inheritedStyle,
      unhandledProps,
    } = this.getInheritedProps(this.props);

    const {
      children,
      className,
      responsive,
      viewportOptions,
      ...rest
    } = unhandledProps;

    const classes = classnames(
      className,
      inheritedClasses,
      CoverContainer.meta.ukClass,
    );

    const viewportComponentOptions = getOptionsString(viewportOptions);

    const responsiveProps = {
      height: get(responsive, 'height', 600),
      width: get(responsive, 'width', 800),
    };

    const Element = getElementType(CoverContainer, this.props);
    return (
      <Element
        {...rest}
        className={classes || undefined}
        data-uk-height-viewport={viewportComponentOptions}
        style={inheritedStyle}
        {...inheritedAttributes}
      >
        {responsive && <canvas {...responsiveProps} />}
        {children}
      </Element>
    );
  }
}
