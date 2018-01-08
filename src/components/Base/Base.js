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

    /** Options to apply to the margin component attribute. */
    childMargins: commonPropTypes.childMargins,

    /** Contents to display in the element. */
    children: PropTypes.node,

    /** Additional classes to apply to element. */
    className: PropTypes.string,

    /** Set height options for the element. */
    height: PropTypes.oneOf(['full', ...without(UIK.SIZES, 'xlarge')]),

    /** Options for adding spacing between elements. */
    margin: commonPropTypes.margin,

    /** Options for adding spacing between elements and their content. */
    padding: commonPropTypes.padding,

    /** Apply a width based on the size of the parent container. */
    width: commonPropTypes.width,
  };

  static defaultProps = {
    as: 'div',
    className: '',
  };

  render() {
    const {
      as,
      childMargins,
      children,
      className,
      height,
      margin,
      padding,
      width,
      ...rest
    } = this.props;

    const classes = classnames(
      className,
      buildClassName((height === 'full') ? ['height', '1', '1'] : ['height', height]),
      buildObjectOrValueClassNames('margin', margin),
      buildObjectOrValueClassNames('padding', padding),
      buildObjectOrValueClassNames('width', width),
    );

    const Element = getElementType(Base, as, rest);
    return (
      <Element
        {...rest}
        className={classes || undefined}
        {...buildMarginAttributeOptions(childMargins)}
      >
        {children}
      </Element>
    );
  }
}

export default Base;
