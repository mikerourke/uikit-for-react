import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import { get } from 'lodash';
import { buildClassName, HTML, UIK } from '../../../lib/index';
import { EveryElement } from '../../base/index';

export default class Text extends React.Component {
  static displayName = 'Text';

  static propTypes = {
    ...EveryElement.propTypes,
    as: PropTypes.oneOfType([
      PropTypes.oneOf([...HTML.TEXT_ELEMENTS, ...HTML.BLOCK_ELEMENTS]),
      PropTypes.element,
      PropTypes.func,
    ]),
    bold: PropTypes.bool,
    children: PropTypes.node,
    className: PropTypes.string,
    danger: PropTypes.bool,
    horizontalAlign: PropTypes.oneOfType([
      PropTypes.oneOf([...UIK.HORIZONTAL_POSITIONS, 'justify']),
      PropTypes.shape({
        atSm: PropTypes.oneOf(UIK.HORIZONTAL_POSITIONS),
        atMd: PropTypes.oneOf(UIK.HORIZONTAL_POSITIONS),
        atLg: PropTypes.oneOf(UIK.HORIZONTAL_POSITIONS),
        atXl: PropTypes.oneOf(UIK.HORIZONTAL_POSITIONS),
      }),
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
    ...EveryElement.defaultProps,
    as: 'div',
    bold: false,
    children: null,
    className: null,
    danger: false,
    horizontalAlign: null,
    large: false,
    lead: false,
    meta: false,
    muted: false,
    primary: false,
    small: false,
    success: false,
    transform: null,
    verticalAlign: null,
    warning: false,
    wrapping: null,
  };

  render() {
    const {
      bold,
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

    const ukClass = 'uk-text';
    const classes = classnames(
      className,
      buildClassName(ukClass, horizontalAlign),
      buildClassName(ukClass, get(horizontalAlign, 'atSm'), '@s'),
      buildClassName(ukClass, get(horizontalAlign, 'atMd'), '@m'),
      buildClassName(ukClass, get(horizontalAlign, 'atLg'), '@l'),
      buildClassName(ukClass, get(horizontalAlign, 'atXl'), '@xl'),
      buildClassName(ukClass, transform),
      buildClassName(ukClass, verticalAlign),
      buildClassName(ukClass, wrapping),
      {
        [buildClassName(ukClass, 'bold')]: bold,
        [buildClassName(ukClass, 'danger')]: danger,
        [buildClassName(ukClass, 'large')]: large,
        [buildClassName(ukClass, 'lead')]: lead,
        [buildClassName(ukClass, 'meta')]: meta,
        [buildClassName(ukClass, 'muted')]: muted,
        [buildClassName(ukClass, 'primary')]: primary,
        [buildClassName(ukClass, 'small')]: small,
        [buildClassName(ukClass, 'success')]: success,
        [buildClassName(ukClass, 'warning')]: warning,
      },
    );

    return <EveryElement {...rest} className={classes || undefined} />;
  }
}
