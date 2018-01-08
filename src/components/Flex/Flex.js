import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import { get } from 'lodash';
import {
  buildClassName,
  buildObjectOrValueClassNames,
  commonPropTypes,
  getElementType,
  HTML,
  UIK,
} from '../../lib';

class Flex extends React.Component {
  static meta = {
    name: 'Flex',
    ukClass: 'uk-flex',
  };

  static propTypes = {
    /**
     * Define the vertical alignment of flex items. By default, flex items fill the height of their
     *    container.
     */
    alignItems: PropTypes.oneOf(UIK.FLEX_VERTICAL_MODIFIERS),

    /** HTML element to use for the component. */
    as: PropTypes.oneOf(HTML.BLOCK_ELEMENTS),

    /** Contents to display in the element. */
    children: PropTypes.node.isRequired,

    /** Additional classes to apply to element. */
    className: PropTypes.string,

    /**
     * Define the axis that flex items are placed on and their direction. By default, items run
     *    horizontally from left to right.
     */
    direction: PropTypes.shape({
      as: PropTypes.oneOf(['column', 'row']),
      reverse: PropTypes.bool,
    }),

    /** Create the flex container and behave like an inline element. */
    inline: PropTypes.bool,

    /**
     * Defines the horizontal alignment of flex items and distribute the space between them.
     *    Optionally specify an alignment for each breakpoint.
     */
    justifyContent: PropTypes.oneOfType([
      PropTypes.oneOf(UIK.FLEX_HORIZONTAL_MODIFIERS),
      commonPropTypes.getForBreakpoints(PropTypes.oneOf(UIK.FLEX_HORIZONTAL_MODIFIERS)),
    ]),

    /** Options for adding spacing between elements. */
    margin: commonPropTypes.margin,

    /** Options for adding spacing between elements and their content. */
    padding: commonPropTypes.padding,

    /**
     * By default, flex items are fit into one line and run from left to right. Change these to
     *    modify the behavior of wrapping flex items.
     */
    wrap: PropTypes.shape({
      type: PropTypes.oneOf(['nowrap', 'reverse', 'wrap']),
      alignment: PropTypes.oneOf(UIK.FLEX_VERTICAL_MODIFIERS),
    }),
  };

  static defaultProps = {
    as: 'div',
    className: '',
  };

  render() {
    const {
      alignItems,
      as,
      children,
      className,
      direction,
      inline,
      justifyContent,
      margin,
      padding,
      wrap,
      ...rest
    } = this.props;

    const isReverse = get(direction, 'reverse', false);

    const classes = classnames(
      className,
      Flex.meta.ukClass,
      buildClassName(Flex.meta.ukClass, alignItems),
      buildClassName(Flex.meta.ukClass, get(direction, 'as'), (isReverse ? 'reverse' : '')),
      buildObjectOrValueClassNames(Flex.meta.ukClass, justifyContent),
      buildClassName(Flex.meta.ukClass, get(wrap, 'type')),
      buildClassName(Flex.meta.ukClass, get(wrap, 'alignment')),
      buildObjectOrValueClassNames('margin', margin),
      buildObjectOrValueClassNames('padding', padding),
      {
        [buildClassName(Flex.meta.ukClass, 'inline')]: (inline),
      },
    );

    const Element = getElementType(Flex, as, rest);
    return (
      <Element
        {...rest}
        className={classes || undefined}
      >
        {children}
      </Element>
    );
  }
}

export default Flex;
