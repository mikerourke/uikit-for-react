import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import { buildClassName, getElementType, HTML, UIK } from '../../../lib';

export default class Hidden extends React.Component {
  static displayName = 'Hidden';

  static propTypes = {
    as: PropTypes.oneOfType([
      PropTypes.oneOf(HTML.ALL_ELEMENTS),
      PropTypes.element,
      PropTypes.func,
    ]),
    breakpoint: PropTypes.oneOf(UIK.BREAKPOINTS),
    children: PropTypes.node.isRequired,
    className: PropTypes.string,
    hide: PropTypes.bool,
    noTouchOnly: PropTypes.bool,
    touchOnly: PropTypes.bool,
    whenHovered: PropTypes.oneOf(['hidden', 'invisible']),
  };

  static defaultProps = {
    as: 'div',
    breakpoint: null,
    className: null,
    hide: false,
    noTouchOnly: false,
    touchOnly: false,
    whenHovered: null,
  };

  render() {
    const {
      breakpoint,
      children,
      className,
      hide,
      noTouchOnly,
      touchOnly,
      whenHovered,
      ...rest
    } = this.props;

    const ukClass = 'uk-hidden';
    const classes = classnames(
      className,
      buildClassName(whenHovered, 'hover'),
      buildClassName(ukClass, breakpoint),
      {
        [buildClassName(ukClass)]: hide,
        [buildClassName(ukClass, 'notouch')]: noTouchOnly,
        [buildClassName(ukClass, 'touch')]: touchOnly,
      },
    );

    const Element = getElementType(Hidden, this.props);
    return (
      <Element
        {...rest}
        className={classes}
        hidden={hide || undefined}
      >
        {children}
      </Element>
    );
  }
}
