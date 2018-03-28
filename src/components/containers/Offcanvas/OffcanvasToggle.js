import React from 'react';
import { ToggleToggle } from '../../elements';

export default class OffcanvasToggle extends React.Component {
  static displayName = 'OffcanvasToggle';
  static propTypes = ToggleToggle.propTypes;
  static defaultProps = ToggleToggle.defaultProps;

  render() {
    return <ToggleToggle {...this.props} component={OffcanvasToggle} />;
  }
}
