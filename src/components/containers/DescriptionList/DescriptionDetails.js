import React from 'react';
import PropTypes from 'prop-types';
import { customPropTypes } from '../../../lib';
import { BlockElement } from '../../base';

export default class DescriptionDetails extends React.Component {
  static displayName = 'DescriptionDetails';

  static propTypes = {
    ...BlockElement.propTypes,
    as: customPropTypes.customOrStringElement('dd'),
    children: PropTypes.node,
    className: PropTypes.string,
  };

  static defaultProps = {
    ...BlockElement.defaultProps,
    as: 'dd',
    className: '',
  };

  render() {
    return <BlockElement {...this.props} />;
  }
}
