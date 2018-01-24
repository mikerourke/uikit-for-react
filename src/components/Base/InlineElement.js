import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import { get, trim } from 'lodash';
import { buildClassName, getElementType, HTML, UIK } from '../../lib';
import BaseElement from './BaseElement';

export default class InlineElement extends React.Component {
  static displayName = 'InlineElement';

  static propTypes = {
    ...BaseElement.propTypes,
    align: PropTypes.oneOfType([
      PropTypes.oneOf(UIK.HORIZONTAL_POSITIONS),
      PropTypes.shape({
        atSm: PropTypes.oneOf(UIK.HORIZONTAL_POSITIONS),
        atMd: PropTypes.oneOf(UIK.HORIZONTAL_POSITIONS),
        atLg: PropTypes.oneOf(UIK.HORIZONTAL_POSITIONS),
        atXl: PropTypes.oneOf(UIK.HORIZONTAL_POSITIONS),
      }),
    ]),
    columnSpan: PropTypes.bool,
  };

  static asPropType = PropTypes.oneOfType([
    PropTypes.oneOf(HTML.INLINE_ELEMENTS),
    PropTypes.element,
    PropTypes.func,
  ]);

  static defaultProps = {
    ...BaseElement.defaultProps,
    align: null,
    columnSpan: false,
  };

  static getInheritedProps(props) {
    const {
      baseAttributes,
      baseClasses,
      baseStyle,
      unhandledProps,
    } = BaseElement.getBaseProps(props);

    const { align, as, columnSpan, ...rest } = unhandledProps;

    const classes = classnames(
      baseClasses,
      buildClassName('align', align),
      buildClassName('align', get(align, 'atSm'), '@s'),
      buildClassName('align', get(align, 'atMd'), '@m'),
      buildClassName('align', get(align, 'atLg'), '@l'),
      buildClassName('align', get(align, 'atXl'), '@xl'),
      {
        [buildClassName('column', 'span')]: columnSpan,
      },
    );

    return {
      inheritedAttributes: baseAttributes,
      inheritedClasses: trim(classes),
      inheritedStyle: baseStyle,
      unhandledProps: rest,
    };
  }

  render() {
    const {
      inheritedAttributes,
      inheritedClasses,
      inheritedStyle,
      unhandledProps,
    } = InlineElement.getInheritedProps(this.props);

    const { children, className = '', ...rest } = unhandledProps;
    const classes = classnames(className, inheritedClasses);
    const Element = getElementType(InlineElement, this.props);
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
