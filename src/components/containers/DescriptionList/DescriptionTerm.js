import React from 'react';
import PropTypes from 'prop-types';
import { customPropTypes } from '../../../lib';
import { BlockElement } from '../../base';

export default class DescriptionTerm extends React.Component {
  static displayName = 'DescriptionTerm';

  static propTypes = {
    ...BlockElement.propTypes,
    as: customPropTypes.customOrStringElement('dt'),
    children: PropTypes.node,
    className: PropTypes.string,
  };

  static defaultProps = {
    ...BlockElement.defaultProps,
    as: 'dt',
    className: '',
  };

  render() {
    return <BlockElement {...this.props} />;
  }
}
