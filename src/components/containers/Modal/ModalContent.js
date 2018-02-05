import React from 'react';
import PropTypes from 'prop-types';
import { customPropTypes, getElementType, HTML } from '../../../lib';

export default class ModalContent extends React.Component {
  static displayName = 'ModalContent';

  static propTypes = {
    as: customPropTypes.customOrStringElement(HTML.BLOCK_ELEMENTS),
    children: PropTypes.node.isRequired,
    className: PropTypes.string,
  };

  static defaultProps = {
    as: 'div',
    className: '',
  };

  render() {
    const { as, ...rest } = this.props;
    const Element = getElementType(ModalContent, this.props);
    return <Element {...rest} />;
  }
}
