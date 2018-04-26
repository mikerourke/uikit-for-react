import React from 'react';
import classnames from 'classnames';
import { customPropTypes } from '../../lib';
import Base from '../Base';

export default class SliderItems extends React.Component {
  static displayName = 'SliderItems';

  static propTypes = {
    ...Base.propTypes,
    as: customPropTypes.customOrStringElement('ul'),
  };

  static defaultProps = {
    ...Base.defaultProps,
    as: 'ul',
  };

  render() {
    const { className, ...rest } = this.props;

    const classes = classnames(className, 'uk-slider-items');

    return <Base {...rest} className={classes} component={SliderItems} />;
  }
}
