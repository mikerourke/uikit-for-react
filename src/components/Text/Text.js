import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import {
  buildClassName,
  buildObjectOrValueClassNames,
  getElementType,
  HTML,
  UIK,
} from '../../lib';

class Text extends React.Component {
  static meta = {
    name: 'Text',
    ukClass: 'uk-text',
  };

  static propTypes = {
    /** HTML element to use for the component. */
    as: PropTypes.oneOf([...HTML.TEXT_ELEMENTS, ...HTML.BLOCK_ELEMENTS]),

    bold: PropTypes.bool,

    /** Contents to display in the element. */
    children: PropTypes.node.isRequired,

    /** Additional classes to apply to element. */
    className: PropTypes.string,

    color: PropTypes.oneOf(['muted', 'primary', 'success', 'warning', 'danger']),

    horizontalAlign: PropTypes.oneOfType([
      PropTypes.oneOf([...UIK.HORIZONTAL_POSITIONS, 'justify']),
      PropTypes.shape({
        left: PropTypes.oneOf(UIK.BREAKPOINTS),
        center: PropTypes.oneOf(UIK.BREAKPOINTS),
        right: PropTypes.oneOf(UIK.BREAKPOINTS),
      }),
    ]),

    large: PropTypes.bool,

    lead: PropTypes.bool,

    meta: PropTypes.bool,

    small: PropTypes.bool,

    transform: PropTypes.oneOf(['capitalize', 'lowercase', 'uppercase']),

    verticalAlign: PropTypes.oneOf(['baseline', 'top', 'middle', 'bottom']),

    wrapping: PropTypes.oneOf(['break', 'nowrap', 'truncate']),
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
      bold,
      color,
      horizontalAlign,
      large,
      lead,
      meta,
      small,
      transform,
      verticalAlign,
      wrapping,
      ...rest
    } = this.props;

    const classes = classnames(
      className,
      buildClassName('text', 'bold', bold),
      buildClassName('text', color),
      buildObjectOrValueClassNames('text', horizontalAlign),
      buildClassName('text', 'large', large),
      buildClassName('text', 'lead', lead),
      buildClassName('text', 'meta', meta),
      buildClassName('text', 'small', small),
      buildClassName('text', transform),
      buildClassName('text', verticalAlign),
      buildClassName('text', wrapping),
    );

    const Element = getElementType(Text, as, rest);
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

export default Text;
