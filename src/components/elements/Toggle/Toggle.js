import React from 'react';
import ToggleTarget from './ToggleTarget';
import ToggleTogglable from './ToggleTogglable';
import ToggleToggle from './ToggleToggle';

export default class Toggle extends React.Component {
  static displayName = 'Toggle';
  static propTypes = ToggleToggle.propTypes;
  static defaultProps = ToggleToggle.defaultProps;

  static Target = ToggleTarget;
  static Togglable = ToggleTogglable;
  static Toggle = ToggleToggle;

  render() {
    return <ToggleToggle {...this.props} />;
  }
}
