import React from 'react';
import PropTypes from 'prop-types';
import { customPropTypes } from '../../../lib';
import { BlockElement } from '../../base';

export default class TableHeader extends React.Component {
  static displayName = 'TableHeader';

  static propTypes = {
    ...BlockElement.propTypes,
    as: customPropTypes.customOrStringChild('thead'),
    children: PropTypes.node,
    className: PropTypes.string,
  };

  static defaultProps = {
    ...BlockElement.defaultProps,
    as: 'thead',
    className: '',
  };

  render() {
    return <BlockElement {...this.props} />;
  }
}
