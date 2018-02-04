import React from 'react';
import PropTypes from 'prop-types';
import { BlockElement } from '../../base';
import { customPropTypes } from '../../../lib';

export default class ListItem extends React.Component {
  static displayName = 'ListItem';

  static propTypes = {
    ...BlockElement.propTypes,
    as: customPropTypes.customOrStringElement('li'),
    children: PropTypes.node,
    className: PropTypes.string,
  };

  static defaultProps = {
    ...BlockElement.defaultProps,
    as: 'li',
    className: '',
  };

  render() {
    return <BlockElement {...this.props} />;
  }
}
