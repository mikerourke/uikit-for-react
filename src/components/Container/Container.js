import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
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

class Container extends React.Component {
  static meta = {
    name: 'Container',
    ukClass: 'uk-container',
  };

  static propTypes = {
    /** HTML element to use for the component. */
    as: PropTypes.oneOf(HTML.BLOCK_ELEMENTS),

    /** Options to apply to the background of the component. */
    background: commonPropTypes.background,

    /** Contents to display in the element. */
    children: PropTypes.node.isRequired,

    /** Additional classes to apply to element. */
    className: PropTypes.string,

    /** Indicates that the component has Margin attribute properties. */
    dynamic: PropTypes.bool,

    /** Class to add to the first element in each row. */
    firstColumn: PropTypes.string,

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

    /** Size of the container. */
    size: PropTypes.oneOf(['expand', 'large', 'small']),
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
      margin,
      nextRow,
      padding,
      size,
      ...rest
    } = this.props;

    const classes = classnames(
      className,
      Container.meta.ukClass,
      buildObjectOrValueClassNames('background', background),
      buildObjectOrValueClassNames('margin', margin),
      buildObjectOrValueClassNames('padding', padding),
      buildClassName(Container.meta.ukClass, size),
    );
    const styles = buildStyles(this.props);

    const Element = getElementType(Container, as, rest);
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

export default Container;
