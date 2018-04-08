import React from 'react';
import { customPropTypes } from '../../lib';
import Base from '../Base';

export default class ThumbnavImage extends React.Component {
  static displayName = 'ThumbnavImage';

  static propTypes = {
    ...Base.propTypes,
    as: customPropTypes.customOrStringElement('img'),
  };

  static defaultProps = {
    ...Base.defaultProps,
    as: 'img',
  };

  render() {
    return <Base {...this.props} component={ThumbnavImage} />;
  }
}
