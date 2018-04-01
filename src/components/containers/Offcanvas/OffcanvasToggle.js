import React from 'react';
import { Toggle } from '../../elements';

export default class OffcanvasToggle extends React.Component {
  static displayName = 'OffcanvasToggle';
  static propTypes = Toggle.propTypes;
  static defaultProps = Toggle.defaultProps;

  render() {
    return <Toggle {...this.props} component={OffcanvasToggle} />;
  }
}
