import React from 'react';
import PropTypes from 'prop-types';
import { customPropTypes, getElementType } from '../../../lib';

export default class TableRow extends React.Component {
  static displayName = 'TableRow';

  static propTypes = {
    as: customPropTypes.customOrStringElement('tr'),
    children: PropTypes.node,
    className: PropTypes.string,
  };

  static defaultProps = {
    as: 'tr',
    className: '',
  };

  render() {
    const { as, ...rest } = this.props;
    const Element = getElementType(TableRow, this.props);
    return <Element {...rest} />;
  }
}
