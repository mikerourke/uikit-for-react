import React from 'react';
import { customPropTypes } from '../../../lib';
import Base from '../../base';

export default class ThumbNavImage extends React.Component {
  static displayName = 'ThumbNavImage';

  static propTypes = {
    ...Base.propTypes,
    as: customPropTypes.customOrStringElement('img'),
  };

  static defaultProps = {
    ...Base.defaultProps,
    as: 'img',
  };

  render() {
    return <Base {...this.props} component={ThumbNavImage} />;
  }
}
