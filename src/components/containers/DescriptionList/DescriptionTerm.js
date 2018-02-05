import React from 'react';
import PropTypes from 'prop-types';
import { customPropTypes, getElementType } from '../../../lib';

export default class DescriptionTerm extends React.Component {
  static displayName = 'DescriptionTerm';

  static propTypes = {
    as: customPropTypes.customOrStringElement('dt'),
    children: PropTypes.node,
    className: PropTypes.string,
  };

  static defaultProps = {
    as: 'dt',
    className: '',
  };

  render() {
    const { as, ...rest } = this.props;
    const Element = getElementType(DescriptionTerm, this.props);
    return <Element {...rest} />;
  }
}
