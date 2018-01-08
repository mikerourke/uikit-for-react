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

    /** Create bold text. */
    bold: PropTypes.bool,

    /** Contents to display in the element. */
    children: PropTypes.node.isRequired,

    /** Additional classes to apply to element. */
    className: PropTypes.string,

    /** Indicate danger. */
    danger: PropTypes.bool,

    /** Align text horizontally to a specific location or specify breakpoints. */
    horizontalAlign: PropTypes.oneOfType([
      PropTypes.oneOf([...UIK.HORIZONTAL_POSITIONS, 'justify']),
      PropTypes.shape({
        left: PropTypes.oneOf(UIK.BREAKPOINTS),
        center: PropTypes.oneOf(UIK.BREAKPOINTS),
        right: PropTypes.oneOf(UIK.BREAKPOINTS),
      }),
    ]),

    /** Increase the font size. */
    large: PropTypes.bool,

    /** Highlights text, for example in article subtitles. */
    lead: PropTypes.bool,

    /** Apply styling to indicate that the text contains metadata a paragraph. */
    meta: PropTypes.bool,

    /** Mute your text. */
    muted: PropTypes.bool,

    /** Emphasize additional text information. */
    primary: PropTypes.bool,

    /** Decrease the font size. */
    small: PropTypes.bool,

    /** Indicate success. */
    success: PropTypes.bool,

    /** Makes the text uppercase, lowercase, or title case. */
    transform: PropTypes.oneOf(['capitalize', 'lowercase', 'uppercase']),

    /** Vertically align text to an object. */
    verticalAlign: PropTypes.oneOf(['baseline', 'top', 'middle', 'bottom']),

    /** Indicate a warning. */
    warning: PropTypes.bool,

    /** Specify a wrapping option (break, nowrap, or truncate). */
    wrapping: PropTypes.oneOf(['break', 'nowrap', 'truncate']),
  };

  static defaultProps = {
    as: 'div',
    className: '',
  };

  render() {
    const {
      as,
      bold,
      children,
      className,
      danger,
      horizontalAlign,
      large,
      lead,
      meta,
      muted,
      primary,
      small,
      success,
      transform,
      verticalAlign,
      warning,
      wrapping,
      ...rest
    } = this.props;

    const classes = classnames(
      className,
      buildObjectOrValueClassNames(Text.meta.ukClass, horizontalAlign),
      buildClassName(Text.meta.ukClass, transform),
      buildClassName(Text.meta.ukClass, verticalAlign),
      buildClassName(Text.meta.ukClass, wrapping),
      {
        [buildClassName(Text.meta.ukClass, 'bold')]: (bold),
        [buildClassName(Text.meta.ukClass, 'danger')]: (danger),
        [buildClassName(Text.meta.ukClass, 'large')]: (large),
        [buildClassName(Text.meta.ukClass, 'lead')]: (lead),
        [buildClassName(Text.meta.ukClass, 'meta')]: (meta),
        [buildClassName(Text.meta.ukClass, 'muted')]: (muted),
        [buildClassName(Text.meta.ukClass, 'primary')]: (primary),
        [buildClassName(Text.meta.ukClass, 'small')]: (small),
        [buildClassName(Text.meta.ukClass, 'success')]: (success),
        [buildClassName(Text.meta.ukClass, 'warning')]: (warning),
      },
    );

    const Element = getElementType(Text, as, rest);
    return (
      <Element
        {...rest}
        className={classes || undefined}
      >
        {children}
      </Element>
    );
  }
}

export default Text;
