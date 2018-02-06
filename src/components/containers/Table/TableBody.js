import React from 'react';
import PropTypes from 'prop-types';
import { customPropTypes, getElementType } from '../../../lib';

export default class TableBody extends React.Component {
  static displayName = 'TableBody';

  static propTypes = {
    as: customPropTypes.customOrStringElement('tbody'),
    children: PropTypes.node,
    className: PropTypes.string,
  };

  static defaultProps = {
    as: 'tbody',
    className: '',
  };

  render() {
    const { as, ...rest } = this.props;
    const Element = getElementType(TableBody, as);
    return <Element {...rest} />;
  }
}
