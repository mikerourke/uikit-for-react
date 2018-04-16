import React from 'react';
import UIkit from 'uikit';
import PropTypes from 'prop-types';
import noop from 'lodash/noop';
import Ref from '../Ref';

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
    this.ref = null;
  }

  componentDidMount() {
    const { children, onCancel, onConfirm } = this.props;
    UIkit.util.on(this.ref, 'click', e => {
      e.preventDefault();
      e.target.blur();
      UIkit.modal.confirm(children).then(onConfirm, onCancel);
    });
  }

  handleRef = element => (this.ref = element);

  render() {
    return (
      <Ref innerRef={this.handleRef}>
        <span>{this.props.toggle}</span>
      </Ref>
    );
  }
}
