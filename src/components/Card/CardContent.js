import React from 'react';
import { customPropTypes, HTML } from '../../lib';
import Base from '../Base';

export default class CardContent extends React.Component {
  static displayName = 'CardContent';

  static propTypes = {
    ...Base.propTypes,
    as: customPropTypes.customOrStringElement(HTML.BLOCK_ELEMENTS),
  };

  static defaultProps = {
    ...Base.defaultProps,
    as: 'p',
  };

  render() {
    return <Base {...this.props} component={CardContent} />;
  }
}
