import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import { get, pull } from 'lodash';
import { getElementType, HTML } from '../../lib';
import BlockElement from './BlockElement';
import InlineElement from './InlineElement';

export default class EveryElement extends React.Component {
  static displayName = 'EveryElement';

  static propTypes = {
    ...BlockElement.propTypes,
    ...InlineElement.propTypes,
  };

  static defaultProps = {
    ...BlockElement.defaultProps,
    ...InlineElement.defaultProps,
  };

  static asPropType = PropTypes.oneOfType([
    PropTypes.oneOf(HTML.ALL_ELEMENTS),
    PropTypes.element,
    PropTypes.func,
  ]);

  static getInheritedProps(props) {
    const as = get(props, 'as');
    const isBlockElement =
      HTML.BLOCK_ELEMENTS.includes(as) || as instanceof BlockElement;
    return isBlockElement
      ? BlockElement.getInheritedProps
      : InlineElement.getInheritedProps;
  }

  constructor() {
    super();
    this.ref = null;
  }

  render() {
    const inlinePropNames = Object.keys(InlineElement.defaultProps);
    const thisPropNames = Object.keys(this.props);
    const actualInlineProps = pull(thisPropNames, inlinePropNames);
    console.log(actualInlineProps);

    const {
      inheritedAttributes,
      inheritedClasses,
      inheritedStyle,
      unhandledProps = {},
    } = EveryElement.getInheritedProps(this.props);

    const { children, className = '', ...rest } = unhandledProps;
    const classes = classnames(className, inheritedClasses);
    const Element = getElementType(EveryElement, this.props);
    return (
      <Element
        {...rest}
        className={classes}
        ref={element => (this.ref = element)}
        style={inheritedStyle}
        {...inheritedAttributes}
      >
        {children}
      </Element>
    );
  }
}
