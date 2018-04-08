import React from 'react';
import UIkit from 'uikit';
import PropTypes from 'prop-types';
import noop from 'lodash/noop';
import { LibraryComponent } from '../../lib';

export default class ModalAlert extends React.Component {
  static displayName = 'ModalAlert';

  static propTypes = {
    children: PropTypes.string.isRequired,
    onClose: PropTypes.func,
    toggle: PropTypes.node.isRequired,
  };

  static defaultProps = {
    onClose: noop,
  };

  constructor(props) {
    super(props);
    this.libComp = new LibraryComponent('modal-alert');
  }

  componentDidMount() {
    const { children, onClose } = this.props;
    UIkit.util.on(this.libComp.cssSelector, 'click', e => {
      e.preventDefault();
      e.target.blur();
      UIkit.modal.alert(children).then(onClose);
    });
  }

  render() {
    return (
      <span {...this.libComp.appendProps(this.props)}>{this.props.toggle}</span>
    );
  }
}
