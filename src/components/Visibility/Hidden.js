import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import {
  buildClassName,
  getElementType,
  HTML,
  UIK,
} from '../../lib';

export default class Hidden extends React.Component {
  static meta = {
    name: 'Hidden',
    ukClass: 'uk-hidden',
  };

  static propTypes = {
    as: PropTypes.oneOfType([
      PropTypes.oneOf(HTML.ALL_ELEMENTS),
      PropTypes.node,
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

    const prefix = Hidden.meta.ukClass;
    const classes = classnames(
      className,
      buildClassName(whenHovered, 'hover'),
      buildClassName(prefix, breakpoint),
      {
        [buildClassName(prefix)]: (hide),
        [buildClassName(prefix, 'notouch')]: (noTouchOnly),
        [buildClassName(prefix, 'touch')]: (touchOnly),
      },
    );

    const Element = getElementType(Hidden, this.props);
    return (
      <Element
        {...rest}
        className={classes || undefined}
        hidden={hide || undefined}
      >
        {children}
      </Element>
    );
  }
}

