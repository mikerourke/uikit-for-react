import React from 'react';
import PropTypes from 'prop-types';
import { customPropTypes } from '../../../lib';
import { BlockElement } from '../../base';

export default class TableFooter extends React.Component {
  static displayName = 'TableFooter';

  static propTypes = {
    ...BlockElement.propTypes,
    as: customPropTypes.customOrStringElement('tfoot'),
    children: PropTypes.node,
    className: PropTypes.string,
  };

  static defaultProps = {
    ...BlockElement.defaultProps,
    as: 'tfoot',
    className: '',
  };

  render() {
    return <BlockElement {...this.props} />;
  }
}
