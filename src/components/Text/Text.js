import React from 'react';
import classnames from 'classnames';
import omit from 'lodash/omit';
import { customPropTypes, HTML } from '../../lib';
import { propTypes, extrapolateClasses } from '../common/textProps';
import Base from '../Base';

export default class Text extends React.Component {
  static displayName = 'Text';

  static propTypes = {
    ...omit(Base.propTypes, 'text'),
    ...propTypes,
    as: customPropTypes.customOrStringElement(HTML.ALL_ELEMENTS),
  };

  static defaultProps = {
    ...Base.defaultProps,
    as: 'span',
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
      extrapolateClasses({
        align,
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
      }),
    );

    return <Base {...rest} className={classes || undefined} component={Text} />;
  }
}
