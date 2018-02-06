import React from 'react';
import PropTypes from 'prop-types';
import { customPropTypes, getElementType } from '../../../lib';

export default class PaginationPrevious extends React.Component {
  static displayName = 'PaginationPrevious';

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
    const Element = getElementType(PaginationPrevious, as);
    return <Element {...rest} data-uk-pagination-previous="" />;
  }
}
