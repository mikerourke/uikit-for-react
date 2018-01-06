import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import { without } from 'lodash';
import {
  buildClassName,
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

    children: PropTypes.node,

    /** Additional classes to apply to element. */
    className: PropTypes.string,

    height: PropTypes.oneOf(['full', ...without(UIK.SIZES, 'xlarge')]),
    width: commonPropTypes.width,
  };

  static defaultProps = {
    as: 'div',
    className: '',
  };

  render() {
    const {
      as,
      children,
      className,
      height,
      width,
      ...rest
    } = this.props;

    const classes = classnames(
      className,
      buildClassName((height === 'full') ? ['height', '1', '1'] : ['height', height]),
      buildObjectOrValueClassNames('width', width),
    );

    const Element = getElementType(Base, as, rest);
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

export default Base;
