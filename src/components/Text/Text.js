import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import {
  buildClassName,
  buildObjectOrValueClassNames,
  commonPropTypes,
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
    as: PropTypes.oneOf([...HTML.TEXT_ELEMENTS, ...HTML.BLOCK_ELEMENTS]),
    bold: PropTypes.bool,
    children: PropTypes.node.isRequired,
    className: PropTypes.string,
    danger: PropTypes.bool,
    horizontalAlign: PropTypes.oneOfType([
      PropTypes.oneOf([...UIK.HORIZONTAL_POSITIONS, 'justify']),
      commonPropTypes.getForBreakpoints(PropTypes.oneOf(UIK.HORIZONTAL_POSITIONS)),
    ]),
    large: PropTypes.bool,
    lead: PropTypes.bool,
    meta: PropTypes.bool,
    muted: PropTypes.bool,
    primary: PropTypes.bool,
    small: PropTypes.bool,
    success: PropTypes.bool,
    transform: PropTypes.oneOf(['capitalize', 'lowercase', 'uppercase']),
    verticalAlign: PropTypes.oneOf(['baseline', 'top', 'middle', 'bottom']),
    warning: PropTypes.bool,
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
