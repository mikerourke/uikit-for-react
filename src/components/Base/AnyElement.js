import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import { pull } from 'lodash';
import { getElementType, HTML } from '../../lib';
import BlockElement from './BlockElement';
import InlineElement from './InlineElement';

export default class AnyElement extends React.Component {
  static meta = {
    name: 'AnyElement',
  };

  static propTypes = {
    ...BlockElement.propTypes,
    ...InlineElement.propTypes,
  };

  static asPropType = PropTypes.oneOfType([
    PropTypes.oneOf(HTML.ALL_ELEMENTS),
    PropTypes.element,
    PropTypes.func,
  ]);

  render() {
    const { as = '' } = this.props;
    const isBlockElement =
      HTML.BLOCK_ELEMENTS.includes(as) || as instanceof BlockElement;
    const getInheritedProps = isBlockElement
      ? BlockElement.getElementProps
      : InlineElement.getElementProps;

    const inlinePropNames = Object.keys(InlineElement.defaultProps);
    const thisPropNames = Object.keys(this.props);
    const actualInlineProps = pull(thisPropNames, inlinePropNames);
    console.log(actualInlineProps);

    const {
      inheritedAttributes,
      inheritedClasses,
      inheritedStyle,
      unhandledProps,
    } = getInheritedProps(this.props);

    const { children, className = '', ...rest } = unhandledProps;

    const classes = classnames(className, inheritedClasses);

    const Element = getElementType(AnyElement, this.props);
    return (
      <Element
        {...rest}
        className={classes || undefined}
        style={inheritedStyle}
        {...inheritedAttributes}
      >
        {children}
      </Element>
    );
  }
}
