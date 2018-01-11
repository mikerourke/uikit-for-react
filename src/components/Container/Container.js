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
    as: PropTypes.oneOf(HTML.BLOCK_ELEMENTS),
    background: commonPropTypes.background,
    children: PropTypes.node.isRequired,
    className: PropTypes.string,
    dynamic: PropTypes.bool,
    firstColumn: PropTypes.string,
    margin: commonPropTypes.margin,
    nextRow: PropTypes.shape({
      spacing: PropTypes.oneOf(UIK.SPACING_MODIFIERS),
      location: PropTypes.oneOf(UIK.LOCATIONS),
    }),
    padding: commonPropTypes.padding,
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
      justifyContent,
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
      buildObjectOrValueClassNames('flex', justifyContent),
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
