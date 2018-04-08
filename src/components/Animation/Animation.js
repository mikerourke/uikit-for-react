import React from 'react';
import classnames from 'classnames';
import omit from 'lodash/omit';
import { customPropTypes } from '../../lib';
import { propTypes, extrapolateClasses } from '../common/animationProps';
import Base from '../Base';

export default class Animation extends React.Component {
  static displayName = 'Animation';

  static propTypes = {
    ...omit(Base.propTypes, 'animation'),
    ...propTypes,
    as: customPropTypes.customOrStringElement('div'),
  };

  static defaultProps = {
    ...Base.defaultProps,
    as: 'div',
  };

  render() {
    const {
      className,
      fast,
      name,
      reverse,
      transformCenter,
      transformOrigin,
      ...rest
    } = this.props;

    const classes = classnames(
      className,
      extrapolateClasses({
        name,
        reverse,
        fast,
        transformCenter,
        transformOrigin,
      }),
    );

    return (
      <Base {...rest} className={classes || undefined} component={Animation} />
    );
  }
}
