import React from 'react';
import PropTypes from 'prop-types';
import { customPropTypes, getElementType } from '../../../lib';

export default class TableFooter extends React.Component {
  static displayName = 'TableFooter';

  static propTypes = {
    as: customPropTypes.customOrStringElement('tfoot'),
    children: PropTypes.node,
    className: PropTypes.string,
  };

  static defaultProps = {
    as: 'tfoot',
    className: '',
  };

  render() {
    const { as, ...rest } = this.props;
    const Element = getElementType(TableFooter, as);
    return <Element {...rest} />;
  }
}
