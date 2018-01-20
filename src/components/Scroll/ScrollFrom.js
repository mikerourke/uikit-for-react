import React from 'react';
import PropTypes from 'prop-types';
import {
  getElementType,
  HTML,
} from '../../lib';

export default class ScrollFrom extends React.Component {
  static meta = {
    name: 'ScrollFrom',
  };

  static propTypes = {
    as: PropTypes.oneOfType([
      PropTypes.oneOf(HTML.BLOCK_ELEMENTS),
      PropTypes.element,
      PropTypes.func,
    ]),
    children: PropTypes.node.isRequired,
  };

  static defaultProps = {
    as: 'div',
  };

  render() {
    const {
      as,
      children,
      ...rest
    } = this.props;

    const Element = getElementType(ScrollFrom, this.props);
    return (
      <Element{...rest}>
        {children}
      </Element>
    );
  }
}
