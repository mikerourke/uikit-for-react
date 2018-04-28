import React from 'react';
import PropTypes from 'prop-types';
import { customPropTypes, generateIdentifier, HTML } from '../../lib';
import Base from '../Base';
import Ref from '../Ref';

export default class ToggleTogglable extends React.Component {
  static displayName = 'ToggleTogglable';

  static propTypes = {
    ...Base.propTypes,
    as: customPropTypes.customOrStringElement(HTML.ALL_ELEMENTS),
    children: PropTypes.node.isRequired,
  };

  static defaultProps = {
    ...Base.defaultProps,
    as: 'div',
  };

  constructor(props) {
    super(props);
    this.ref = null;
    this.linkingClass = generateIdentifier();
  }

  componentDidMount() {
    // TODO: Fix this because it's not working.
    const attrName = 'data-toggle-target';
    const toggles = this.ref.querySelectorAll('[uk-toggle]');
    if (toggles.length !== 0) {
      toggles.forEach(toggleElement =>
        toggleElement.setAttribute('target', `[${attrName}]`),
      );
    }
    // const targets = this.ref.querySelectorAll(`[${attrName}]`);
  }

  handleRef = element => (this.ref = element);

  render() {
    return (
      <Ref innerRef={this.handleRef}>
        <Base {...this.props} component={ToggleTogglable} />
      </Ref>
    );
  }
}
