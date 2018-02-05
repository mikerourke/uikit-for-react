import React from 'react';
import PropTypes from 'prop-types';
import { customPropTypes, getElementType } from '../../../lib';

export default class DescriptionDetails extends React.Component {
  static displayName = 'DescriptionDetails';

  static propTypes = {
    as: customPropTypes.customOrStringElement('dd'),
    children: PropTypes.node,
    className: PropTypes.string,
  };

  static defaultProps = {
    as: 'dd',
    className: '',
  };

  render() {
    const { as, ...rest } = this.props;
    const Element = getElementType(DescriptionDetails, this.props);
    return <Element {...rest} />;
  }
}
