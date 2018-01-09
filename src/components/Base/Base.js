import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import { without } from 'lodash';
import {
  buildClassName,
  buildMarginAttributeOptions,
  buildObjectOrValueClassNames,
  commonPropTypes,
  getElementType,
  HTML,
  UIK,
} from '../../lib';

class Base extends React.Component {
  static propTypes = {
    /** HTML element to use for the component. */
    as: PropTypes.oneOf(HTML.ALL_ELEMENTS),

    /** Properties to apply to the background of the element. */
    background: commonPropTypes.background,

    /** Contents to display in the element. */
    children: PropTypes.node,

    /** Additional classes to apply to element. */
    className: PropTypes.string,

    /** Improve visibility of elements on a light or dark background. */
    inverse: PropTypes.oneOf(['dark', 'light']),

    /** Indicates that the component has Margin attribute properties. */
    dynamic: PropTypes.bool,

    /** Class to add to the first element in each row. */
    firstColumn: PropTypes.string,

    /** Set height options for the element. */
    height: PropTypes.oneOf(['full', ...without(UIK.SIZES, 'xlarge')]),

    /** Options for adding spacing between elements. */
    margin: commonPropTypes.margin,

    /**
     * Properties of items that break into the next row, typically to create margin to the
     *    previous row.
     */
    nextRow: PropTypes.shape({
      spacing: PropTypes.oneOf(UIK.SPACING_MODIFIERS),
      location: PropTypes.oneOf(UIK.LOCATIONS),
    }),

    /** Options for adding spacing between elements and their content. */
    padding: commonPropTypes.padding,

    /** Apply a width based on the size of the parent container. */
    width: PropTypes.oneOfType([
      PropTypes.oneOf(UIK.BASE_WIDTHS),
      commonPropTypes.getForBreakpoints(PropTypes.oneOf(UIK.BASE_WIDTHS)),
    ]),
  };

  static defaultProps = {
    as: 'div',
    className: '',
  };

  render() {
    const {
      as,
      background,
      children,
      className,
      dynamic,
      firstColumn,
      height,
      inverse,
      margin,
      nextRow,
      padding,
      width,
      ...rest
    } = this.props;

    const classes = classnames(
      className,
      buildObjectOrValueClassNames('background', background),
      buildClassName((height === 'full') ? ['height', '1', '1'] : ['height', height]),
      buildClassName(inverse),
      buildObjectOrValueClassNames('margin', margin),
      buildObjectOrValueClassNames('padding', padding),
      buildObjectOrValueClassNames('width', width),
    );

    const Element = getElementType(Base, as, rest);
    return (
      <Element
        {...rest}
        className={classes || undefined}
        {...buildMarginAttributeOptions(dynamic, firstColumn, nextRow)}
      >
        {children}
      </Element>
    );
  }
}

export default Base;
