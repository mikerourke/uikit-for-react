import React from 'react';
import { customPropTypes } from '../../../lib';
import Base from '../../base';

export default class SlideshowItem extends React.Component {
  static displayName = 'SlideshowItem';

  static propTypes = {
    ...Base.propTypes,
    as: customPropTypes.customOrStringElement('li'),
  };

  static defaultProps = {
    ...Base.defaultProps,
    as: 'li',
  };

  render() {
    return <Base {...this.props} component={SlideshowItem} />;
  }
}
