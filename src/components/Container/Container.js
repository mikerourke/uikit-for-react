import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import { get, isNil } from 'lodash';
import {
  buildClassName,
  buildMarginAttributeOptions,
  buildObjectOrValueClassNames,
  buildStyles,
  commonPropTypes,
  getElementType,
  getOptionsString,
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

    /** Options to apply to the margin component attribute. */
    childMargins: commonPropTypes.childMargins,

    /** Contents to display in the element. */
    children: PropTypes.node.isRequired,

    /** Additional classes to apply to element. */
    className: PropTypes.string,

    /** Options for adding spacing between elements. */
    margin: commonPropTypes.margin,

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
      childMargins,
      children,
      className,
      margin,
      padding,
      size,
      ...rest
    } = this.props;

    const classes = classnames(
      className,
      Container.meta.ukClass,
      buildObjectOrValueClassNames('background', background),
      buildClassName('container', size),
      buildObjectOrValueClassNames('margin', margin),
      buildObjectOrValueClassNames('padding', padding),
    );
    const styles = buildStyles(this.props);

    const Element = getElementType(Container, as, rest);
    return (
      <Element
        {...rest}
        className={classes || undefined}
        style={styles}
        {...buildMarginAttributeOptions(childMargins)}
      >
        {children}
      </Element>
    );
  }
}

export default Container;
