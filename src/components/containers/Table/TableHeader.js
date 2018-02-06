import React from 'react';
import PropTypes from 'prop-types';
import { customPropTypes, getElementType } from '../../../lib';

export default class TableHeader extends React.Component {
  static displayName = 'TableHeader';

  static propTypes = {
    as: customPropTypes.customOrStringElement('thead'),
    children: PropTypes.node,
    className: PropTypes.string,
  };

  static defaultProps = {
    as: 'thead',
    className: '',
  };

  render() {
    const { as, ...rest } = this.props;
    const Element = getElementType(TableHeader, as);
    return <Element {...rest} />;
  }
}
