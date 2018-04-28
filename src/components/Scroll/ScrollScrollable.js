import React from 'react';
import PropTypes from 'prop-types';
import { customPropTypes, HTML } from '../../lib';
import Base from '../Base';

export default class ScrollScrollable extends React.Component {
  static displayName = 'ScrollScrollable';

  static propTypes = {
    ...Base.propTypes,
    as: customPropTypes.customOrStringElement(HTML.BLOCK_ELEMENTS),
    children: PropTypes.node.isRequired,
  };

  static defaultProps = {
    ...Base.defaultProps,
    as: 'div',
  };

  render() {
    return <Base {...this.props} component={ScrollScrollable} />;
  }
}
