import React from 'react';
import PropTypes from 'prop-types';
import { customPropTypes, getElementType, HTML } from '../../../lib';

export default class ToggleTarget extends React.Component {
  static displayName = 'ToggleTarget';

  static propTypes = {
    as: customPropTypes.customOrStringElement([
      ...HTML.BLOCK_ELEMENTS,
      ...HTML.INLINE_ELEMENTS,
    ]),
    children: PropTypes.node,
    className: PropTypes.string,
  };

  static defaultProps = {
    as: 'div',
    className: '',
  };

  render() {
    const { as, ...rest } = this.props;
    const Element = getElementType(ToggleTarget, this.props);
    return <Element {...rest} />;
  }
}
