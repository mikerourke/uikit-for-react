import React from 'react';
import { customPropTypes } from '../../lib';
import Base from '../Base';

export default class TableFooter extends React.Component {
  static displayName = 'TableFooter';

  static propTypes = {
    ...Base.propTypes,
    as: customPropTypes.customOrStringElement('tfoot'),
  };

  static defaultProps = {
    ...Base.defaultProps,
    as: 'tfoot',
  };

  render() {
    return <Base {...this.props} component={TableFooter} />;
  }
}
