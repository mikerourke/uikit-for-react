import React from 'react';
import PropTypes from 'prop-types';
import { customPropTypes } from '../../../lib';
import { BlockElement } from '../../base';

export default class TableBody extends React.Component {
  static displayName = 'TableBody';

  static propTypes = {
    ...BlockElement.propTypes,
    as: customPropTypes.customOrStringChild('tbody'),
    children: PropTypes.node,
    className: PropTypes.string,
  };

  static defaultProps = {
    ...BlockElement.defaultProps,
    as: 'tbody',
    className: '',
  };

  render() {
    return <BlockElement {...this.props} />;
  }
}
