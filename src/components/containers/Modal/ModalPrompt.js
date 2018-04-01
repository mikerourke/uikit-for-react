import React from 'react';
import UIkit from 'uikit';
import PropTypes from 'prop-types';
import ExtraPropTypes from 'airbnb-prop-types';
import { LibraryComponent } from '../../../lib';

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
    this.libComp = new LibraryComponent('modal-prompt');
  }

  componentDidMount() {
    const { label, onConfirm, placeholder } = this.props;
    UIkit.util.on(this.libComp.cssSelector, 'click', e => {
      e.preventDefault();
      e.target.blur();
      UIkit.modal.prompt(label, placeholder).then(onConfirm);
    });
  }

  render() {
    return (
      <span {...this.libComp.appendProps(this.props)}>{this.props.toggle}</span>
    );
  }
}
