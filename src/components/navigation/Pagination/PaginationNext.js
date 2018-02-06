import React from 'react';
import PropTypes from 'prop-types';
import { customPropTypes, getElementType } from '../../../lib';

export default class PaginationNext extends React.Component {
  static displayName = 'PaginationNext';

  static propTypes = {
    as: customPropTypes.customOrStringElement('span'),
    children: PropTypes.node.isRequired,
    className: PropTypes.string,
  };

  static defaultProps = {
    as: 'span',
    className: '',
  };

  render() {
    const { as, ...rest } = this.props;
    const Element = getElementType(PaginationNext, as);
    return <Element {...rest} data-uk-pagination-next="" />;
  }
}
