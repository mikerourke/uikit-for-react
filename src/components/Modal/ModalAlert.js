import React from 'react';
import UIkit from 'uikit';
import PropTypes from 'prop-types';
import noop from 'lodash/noop';
import Ref from '../Ref';
import invoke from 'lodash/invoke';

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
    this.ref = null;
  }

  componentDidMount() {
    const { children, onClose } = this.props;
    UIkit.util.on(this.ref, 'click', e => {
      e.preventDefault();
      e.target.blur();
      UIkit.modal.alert(children).then(onClose);
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
