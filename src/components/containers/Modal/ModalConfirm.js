import React from 'react';
import UIkit from 'uikit';
import PropTypes from 'prop-types';
import noop from 'lodash/noop';
import { LibraryComponent } from '../../../lib';

export default class ModalConfirm extends React.Component {
  static displayName = 'ModalConfirm';

  static propTypes = {
    children: PropTypes.string.isRequired,
    onCancel: PropTypes.func,
    onConfirm: PropTypes.func.isRequired,
    toggle: PropTypes.node.isRequired,
  };

  static defaultProps = {
    onCancel: noop,
  };

  constructor(props) {
    super(props);
    this.libComp = new LibraryComponent('modal-confirm');
  }

  componentDidMount() {
    const { children, onCancel, onConfirm } = this.props;
    UIkit.util.on(this.libComp.cssSelector, 'click', e => {
      e.preventDefault();
      e.target.blur();
      UIkit.modal.confirm(children).then(onConfirm, onCancel);
    });
  }

  render() {
    return (
      <span {...this.libComp.appendProps(this.props)}>{this.props.toggle}</span>
    );
  }
}
