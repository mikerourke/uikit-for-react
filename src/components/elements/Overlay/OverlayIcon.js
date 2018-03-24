import React from 'react';
import PropTypes from 'prop-types';
import { customPropTypes } from '../../../lib';
import Base from '../../base';

export default class OverlayIcon extends React.Component {
  static displayName = 'OverlayIcon';

  static propTypes = {
    ...Base.propTypes,
    as: customPropTypes.customOrStringElement('span'),
    children: PropTypes.node,
  };

  static defaultProps = {
    ...Base.defaultProps,
    as: 'span',
  };

  render() {
    return (
      <Base {...this.props} component={OverlayIcon} data-uk-overlay-icon="" />
    );
  }
}
