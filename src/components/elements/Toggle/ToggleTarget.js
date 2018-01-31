import React from 'react';
import PropTypes from 'prop-types';
import { AnyElement } from '../../base';

export default class ToggleTarget extends React.Component {
  static displayName = 'ToggleTarget';

  static propTypes = {
    ...AnyElement.propTypes,
    as: AnyElement.asPropType,
    children: PropTypes.node,
    className: PropTypes.string,
  };

  static defaultProps = {
    ...AnyElement.defaultProps,
    as: 'div',
    className: '',
  };

  render() {
    return <AnyElement {...this.props} />;
  }
}
