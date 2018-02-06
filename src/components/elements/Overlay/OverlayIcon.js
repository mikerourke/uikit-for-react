import React from 'react';
import PropTypes from 'prop-types';
import { customPropTypes, getElementType } from '../../../lib';

export default class OverlayIcon extends React.Component {
  static displayName = 'OverlayIcon';

  static propTypes = {
    as: customPropTypes.customOrStringElement('span'),
    children: PropTypes.node,
    className: PropTypes.string,
  };

  static defaultProps = {
    as: 'span',
    className: '',
  };

  render() {
    const { as, ...rest } = this.props;
    const Element = getElementType(OverlayIcon, as);
    return <Element {...rest} data-uk-overlay-icon="" />;
  }
}
