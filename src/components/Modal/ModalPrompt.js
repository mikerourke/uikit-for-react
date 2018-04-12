import React from 'react';
import UIkit from 'uikit';
import PropTypes from 'prop-types';
import ExtraPropTypes from 'airbnb-prop-types';
import Ref from '../Ref';
import invoke from 'lodash/invoke';

export default class ModalPrompt extends React.Component {
  static displayName = 'ModalPrompt';

  static propTypes = {
    children: ExtraPropTypes.restrictedProp(),
    label: PropTypes.string.isRequired,
    onConfirm: PropTypes.func.isRequired,
    placeholder: PropTypes.string,
    toggle: PropTypes.node.isRequired,
  };

  static defaultProps = {
    placeholder: '',
  };

  constructor(props) {
    super(props);
    this.ref = null;
  }

  componentDidMount() {
    const { label, onConfirm, placeholder } = this.props;
    UIkit.util.on(this.ref, 'click', e => {
      e.preventDefault();
      e.target.blur();
      UIkit.modal.prompt(label, placeholder).then(onConfirm);
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
