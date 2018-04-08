import React from 'react';
import { LibraryComponent } from '../../lib';
import Toggle from '../Toggle';

export default class OffcanvasToggle extends React.Component {
  static displayName = 'OffcanvasToggle';
  static propTypes = Toggle.propTypes;
  static defaultProps = Toggle.defaultProps;

  constructor(props) {
    super(props);
    this.libComp = new LibraryComponent('offcanvas-toggle');
  }

  render() {
    return (
      <Toggle
        {...this.props}
        component={OffcanvasToggle}
        {...this.libComp.appendProps(this.props)}
      />
    );
  }
}
