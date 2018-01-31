import React from 'react';
import PropTypes from 'prop-types';
import CustomPropTypes from 'airbnb-prop-types';
import classnames from 'classnames';
import { get, trim } from 'lodash';
import {
  buildClassName,
  childMatchesType,
  getElementType,
  HTML,
  UIK,
} from '../../lib';
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
    dropcap: CustomPropTypes.and([
      PropTypes.bool,
      props => {
        if (props.children && !childMatchesType('p')) {
          return new Error(
            'You can only specify the dropcap prop for a <p> element.',
          );
        }
        return null;
      },
    ]),
  };

  static asPropType = PropTypes.oneOfType([
    PropTypes.oneOf(HTML.INLINE_ELEMENTS),
    PropTypes.element,
    PropTypes.func,
  ]);

  static defaultProps = {
    ...BaseElement.defaultProps,
    columnSpan: false,
    dropcap: false,
  };

  static propNames = ['align', 'columnSpan', 'dropcap'];

  static getInheritedProps(props) {
    const {
      baseAttributes,
      baseClasses,
      baseStyle,
      unhandledProps,
    } = BaseElement.getBaseProps(props);

    const { align, columnSpan, dropcap, ...rest } = unhandledProps;

    const classes = classnames(
      baseClasses,
      buildClassName('align', align),
      buildClassName('align', get(align, 'atSm'), '@s'),
      buildClassName('align', get(align, 'atMd'), '@m'),
      buildClassName('align', get(align, 'atLg'), '@l'),
      buildClassName('align', get(align, 'atXl'), '@xl'),
      {
        [buildClassName('column', 'span')]: columnSpan,
        [buildClassName('dropcap')]: dropcap,
      },
    );

    return {
      inheritedAttributes: baseAttributes,
      inheritedClasses: trim(classes),
      inheritedStyle: baseStyle,
      unhandledProps: rest,
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
    } = InlineElement.getInheritedProps(this.props);

    const { as, children, className = '', ...rest } = unhandledProps;
    const classes = classnames(className, inheritedClasses);
    const Element = getElementType(InlineElement, this.props);
    return (
      <Element
        {...rest}
        className={classes || undefined}
        ref={element => (this.ref = element)}
        style={inheritedStyle}
        {...inheritedAttributes}
      >
        {children}
      </Element>
    );
  }
}
