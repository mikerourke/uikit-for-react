import React from 'react';
import PropTypes from 'prop-types';
import { customPropTypes, getElementType, HTML } from '../../../lib';

export default class CardContent extends React.Component {
  static displayName = 'CardContent';

  static propTypes = {
    as: customPropTypes.customOrStringElement(HTML.BLOCK_ELEMENTS),
    children: PropTypes.node,
    className: PropTypes.string,
  };

  static defaultProps = {
    as: 'p',
    className: '',
  };

  render() {
    const { as, ...rest } = this.props;
    const Element = getElementType(CardContent, this.props);
    return <Element {...rest} />;
  }
}
