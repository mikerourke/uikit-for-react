import React from 'react';
import { customPropTypes } from '../../lib';
import Base from '../Base';

export default class SliderItem extends React.Component {
  static displayName = 'SliderItem';

  static propTypes = {
    ...Base.propTypes,
    as: customPropTypes.customOrStringElement('li'),
  };

  static defaultProps = {
    ...Base.defaultProps,
    as: 'li',
  };

  render() {
    return <Base {...this.props} component={SliderItem} />;
  }
}
