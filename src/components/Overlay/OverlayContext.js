import React from 'react';
import { customPropTypes, HTML } from '../../lib';
import Base from '../Base';

export default class OverlayContext extends React.Component {
  static displayName = 'OverlayContext';

  static propTypes = {
    ...Base.propTypes,
    as: customPropTypes.customOrStringElement(HTML.BLOCK_ELEMENTS),
  };

  static defaultProps = {
    ...Base.defaultProps,
    as: 'div',
  };

  render() {
    return <Base {...this.props} component={OverlayContext} inline />;
  }
}
