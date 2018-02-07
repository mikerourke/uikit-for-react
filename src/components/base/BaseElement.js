import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import { getElementType, HTML } from '../../lib';
import BlockElement from './BlockElement';
import InlineElement from './InlineElement';

const asPropType = PropTypes.oneOfType([
  PropTypes.oneOf(HTML.ALL_ELEMENTS),
  PropTypes.element,
  PropTypes.func,
]);

export default class BaseElement extends React.Component {
  static displayName = 'BaseElement';

  static propTypes = {
    ...BlockElement.propTypes,
    ...InlineElement.propTypes,
    as: asPropType.isRequired,
  };

  static defaultProps = {
    ...BlockElement.defaultProps,
    ...InlineElement.defaultProps,
  };

  static getInheritedProps(props) {
    const {
      inheritedAttributes: blockAttributes,
      inheritedClasses: blockClasses,
      inheritedStyle: blockStyle,
      unhandledProps: blockUnhandledProps,
    } = BlockElement.getInheritedProps(props);

    const {
      inheritedAttributes: inlineAttributes,
      inheritedClasses: inlineClasses,
      inheritedStyle: inlineStyle,
      unhandledProps: inlineUnhandledProps,
    } = InlineElement.getInheritedProps(blockUnhandledProps);

    return {
      inheritedAttributes: { ...blockAttributes, ...inlineAttributes },
      inheritedClasses: classnames(blockClasses, inlineClasses),
      inheritedStyle: { ...blockStyle, ...inlineStyle },
      unhandledProps: inlineUnhandledProps,
    };
  }

  constructor() {
    super();
    this.ref = null;
  }

  render() {
    const {
      inheritedAttributes,
      inheritedClasses,
      inheritedStyle,
      unhandledProps,
    } = BaseElement.getInheritedProps(this.props);

    const { as, className, ...rest } = unhandledProps;
    const classes = classnames(className, inheritedClasses);

    const Element = getElementType(BaseElement, as);
    return (
      <Element
        {...rest}
        className={classes || undefined}
        ref={element => (this.ref = element)}
        style={inheritedStyle}
        {...inheritedAttributes}
      >
        {this.props.children}
      </Element>
    );
  }
}
