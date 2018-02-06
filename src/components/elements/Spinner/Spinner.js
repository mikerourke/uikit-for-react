import React from 'react';
import PropTypes from 'prop-types';
import { customPropTypes, getElementType, HTML } from '../../../lib';

export default class Spinner extends React.Component {
  static displayName = 'Spinner';

  static propTypes = {
    as: customPropTypes.customOrStringElement(HTML.BLOCK_ELEMENTS),
    className: PropTypes.string,
  };

  static defaultProps = {
    as: 'div',
    className: '',
  };

  render() {
    const { as, ...rest } = this.props;
    const Element = getElementType(Spinner, this.props);
    return <Element {...rest} data-uk-spinner="" />;
  }
}
