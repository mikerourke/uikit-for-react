import React from 'react';
import { customPropTypes } from '../../lib';
import Base from '../Base';

export default class OverlayIcon extends React.Component {
  static displayName = 'OverlayIcon';

  static propTypes = {
    ...Base.propTypes,
    as: customPropTypes.customOrStringElement('span'),
  };

  static defaultProps = {
    ...Base.defaultProps,
    as: 'span',
  };

  render() {
    return <Base {...this.props} component={OverlayIcon} uk-overlay-icon="" />;
  }
}
