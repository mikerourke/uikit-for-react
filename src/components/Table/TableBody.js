import React from 'react';
import { customPropTypes } from '../../lib';
import Base from '../Base';

export default class TableBody extends React.Component {
  static displayName = 'TableBody';

  static propTypes = {
    ...Base.propTypes,
    as: customPropTypes.customOrStringElement('tbody'),
  };

  static defaultProps = {
    ...Base.defaultProps,
    as: 'tbody',
  };

  render() {
    return <Base {...this.props} component={TableBody} />;
  }
}
