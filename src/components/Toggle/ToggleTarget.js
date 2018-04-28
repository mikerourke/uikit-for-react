import React from 'react';
import { customPropTypes, HTML } from '../../lib';
import Base from '../Base';

export default class ToggleTarget extends React.Component {
  static displayName = 'ToggleTarget';

  static propTypes = {
    ...Base.propTypes,
    as: customPropTypes.customOrStringElement(HTML.ALL_ELEMENTS),
  };

  static defaultProps = {
    ...Base.defaultProps,
    as: 'div',
  };

  render() {
    return (
      <Base {...this.props} component={ToggleTarget} data-toggle-target="" />
    );
  }
}
