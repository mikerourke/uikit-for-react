import React from 'react';
import PropTypes from 'prop-types';
import { customPropTypes, generateIdentifier, HTML } from '../../lib';
import Base from '../Base';

export default class SwitcherSwitchable extends React.Component {
  static displayName = 'SwitcherSwitchable';

  static propTypes = {
    ...Base.propTypes,
    as: customPropTypes.customOrStringElement(HTML.BLOCK_ELEMENTS),
    children: PropTypes.node.isRequired,
  };

  static defaultProps = {
    ...Base.defaultProps,
    as: 'div',
  };

  constructor(props) {
    super(props);
    this.linkingClass = generateIdentifier();
  }

  componentDidMount() {
    const toggles = this.ref.querySelectorAll('[uk-switcher]');
    if (toggles.length !== 0) {
      toggles.forEach(toggleElement =>
        toggleElement.setAttribute('connect', this.linkingClass),
      );
    }
    const contents = this.ref.querySelectorAll('[data-switcher-content]');
    if (contents.length !== 0) {
      contents.forEach(contentElement =>
        contentElement.classList.add(this.linkingClass),
      );
    }
  }

  render() {
    return <Base {...this.props} component={SwitcherSwitchable} />;
  }
}
