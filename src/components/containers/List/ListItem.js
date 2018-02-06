import React from 'react';
import PropTypes from 'prop-types';
import { customPropTypes, getElementType } from '../../../lib';

export default class ListItem extends React.Component {
  static displayName = 'ListItem';

  static propTypes = {
    as: customPropTypes.customOrStringElement('li'),
    children: PropTypes.node,
    className: PropTypes.string,
  };

  static defaultProps = {
    as: 'li',
    className: '',
  };

  render() {
    const { as, ...rest } = this.props;
    const Element = getElementType(ListItem, as);
    return <Element {...rest} />;
  }
}
