import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import { get } from 'lodash';
import {
  BREAKPOINTS,
  FLEX_HORIZONTAL_MODIFIERS,
  FLEX_VERTICAL_MODIFIERS,
  HTML_BLOCK_ELEMENTS,
} from '../constants';
import {
  buildClassName,
  buildObjectOrValueClassNames,
  getElementType,
} from '../../lib';
import Root from '../Root';

class Flex extends Root {
  static meta = {
    name: 'Flex',
    ukClass: 'uk-flex',
  };

  static propTypes = {
    alignItems: PropTypes.oneOf(FLEX_VERTICAL_MODIFIERS),

    /** HTML element to use for the component. */
    as: PropTypes.oneOf(HTML_BLOCK_ELEMENTS),

    /** Contents to display in the element. */
    children: PropTypes.node.isRequired,

    /** Additional classes to apply to element. */
    className: PropTypes.string,

    direction: PropTypes.shape({
      as: PropTypes.oneOf(['column', 'row']),
      reverse: PropTypes.bool,
    }),

    inline: PropTypes.bool,

    justifyContent: PropTypes.oneOfType([
      PropTypes.oneOf(FLEX_HORIZONTAL_MODIFIERS),
      PropTypes.shape({
        around: PropTypes.oneOf(BREAKPOINTS),
        between: PropTypes.oneOf(BREAKPOINTS),
        left: PropTypes.oneOf(BREAKPOINTS),
        center: PropTypes.oneOf(BREAKPOINTS),
        right: PropTypes.oneOf(BREAKPOINTS),
      }),
    ]),

    wrap: PropTypes.shape({
      type: PropTypes.oneOf(['nowrap', 'reverse', 'wrap']),
      alignment: PropTypes.oneOf(FLEX_VERTICAL_MODIFIERS),
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
      wrap,
      ...rest
    } = this.props;

    const isReverse = get(direction, 'reverse', false);

    const classes = classnames(
      className,
      Flex.meta.ukClass,
      buildClassName('flex', alignItems),
      buildClassName('flex', get(direction, 'as'), (isReverse ? 'reverse' : '')),
      buildClassName('flex', 'inline', inline),
      buildObjectOrValueClassNames('flex', justifyContent),
      buildClassName('flex', get(wrap, 'type')),
      buildClassName('flex', get(wrap, 'alignment')),
      this.getRootClassNames(),
    );

    const Element = getElementType(Flex, as);
    return (
      <Element
        {...this.getValidProps(rest)}
        className={classes}
      >
        {children}
      </Element>
    );
  }
}

export default Flex;
