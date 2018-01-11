import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import { get } from 'lodash';
import {
  buildClassName,
  buildMarginAttributeOptions,
  buildObjectOrValueClassNames,
  buildStyles,
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
    alignItems: PropTypes.oneOf(UIK.FLEX_VERTICAL_MODIFIERS),
    as: PropTypes.oneOf(HTML.BLOCK_ELEMENTS),
    background: commonPropTypes.background,
    children: PropTypes.node.isRequired,
    childWidth: PropTypes.oneOfType([
      PropTypes.oneOf(UIK.CHILD_WIDTHS),
      commonPropTypes.getForBreakpoints(PropTypes.oneOf(UIK.CHILD_WIDTHS)),
    ]),
    className: PropTypes.string,
    direction: PropTypes.shape({
      as: PropTypes.oneOf(['column', 'row']),
      reverse: PropTypes.bool,
    }),
    dynamic: PropTypes.bool,
    firstColumn: PropTypes.string,
    inline: PropTypes.bool,
    justifyContent: PropTypes.oneOfType([
      PropTypes.oneOf(UIK.FLEX_HORIZONTAL_MODIFIERS),
      commonPropTypes.getForBreakpoints(PropTypes.oneOf(UIK.FLEX_HORIZONTAL_MODIFIERS)),
    ]),
    margin: commonPropTypes.margin,
    nextRow: PropTypes.shape({
      spacing: PropTypes.oneOf(UIK.SPACING_MODIFIERS),
      location: PropTypes.oneOf(UIK.LOCATIONS),
    }),
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
      background,
      children,
      childWidth,
      className,
      direction,
      dynamic,
      firstColumn,
      inline,
      justifyContent,
      margin,
      nextRow,
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
      buildObjectOrValueClassNames('background', background),
      buildObjectOrValueClassNames('child', 'width', childWidth),
      buildObjectOrValueClassNames(Flex.meta.ukClass, justifyContent),
      buildObjectOrValueClassNames('margin', margin),
      buildObjectOrValueClassNames('padding', padding),
      buildClassName(Flex.meta.ukClass, get(wrap, 'type')),
      buildClassName(Flex.meta.ukClass, get(wrap, 'alignment')),
      {
        [buildClassName(Flex.meta.ukClass, 'inline')]: (inline),
      },
    );
    const styles = buildStyles(this.props);

    const Element = getElementType(Flex, as, rest);
    return (
      <Element
        {...rest}
        className={classes || undefined}
        style={styles}
        {...buildMarginAttributeOptions(dynamic, firstColumn, nextRow)}
      >
        {children}
      </Element>
    );
  }
}

export default Flex;
