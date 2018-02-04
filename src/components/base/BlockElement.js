import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import { get, trim } from 'lodash';
import {
  buildClassName,
  getElementType,
  getOptionsString,
  HTML,
  UIK,
} from '../../lib';
import RootElement from './RootElement';

export default class BlockElement extends React.Component {
  static displayName = 'BlockElement';

  static propTypes = {
    ...RootElement.propTypes,
    childWidth: PropTypes.oneOfType([
      PropTypes.oneOf(UIK.CHILD_WIDTHS),
      PropTypes.shape({
        default: PropTypes.oneOf(UIK.CHILD_WIDTHS),
        atSm: PropTypes.oneOf(UIK.CHILD_WIDTHS),
        atMd: PropTypes.oneOf(UIK.CHILD_WIDTHS),
        atLg: PropTypes.oneOf(UIK.CHILD_WIDTHS),
        atXl: PropTypes.oneOf(UIK.CHILD_WIDTHS),
      }),
    ]),
    column: PropTypes.oneOfType([
      PropTypes.oneOf(UIK.BASE_WIDTHS),
      PropTypes.shape({
        atSm: PropTypes.oneOf(UIK.BASE_WIDTHS),
        atMd: PropTypes.oneOf(UIK.BASE_WIDTHS),
        atLg: PropTypes.oneOf(UIK.BASE_WIDTHS),
        atXl: PropTypes.oneOf(UIK.BASE_WIDTHS),
        divider: PropTypes.bool,
      }),
      PropTypes.shape({
        width: PropTypes.oneOf(UIK.BASE_WIDTHS),
        divider: PropTypes.bool,
      }),
    ]),
    dynamic: PropTypes.bool,
    firstColumn: PropTypes.string,
    nextRow: PropTypes.shape({
      spacing: PropTypes.oneOf(UIK.SPACING_MODIFIERS),
      location: PropTypes.oneOf(UIK.LOCATIONS),
    }),
    padding: PropTypes.oneOfType([
      PropTypes.bool,
      PropTypes.oneOf(['large', 'small', 'remove']),
      PropTypes.shape({
        remove: PropTypes.oneOf([...UIK.AREAS, ...UIK.LOCATIONS]),
        size: PropTypes.oneOf(['large', 'small']),
      }),
    ]),
    scrollspyNav: PropTypes.shape({
      clsActive: PropTypes.string,
      offset: PropTypes.number,
      onItemActive: PropTypes.func,
      overflow: PropTypes.bool,
      scroll: PropTypes.bool,
    }),
    textAlign: PropTypes.oneOfType([
      PropTypes.oneOf([...UIK.HORIZONTAL_POSITIONS, 'justify']),
      PropTypes.shape({
        atSm: PropTypes.oneOf(UIK.HORIZONTAL_POSITIONS),
        atMd: PropTypes.oneOf(UIK.HORIZONTAL_POSITIONS),
        atLg: PropTypes.oneOf(UIK.HORIZONTAL_POSITIONS),
        atXl: PropTypes.oneOf(UIK.HORIZONTAL_POSITIONS),
      }),
    ]),
    transitionToggle: PropTypes.bool,
    viewport: PropTypes.oneOfType([
      PropTypes.bool,
      PropTypes.shape({
        expand: PropTypes.bool,
        minHeight: PropTypes.number,
        offsetBottom: PropTypes.oneOfType([PropTypes.bool, PropTypes.number]),
        offsetTop: PropTypes.bool,
      }),
    ]),
    visibleToggle: PropTypes.bool,
  };

  static asPropType = PropTypes.oneOfType([
    PropTypes.oneOf(HTML.BLOCK_ELEMENTS),
    PropTypes.element,
    PropTypes.func,
  ]);

  static defaultProps = {
    ...RootElement.defaultProps,
    dynamic: false,
    padding: false,
    transitionToggle: false,
    visibleToggle: false,
  };

  static getInheritedProps(props) {
    const {
      baseAttributes,
      baseClasses,
      baseStyle,
      unhandledProps,
    } = RootElement.getRootProps(props);

    const {
      childWidth,
      column,
      dynamic,
      firstColumn,
      nextRow,
      padding,
      scrollspyNav,
      textAlign,
      transitionToggle,
      viewport,
      visibleToggle,
      ...rest
    } = unhandledProps;

    const classes = classnames(
      baseClasses,
      buildClassName('child', 'width', childWidth),
      buildClassName('child', 'width', get(childWidth, 'default')),
      buildClassName('child', 'width', get(childWidth, 'atSm'), '@s'),
      buildClassName('child', 'width', get(childWidth, 'atMd'), '@m'),
      buildClassName('child', 'width', get(childWidth, 'atLg'), '@l'),
      buildClassName('child', 'width', get(childWidth, 'atXl'), '@xl'),
      buildClassName('column', column),
      buildClassName('column', get(column, 'width')),
      buildClassName('column', get(column, 'atSm'), '@s'),
      buildClassName('column', get(column, 'atMd'), '@m'),
      buildClassName('column', get(column, 'atLg'), '@l'),
      buildClassName('column', get(column, 'atXl'), '@xl'),
      buildClassName('padding', padding),
      buildClassName('padding', get(padding, 'size')),
      buildClassName('padding', 'remove', get(padding, 'remove')),
      buildClassName('text', textAlign),
      buildClassName('text', get(textAlign, 'atSm'), '@s'),
      buildClassName('text', get(textAlign, 'atMd'), '@m'),
      buildClassName('text', get(textAlign, 'atLg'), '@l'),
      buildClassName('text', get(textAlign, 'atXl'), '@xl'),
      {
        [buildClassName('column', 'divider')]: get(column, 'divider', false),
        [buildClassName('transition', 'toggle')]: transitionToggle,
        [buildClassName('visible', 'toggle')]: visibleToggle,
      },
    );

    const hasMarginAttribute = dynamic || firstColumn || nextRow;

    const marginComponentOptions = getOptionsString({
      firstColumn: firstColumn || 'uk-first-column',
      margin: buildClassName(
        'margin',
        get(nextRow, 'spacing', 'small'),
        get(nextRow, 'location', 'top'),
      ),
    });

    const scrollspyNavOptions = getOptionsString({
      cls: get(scrollspyNav, 'clsActive'),
      offset: get(scrollspyNav, 'offset'),
      overflow: get(scrollspyNav, 'overflow'),
      scroll: get(scrollspyNav, 'scroll'),
    });

    return {
      inheritedAttributes: {
        ...baseAttributes,
        'data-uk-margin': hasMarginAttribute
          ? marginComponentOptions
          : undefined,
        'data-uk-scrollspy-nav': scrollspyNav ? scrollspyNavOptions : undefined,
        'data-uk-height-viewport': viewport
          ? getOptionsString(viewport)
          : undefined,
      },
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
    } = BlockElement.getInheritedProps(this.props);

    const {
      as,
      children,
      className = '',
      transitionToggle,
      ...rest
    } = unhandledProps;

    const classes = classnames(className, inheritedClasses);
    const Element = getElementType(BlockElement, this.props);
    return (
      <Element
        {...rest}
        className={classes || undefined}
        style={inheritedStyle}
        ref={element => (this.ref = element)}
        tabIndex={transitionToggle ? 0 : undefined}
        {...inheritedAttributes}
      >
        {children}
      </Element>
    );
  }
}
