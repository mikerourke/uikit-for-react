import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import {
  buildBreakpointClasses,
  buildClassName,
  customPropTypes,
  HTML,
  UIK,
} from '../../../lib';
import Base from '../../base';

export default class Text extends React.Component {
  static displayName = 'Text';

  static propTypes = {
    ...Base.propTypes,
    align: PropTypes.oneOfType([
      PropTypes.oneOf(['justify']),
      customPropTypes.forBreakpoints(UIK.HORIZONTAL_POSITIONS),
    ]),
    as: customPropTypes.customOrStringElement(HTML.ALL_ELEMENTS),
    bold: PropTypes.bool,
    danger: PropTypes.bool,
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
    ...Base.defaultProps,
    as: 'div',
    bold: false,
    danger: false,
    large: false,
    lead: false,
    meta: false,
    muted: false,
    primary: false,
    small: false,
    success: false,
    warning: false,
  };

  render() {
    const {
      align,
      className,
      bold,
      danger,
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
      buildBreakpointClasses('text', align),
      buildClassName('text', transform),
      buildClassName('text', verticalAlign),
      buildClassName('text', wrapping),
      {
        'uk-text-bold': bold,
        'uk-text-danger': danger,
        'uk-text-large': large,
        'uk-text-lead': lead,
        'uk-text-meta': meta,
        'uk-text-muted': muted,
        'uk-text-primary': primary,
        'uk-text-small': small,
        'uk-text-success': success,
        'uk-text-warning': warning,
      },
    );

    return <Base {...rest} className={classes || undefined} component={Text} />;
  }
}
