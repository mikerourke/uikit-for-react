import React from 'react';
import { customPropTypes, HTML } from '../../../lib';
import Base from '../../base';

export default class ModalContent extends React.Component {
  static displayName = 'ModalContent';

  static propTypes = {
    ...Base.propTypes,
    as: customPropTypes.customOrStringElement(HTML.ALL_ELEMENTS),
  };

  static defaultProps = {
    ...Base.defaultProps,
    as: 'div',
  };

  render() {
    return <Base {...this.props} component={ModalContent} />;
  }
}
