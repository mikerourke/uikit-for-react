import React from 'react';
import PropTypes from 'prop-types';
import { BaseElement } from '../../base';

export default class ToggleTarget extends React.Component {
  static displayName = 'ToggleTarget';

  static propTypes = {
    ...BaseElement.propTypes,
    as: BaseElement.asPropType,
    children: PropTypes.node,
    className: PropTypes.string,
  };

  static defaultProps = {
    ...BaseElement.defaultProps,
    as: 'div',
    className: '',
  };

  render() {
    return <BaseElement {...this.props} />;
  }
}
