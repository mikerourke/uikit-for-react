import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import { compose } from 'recompose';
import { get } from 'lodash';
import {
  buildClassName,
  buildObjectOrValueClassNames, commonPropTypes,
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
    alignItems: PropTypes.oneOf(UIK.FLEX_VERTICAL_MODIFIERS),

    /** HTML element to use for the component. */
    as: PropTypes.oneOf(HTML.BLOCK_ELEMENTS),

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
      PropTypes.oneOf(UIK.FLEX_HORIZONTAL_MODIFIERS),
      PropTypes.shape({
        around: PropTypes.oneOf(UIK.BREAKPOINTS),
        between: PropTypes.oneOf(UIK.BREAKPOINTS),
        left: PropTypes.oneOf(UIK.BREAKPOINTS),
        center: PropTypes.oneOf(UIK.BREAKPOINTS),
        right: PropTypes.oneOf(UIK.BREAKPOINTS),
      }),
    ]),

    margin: commonPropTypes.margin,
    padding: commonPropTypes.padding,

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
      buildClassName('flex', alignItems),
      buildClassName('flex', get(direction, 'as'), (isReverse ? 'reverse' : '')),
      buildClassName('flex', 'inline', inline),
      buildObjectOrValueClassNames('flex', justifyContent),
      buildClassName('flex', get(wrap, 'type')),
      buildClassName('flex', get(wrap, 'alignment')),
      buildObjectOrValueClassNames('margin', margin),
      buildObjectOrValueClassNames('padding', padding),
    );

    const Element = getElementType(Flex, as, rest);
    return (
      <Element
        {...rest}
        className={classes}
      >
        {children}
      </Element>
    );
  }
}

export default Flex;
